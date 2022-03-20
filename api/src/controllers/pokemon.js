const {getAllInfo, getSinglePoke, postPoke} = require("./utils");

const getPokemons = async (req, res, next) => {
  try {
    const {name} = req.query;
    const response = await getAllInfo();
    if (name) {
      const pokemon = response.find(p => p.name === name);
      return pokemon
        ? res.send(pokemon)
        : res.status(404).send({msg: "poke not found"});
    }
    res.send(response);
  } catch (err) {
    next(err);
  }
};

const getPokemonId = async (req, res, next) => {
  try {
    const {id} = req.params;
    const poke = await getSinglePoke(id);
    poke.id ? res.send(poke) : res.status(404).send({msg: "poke not found"});
  } catch (err) {
    next(err);
  }
};
const postPokemon = async (req, res, next) => {
  try {
    const props = req.body;
    const poke = await postPoke(props);
    poke.dataValues
      ? res.code(201).send({msg: "poke created successfully"})
      : res.status(401).send({msg: "invalid data"});
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getPokemons,
  getPokemonId,
  postPokemon,
};
