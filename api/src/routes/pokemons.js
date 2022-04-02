const {Router} = require("express");
const {
  getPokemons,
  getPokemonId,
  postPokemon,
  getPokemonsDB,
} = require("../controllers/pokemon");
const pokemonRoute = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
pokemonRoute.get("/", getPokemons);
pokemonRoute.get("/dataBase", getPokemonsDB);
pokemonRoute.get("/:id", getPokemonId);
pokemonRoute.post("/", postPokemon);
module.exports = pokemonRoute;
