import {useSelector} from "react-redux";
import {
  GEN1,
  GEN2,
  GEN3,
  GEN4,
  GEN5,
  GEN6,
  GEN7,
  GEN8,
} from "../redux/reduders/case";
const UsePokemon = gen => {
  let pokemons = null;
  switch (gen) {
    case GEN1:
      pokemons = useSelector(state => state.pokemonsGEN1);
      break;
    case GEN2:
      pokemons = useSelector(state => state.pokemonsGEN2);
      break;
    case GEN3:
      pokemons = useSelector(state => state.pokemonsGEN3);
      break;
    case GEN4:
      pokemons = useSelector(state => state.pokemonsGEN4);
      break;
    case GEN5:
      pokemons = useSelector(state => state.pokemonsGEN5);
      break;
    case GEN6:
      pokemons = useSelector(state => state.pokemonsGEN6);
      break;
    case GEN7:
      pokemons = useSelector(state => state.pokemonsGEN7);
      break;
    case GEN8:
      pokemons = useSelector(state => state.pokemonsGEN8);
      break;
  }
  return pokemons;
};

export default UsePokemon;
