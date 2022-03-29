const axios = require("axios");
const {Pokemon, Type} = require("../db");
const {Op} = require("sequelize");
const url = "https://pokeapi.co/api/v2";
const poke = "/pokemon";

const getAllPoke = async url => {
  try {
    const {data} = await axios.get(url);
    const promises = data.results.map(p => axios.get(p.url));
    const response = await Promise.allSettled(promises);
    const pokemon = response
      .filter(p => p.status === "fulfilled")
      .map(p => {
        return {
          id: p.value.data.id,
          name: p.value.data.name,
          hp: p.value.data.stats[0].base_stat,
          attack: p.value.data.stats[1].base_stat,
          defense: p.value.data.stats[2].base_stat,
          speed: p.value.data.stats[5].base_stat,
          height: p.value.data.height,
          weight: p.value.data.weight,
          types: p.value.data.types.map(t => t.type.name),
          img: p.value.data.sprites.other["official-artwork"].front_default,
        };
      });
    return pokemon;
  } catch (err) {
    return err;
  }
};
const getPokeDb = async () => {
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
        hp: dataValues.hp,
        attack: dataValues.attack,
        defense: dataValues.defense,
        speed: dataValues.speed,
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

const getAllInfo = async () => {
  try {
    const pokeApi = (await getAllPoke(`${url}${poke}?limit=40&offset=0`)) || [];
    const pokeDb = await getPokeDb();
    return [...pokeApi, ...pokeDb];
  } catch (err) {
    return err;
  }
};
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
      const {data} = await axios.get(`${url}/pokemon/${newId}`);
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
    }
    return null;
  } catch (err) {
    return err;
  }
};
const getPokeByName = async name => {
  const {data} = await axios.get(`${url}/pokemon/${name}`);
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
    newPoke.addTypes(typesDb);
    return newPoke;
  } catch (err) {
    return err;
  }
};
const saveType = async () => {
  try {
    const {data} = await axios(`${url}/type`);
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
  getAllInfo,
  getPokeByName,
  getPokeDb,
};
