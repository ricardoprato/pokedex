const url = "http://localhost:3001";
import {
  GET_TYPES,
  GET_POKE,
  GET_SINGLE_POKE,
  SORT_AND_FILTER,
  ADD_POKE_DB,
  GET_POKE_DB,
} from "../reduders/case";
export const getPokesApi = (gen, offset, limit, pokemon) => {
  return async dispatch => {
    try {
      if (!pokemon.length) {
        const response = await fetch(
          `${url}/pokemons?limit=${limit}&offset=${offset}`
        );
        const pokemons = await response.json();
        dispatch({type: GET_POKE, payload: pokemons, gen});
      }
      dispatch({type: GET_POKE, gen});
    } catch (err) {
      if (err.response) {
        const {response} = err;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      }
      console.log(err);
      dispatch({type: GET_POKE, payload: []});
    }
  };
};

export const getSinglePokeById = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/pokemons/${id}`);
      const pokemon = (await response.json()) || [];
      dispatch({type: GET_SINGLE_POKE, payload: pokemon});
    } catch (err) {
      if (err.response) {
        const {response} = err;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      }
      console.log(err);
      dispatch({type: GET_SINGLE_POKE, payload: []});
    }
  };
};
export const getSinglePokeByName = name => {
  return async dispatch => {
    try {
      if (typeof name === "string") {
        const response = await fetch(`${url}/pokemons?name=${name}`);
        const pokemon = (await response.json()) || [];
        dispatch({type: GET_SINGLE_POKE, payload: pokemon});
      }
    } catch (err) {
      console.log(err);
      dispatch({type: GET_SINGLE_POKE, payload: {}});
    }
  };
};
export const getTypes = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/types`);
      const types = await response.json();
      return dispatch({type: GET_TYPES, payload: types});
    } catch (err) {
      console.log(err);
      dispatch({type: GET_TYPES, payload: {}});
    }
  };
};
export const getPokesDb = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/pokemons/dataBase`);
      const pokemons = await response.json();
      dispatch({type: GET_POKE_DB, payload: pokemons});
    } catch (err) {
      console.log(err);
      dispatch({type: GET_POKE_DB, payload: []});
    }
  };
};
export const addPokeDb = id => {
  return async dispatch => {
    try {
      const response = await fetch(`${url}/pokemons/${id}db`);
      const pokemon = await response.json();
      dispatch({type: ADD_POKE_DB, payload: pokemon});
    } catch (err) {
      if (err.response) {
        const {response} = err;
        console.log(response.data);
        console.log(response.status);
        console.log(response.headers);
      }
      console.log(err);
      dispatch({type: ADD_POKE_DB, payload: []});
    }
  };
};

export const sortAndFilter = (sort, gen) => {
  return {type: SORT_AND_FILTER, payload: sort, gen};
};
