import sortAndFilter from "./ultis";
const initialState = {
  pokemonsLoaded: [],
  pokeCopy: [],
  pokeDetail: null,
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKE":
      return {
        ...state,
        pokemonsLoaded: [...action.payload],
        pokeCopy: [...action.payload],
      };
    case "GET_SINGLE_POKE":
      return {
        ...state,
        pokeDetail: action.payload,
      };
    case "GET_TYPES":
      return {
        ...state,
        types: action.payload,
      };
    case "SORT_AND_FILTER":
      return {
        ...state,
        pokeCopy: sortAndFilter({...action.payload}, [...state.pokemonsLoaded]),
      };
    default:
      return {...state};
  }
};

export default rootReducer;
