const validator = (form, pokeDb) => {
  const errors = {};
  if (form.name) {
    if (form.name.trim() === "") {
      errors.name = "Name cannot be empty";
    } else if (form.name.match(/[^a-zA-Z]/)) {
      errors.name = "Name must be alphabetical";
    } else if (form.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    } else if (form.name.length > 30) {
      errors.name = "name must be less than 30 characters long";
    }
    pokeDb &&
      // eslint-disable-next-line array-callback-return
      pokeDb.map(pokemon => {
        if (pokemon.name.toLowerCase() === form.name.toLowerCase()) {
          errors.name = "Name already exists";
        }
      });
  }
  if (form.hp) {
    if (form.hp === "") {
      errors.hp = "HP cannot be empty";
    } else if (/(\.|\,)/g.test(form.hp)) {
      errors.hp = "HP must be whole number";
    } else if (/\D/g.test(form.hp)) {
      errors.hp = "HP must be numeric";
    } else if (form.hp < 1) {
      errors.hp = "HP must be at least 1";
    } else if (form.hp > 255) {
      errors.hp = "HP must be less than 255";
    }
  }
  if (form.attack) {
    if (form.attack === "") {
      errors.attack = "Attack cannot be empty";
    } else if (/(\.|\,)/g.test(form.attack)) {
      errors.attack = "Attack must be whole number";
    } else if (/\D/g.test(form.attack)) {
      errors.attack = "Attack must be numeric";
    } else if (form.attack < 5) {
      errors.attack = "Attack must be at least 5";
    } else if (form.attack > 255) {
      errors.attack = "Attack must be less than 255";
    }
  }
  if (form.defense) {
    if (form.defense === "") {
      errors.defense = "Defense cannot be empty";
    } else if (/(\.|\,)/g.test(form.defense)) {
      errors.defense = "Defense must be whole number";
    } else if (/\D/g.test(form.defense)) {
      errors.defense = "Defense must be numeric";
    } else if (form.defense < 5) {
      errors.defense = "Defense must be at least 5";
    } else if (form.defense > 255) {
      errors.defense = "Defense must be less than 255";
    }
  }
  if (form.specialAttack) {
    if (form.specialAttack === "") {
      errors.specialAttack = "Special Attack cannot be empty";
    } else if (/(\.|\,)/g.test(form.specialAttack)) {
      errors.specialAttack = "Special Attack must be whole number";
    } else if (/\D/g.test(form.specialAttack)) {
      errors.specialAttack = "Special Attack must be numeric";
    } else if (form.specialAttack < 10) {
      errors.specialAttack = "Special Attack must be at least 10";
    } else if (form.specialAttack > 160) {
      errors.specialAttack = "Special Attack must be less than 160";
    }
  }
  if (form.specialDefense) {
    if (form.specialDefense === "") {
      errors.specialDefense = "Special Defense cannot be empty";
    } else if (/(\.|\,)/g.test(form.speed)) {
      errors.specialDefense = "Special Defense must be whole number";
    } else if (/\D/g.test(form.specialDefense)) {
      errors.specialDefense = "Special Defense must be numeric";
    } else if (form.specialDefense < 20) {
      errors.specialDefense = "Special Defense must be at least 20";
    } else if (form.specialDefense > 240) {
      errors.specialDefense = "Special Defense must be less than 240";
    }
  }
  if (form.speed) {
    if (form.speed === "") {
      errors.speed = "Speed cannot be empty";
    } else if (/(\.|\,)/g.test(form.speed)) {
      errors.speed = "Speed must be whole number";
    } else if (/\D/g.test(form.speed)) {
      errors.speed = "Speed must be numeric";
    } else if (form.speed < 5) {
      errors.speed = "Speed must be at least 5";
    } else if (form.speed > 255) {
      errors.speed = "Speed must be less than 255";
    }
  }
  if (form.height) {
    if (form.height === "") {
      errors.height = "Height cannot be empty";
    } else if (/(\.|\,)/g.test(form.height)) {
      errors.height = "Height must be whole number";
    } else if (/\D/g.test(form.height)) {
      errors.height = "Height must be numeric";
    } else if (form.height < 1) {
      errors.height = "Height must be at least 1cm";
    } else if (form.height > 2500) {
      errors.height = "Height must be less than 2500cm";
    }
  }
  if (form.weight) {
    if (form.weight === "") {
      errors.weight = "Weight cannot be empty";
    } else if (/(\.|\,)/g.test(form.weight)) {
      errors.weight = "Weight must be whole number";
    } else if (/\D/g.test(form.weight)) {
      errors.weight = "Weight must be numeric";
    } else if (form.weight < 1) {
      errors.weight = "Weight must be at least 1g";
    } else if (form.weight > 1000000) {
      errors.weight = "Weight must be less than 1.000.000g";
    }
  }
  if (form.img) {
    if (form.img.trim() === "") {
      errors.img = "Image cannot be empty";
    } else if (
      !/(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])*((\.jpg)|(\.png)|(\.jpeg)|(\.svg))\/?(\.webp)?/.test(
        form.img
      )
    ) {
      errors.img = "Image must be valid URL";
    }
  }
  if (form.types) {
    if (form.types.length === 0) {
      errors.types = "Must select at least one type";
    }
  }
  return errors;
};

export default validator;
