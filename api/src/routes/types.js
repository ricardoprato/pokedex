const {Router} = require("express");
const {getTypesDb} = require("../controllers/types");

const typesRouter = Router();

typesRouter.get("/", getTypesDb);

module.exports = typesRouter;
