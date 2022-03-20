//import axios from "axios";
const url = "http://localhost:3001";

export const getPokes = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/pokemons`);
      const pokemons = await response.json();
      return dispatch({type: "GET_POKE", payload: pokemons});
    } catch (err) {
      if (err.response) {
        const {response} = err;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      }
      console.log(err);
    }
  };
};
