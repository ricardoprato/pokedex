const validator = input => {
  let errors = {};
  if (
    input.length < 1 ||
    input.length === 0 ||
    input === "" ||
    input.trim() === ""
  ) {
    errors.search = "Can not be empty";
  }
  return errors;
};

export default validator;
