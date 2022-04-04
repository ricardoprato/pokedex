import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {
  clearData,
  getSinglePokeById,
  getSinglePokeByName,
} from "../../redux/actions/index";
import Loading from "../../components/loading/loading";
import CardPoke from "../../components/cardPoke/cardPoke";
import NotFound from "../../components/notfound/notfound";
const Detail = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokeDetail);
  const {id} = useParams();
  useEffect(() => {
    const idCopy = parseInt(id);
    if (isNaN(idCopy)) {
      if (id.slice(-2).toUpperCase() === "DB") {
        // const dbId = id.split(/\D/g)[0];
        dispatch(getSinglePokeById(id));
      } else {
        dispatch(getSinglePokeByName(id));
      }
    } else {
      dispatch(getSinglePokeById(id));
    }
    return () => dispatch(clearData(null));
  }, [dispatch, id]);
  return (
    <>
      {pokemon ? (
        pokemon?.id ? (
          <CardPoke {...pokemon} boolean={true} />
        ) : (
          <NotFound msg="Pokemon not found" />
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Detail;
