const {Router} = require("express");
const pokemons = require("./pokemons");
const types = require("./types");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemons);
router.use("/types", types);
module.exports = router;
