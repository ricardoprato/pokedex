const fetch = require("node-fetch");
const {Pokemon, Type} = require("../db");
const {Op} = require("sequelize");
const url = "https://pokeapi.co/api/v2";
const poke = "/pokemon";

const getPokeApi = async (limit, offset) => {
  try {
    const response = await fetch(
      `${url}${poke}?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    const promises = data?.results.map(async p => {
      const response = await fetch(p?.url);
      const data = await response.json();
      return data;
    });
    const responses = await Promise.allSettled(promises);
    const pokemon = responses
      .filter(p => p.status === "fulfilled")
      .map(({value}) => {
        return {
          id: value.id,
          name: value.name,
          height: value.height,
          weight: value.weight,
          types: value.types.map(t => t.type.name),
          img: value.sprites.other["official-artwork"].front_default,
        };
      });
    return pokemon;
  } catch (err) {
    return err;
  }
};
const getPokesDb = async () => {
  try {
    let poke = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
      },
    });
    poke = poke.map(({dataValues}) => {
      return {
        id: `${dataValues.id}DB`,
        name: dataValues.name,
        height: dataValues.height,
        weight: dataValues.weight,
        types: dataValues.types.map(t => t.name),
        img: dataValues.img,
      };
    });
    return poke;
  } catch (err) {
    return err;
  }
};

/* const getAllInfo = async () => {
  try {
    const pokeApi = (await getPokeApi(`${url}${poke}?limit=40&offset=0`)) || [];
    const pokeDb = await getPokesDb();
    return [...pokeApi, ...pokeDb];
  } catch (err) {
    return err;
  }
}; */

const getSinglePoke = async id => {
  try {
    if (id.slice(-2).toUpperCase() === "DB") {
      const newId = Number(id.split(/\D/g)[0]);
      const {dataValues} = await Pokemon.findByPk(newId, {
        include: {model: Type},
      });
      if (dataValues?.id) {
        const poke = {
          id: dataValues.id + "DB",
          name: dataValues.name,
          hp: dataValues.hp,
          attack: dataValues.attack,
          defense: dataValues.defense,
          specialAttack: dataValues.specialAttack,
          specialDefense: dataValues.specialDefense,
          speed: dataValues.speed,
          height: dataValues.height,
          weight: dataValues.weight,
          types: dataValues.types.map(t => t.name),
          img: dataValues.img,
        };
        return poke;
      }
      return {};
    }
    const newId = parseInt(id);
    if (!isNaN(newId)) {
      const response = await fetch(`${url}${poke}/${newId}`);
      const data = await response.json();
      if (data?.id) {
        const poke = {
          id: data.id,
          name: data.name,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: data.stats[5].base_stat,
          height: data.height,
          weight: data.weight,
          types: data.types.map(t => t.type.name),
          img: data.sprites.other["official-artwork"].front_default,
        };
        return poke;
      }
      return {};
    }
    return null;
  } catch (err) {
    return err;
  }
};
const getPokeByName = async name => {
  const response = await fetch(`${url}${poke}/${name}`);
  const data = await response.json();
  if (data?.id) {
    const poke = {
      id: data.id,
      name: data.name,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      speed: data.stats[5].base_stat,
      height: data.height,
      weight: data.weight,
      types: data.types.map(t => t.type.name),
      img: data.sprites.other["official-artwork"].front_default,
    };
    return poke;
  }
  return {};
};
const postPoke = async ({
  name,
  hp,
  attack,
  defense,
  specialDefense,
  specialAttack,
  speed,
  height,
  weight,
  types,
  img,
}) => {
  try {
    const newPoke = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      specialDefense,
      specialAttack,
      speed,
      height,
      weight,
      img,
    });
    let typesDb = await Type.findAll({
      where: {
        name: {
          [Op.in]: types,
        },
      },
    });
    await newPoke.addTypes(typesDb);
    return newPoke;
  } catch (err) {
    return err;
  }
};
const saveType = async () => {
  try {
    const response = await fetch(`${url}/type`);
    const data = await response.json();
    const types = data.results.map(t => {
      return {name: t.name};
    });
    const typesDb = await Type.findAll();
    typesDb.length === 0 && (await Type.bulkCreate(types));
  } catch (err) {
    return err;
  }
};
const getTypes = async () => {
  try {
    let typesDb = await Type.findAll();
    typesDb = typesDb.map(t => t.toJSON());
    return typesDb;
  } catch (err) {
    return err;
  }
};
module.exports = {
  saveType,
  getTypes,
  getSinglePoke,
  postPoke,
  getPokeApi,
  getPokeByName,
  getPokesDb,
};
