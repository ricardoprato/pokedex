import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Loading from "../../components/loading/loading";
import Pokeball from "../../components/pokeball/pokeball";
import {getPokesDb, getTypes} from "../../redux/actions/index";
import styles from "./Landingpage.module.css";
const LandingPage = ({setState}) => {
  const types = useSelector(state => state.types);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokesDb());
    dispatch(getTypes());
  }, [dispatch]);

  return (
    <div className={styles.background}>
      <div className={styles["landing-page"]}></div>
      {types.length ? <Pokeball setState={setState} /> : <Loading />}
    </div>
  );
};

export default LandingPage;
