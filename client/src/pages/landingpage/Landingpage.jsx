import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Loading from "../../components/loading/loading";
import Pokeball from "../../components/pokeball/pokeball";
import {getPokes, getTypes} from "../../redux/actions/index";
import styles from "./Landingpage.module.css";
const LandingPage = ({setState}) => {
  const pokemons = useSelector(state => state.pokemonsLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokes());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.background}>
      <div className={styles["landing-page"]}></div>
      {pokemons.length ? <Pokeball setState={setState} /> : <Loading />}
    </div>
  );
};

export default LandingPage;
