const initialState = {
  pokemonsLoaded: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKE":
      return {
        ...state,
        pokemonsLoaded: action.payload,
      };
    default:
      return {...state};
  }
};

export default rootReducer;
