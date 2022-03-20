const {saveType, getTypes} = require("./utils");

const getTypesDb = async (req, res, next) => {
  try {
    await saveType();
    const typesDb = await getTypes();
    res.send(typesDb);
  } catch (err) {
    next(err);
  }
};

module.exports = {getTypesDb};
