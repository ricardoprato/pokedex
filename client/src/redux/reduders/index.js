import sortAndFilter from "./ultis";
import {
  GET_POKE,
  GET_SINGLE_POKE,
  GET_TYPES,
  SORT_AND_FILTER,
  ADD_POKE_DB,
  GET_POKE_DB,
  DELETE_POKE,
  UPDATE_POKE,
  GEN1,
  GEN2,
  GEN3,
  GEN4,
  GEN5,
  GEN6,
  GEN7,
  GEN8,
} from "./case";

const initialState = {
  pokemonsGEN1: [],
  pokemonsGEN2: [],
  pokemonsGEN3: [],
  pokemonsGEN4: [],
  pokemonsGEN5: [],
  pokemonsGEN6: [],
  pokemonsGEN7: [],
  pokemonsGEN8: [],
  pokeCopy: [],
  pokeDetail: null,
  pokemonUpdate: null,
  pokeDb: [],
  types: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKE:
      switch (action.gen) {
        case GEN1:
          if (!state.pokemonsGEN1.length) {
            return {
              ...state,
              pokemonsGEN1: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN1, ...state.pokeDb],
            };
          }
        case GEN2:
          if (!state.pokemonsGEN2.length) {
            return {
              ...state,
              pokemonsGEN2: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN2, ...state.pokeDb],
            };
          }
        case GEN3:
          if (!state.pokemonsGEN3.length) {
            return {
              ...state,
              pokemonsGEN3: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN3, ...state.pokeDb],
            };
          }
        case GEN4:
          if (!state.pokemonsGEN4.length) {
            return {
              ...state,
              pokemonsGEN4: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN4, ...state.pokeDb],
            };
          }
        case GEN5:
          if (!state.pokemonsGEN5.length) {
            return {
              ...state,
              pokemonsGEN5: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN5, ...state.pokeDb],
            };
          }
        case GEN6:
          if (!state.pokemonsGEN6.length) {
            return {
              ...state,
              pokemonsGEN6: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN6, ...state.pokeDb],
            };
          }
        case GEN7:
          if (!state.pokemonsGEN7.length) {
            return {
              ...state,
              pokemonsGEN7: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN7, ...state.pokeDb],
            };
          }
        case GEN8:
          if (!state.pokemonsGEN8.length) {
            return {
              ...state,
              pokemonsGEN8: action.payload,
              pokeCopy: [...action.payload, ...state.pokeDb],
            };
          } else {
            return {
              ...state,
              pokeCopy: [...state.pokemonsGEN8, ...state.pokeDb],
            };
          }
        default:
          return state;
      }
    case GET_POKE_DB:
      return {
        ...state,
        pokeDb: action.payload,
      };
    case GET_SINGLE_POKE:
      return {
        ...state,
        pokeDetail: action.payload,
      };
    case ADD_POKE_DB:
      return {
        ...state,
        pokeDb: [...state.pokeDb, action.payload],
      };
    case DELETE_POKE:
      return {
        ...state,
        pokeDb: state.pokeDb.filter(pokemon => pokemon.id !== action.payload),
      };
    case UPDATE_POKE:
      return {
        ...state,
        pokemonUpdate: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SORT_AND_FILTER:
      switch (action.gen) {
        case GEN1:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN1,
              ...state.pokeDb,
            ]),
          };
        case GEN2:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN2,
              ...state.pokeDb,
            ]),
          };
        case GEN3:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN3,
              ...state.pokeDb,
            ]),
          };
        case GEN4:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN4,
              ...state.pokeDb,
            ]),
          };
        case GEN5:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN5,
              ...state.pokeDb,
            ]),
          };
        case GEN6:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN6,
              ...state.pokeDb,
            ]),
          };
        case GEN7:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN7,
              ...state.pokeDb,
            ]),
          };
        case GEN8:
          return {
            ...state,
            pokeCopy: sortAndFilter({...action.payload}, [
              ...state.pokemonsGEN8,
              ...state.pokeDb,
            ]),
          };
        default:
          return {
            ...state,
          };
      }
    default:
      return {...state};
  }
};

export default rootReducer;
