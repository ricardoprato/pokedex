const {saveType, getTypes} = require("./utils");

const getTypesDb = async (req, res, next) => {
  try {
    await saveType();
    const typesDb = await getTypes();
    res.send(typesDb);
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

module.exports = {getTypesDb};
