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
      return dispatch({type: "GET_POKE", payload: []});
    }
  };
};

export const getSinglePokeById = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/pokemons/${id}`);
      const pokemon = (await response.json()) || [];
      return dispatch({type: "GET_SINGLE_POKE", payload: pokemon});
    } catch (err) {
      if (err.response) {
        const {response} = err;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      }
      console.log(err);
      return dispatch({type: "GET_SINGLE_POKE", payload: []});
    }
  };
};
export const getSinglePokeByName = name => {
  return async dispatch => {
    try {
      if (typeof name === "string") {
        const response = await fetch(`${url}/pokemons?name=${name}`);
        const pokemon = (await response.json()) || [];
        return dispatch({type: "GET_SINGLE_POKE", payload: pokemon});
      }
    } catch (err) {
      console.log(err);
      return dispatch({type: "GET_SINGLE_POKE", payload: {}});
    }
  };
};
export const getTypes = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/types`);
      const types = await response.json();
      return dispatch({type: "GET_TYPES", payload: types});
    } catch (err) {
      console.log(err);
      return dispatch({type: "GET_TYPES", payload: {}});
    }
  };
};
export const sortAndFilter = props => {
  return async dispatch => {
    dispatch({type: "SORT_AND_FILTER", payload: props});
  };
};
