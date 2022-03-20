import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPokes} from "../../redux/actions/index";
import CardPoke from "../cardPoke/cardPoke";
import Loading from "../loading/loading";
const ListOfPoke = () => {
  const pokemons = useSelector(state => state.pokemonsLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokes());
  }, [dispatch]);

  return (
    <div>
      {pokemons.length ? (
        pokemons.map(poke => <CardPoke key={poke.id} {...poke} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ListOfPoke;
