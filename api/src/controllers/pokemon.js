const {Pokemon, Type} = require("../db");
const {Op} = require("sequelize");

const {
  getPokeApi,
  getSinglePoke,
  postPoke,
  getPokeByName,
  getPokesDb,
} = require("./utils");

const getPokemons = async (req, res, next) => {
  try {
    const {name, limit, offset} = req.query;
    if (name) {
      const pokemon = await getPokeByName(name);
      return pokemon
        ? res.send(pokemon)
        : res.status(404).send({msg: "poke not found"});
    } else {
      const response = await getPokeApi(limit, offset);
      res.send(response);
    }
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send({msg: err.response.status});
    } else if (err.request) {
      next(err.request);
    } else {
      next(err);
    }
  }
};

const getPokemonsDB = async (req, res, next) => {
  try {
    const pokeDb = await getPokesDb();
    res.send(pokeDb);
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send({msg: err.response.status});
    } else if (err.request) {
      next(err.request);
    } else {
      next(err);
    }
  }
};
const getPokemonId = async (req, res, next) => {
  try {
    const {id} = req.params;
    const poke = await getSinglePoke(id);
    poke.id ? res.send(poke) : res.status(404).send({msg: "poke not found"});
  } catch (err) {
    if (err.response) {
      res
        .status(err.response.status)
        .send({msg: err.response.statusText + " " + err.response.status});
    } else if (err.request) {
      next(err.request);
    } else {
      next(err);
    }
  }
};
const postPokemon = async (req, res, next) => {
  try {
    const props = req.body;
    const poke = await postPoke(props);
    poke.dataValues
      ? res.status(201).send({msg: "Pokemon added", id: poke.dataValues.id})
      : res.status(406).send({msg: "invalid data"});
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send({msg: err.response.status});
    } else if (err.request) {
      next(err.request);
    } else {
      next(err);
    }
  }
};
const deletePoke = async (req, res, next) => {
  try {
    const {id} = req.params;
    const newId = Number(id.split(/\D/g)[0]);
    const poke = await Pokemon.findByPk(newId);
    if (poke) {
      await poke.destroy();
      res.send({msg: "Pokemon deleted"});
    } else {
      res.status(404).send({msg: "Pokemon not found"});
    }
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send({msg: err.response.status});
    } else if (err.request) {
      next(err.request);
    } else {
      next(err);
    }
  }
};
const updatePoke = async (req, res, next) => {
  try {
    const {id} = req.params;
    const newId = Number(id.split(/\D/g)[0]);
    const poke = await Pokemon.findByPk(newId);
    if (poke) {
      const {
        name,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
        img,
        types,
      } = req.body;
      await poke.update({
        name,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
        img,
      });
      let type = await Type.findAll({
        where: {
          name: {
            [Op.or]: types,
          },
        },
      });
      await poke.setTypes(type);
      res.send({msg: "Pokemon updated"});
    } else {
      res.status(404).send({msg: "Pokemon not found"});
    }
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send({msg: err.response.status});
    } else if (err.request) {
      next(err.request);
    } else {
      next(err);
    }
  }
};
module.exports = {
  getPokemons,
  getPokemonId,
  postPokemon,
  getPokemonsDB,
  deletePoke,
  updatePoke,
};
