import ListOfPoke from "../../components/listOfPoke/listOfPoke";
import styles from "./home.css";
import SearchBar from "../../components/searchBar/searchBar";
import {useSelector} from "react-redux";
import Loading from "../../components/loading/loading";
import Sort from "../../components/sort/sort";
const Home = () => {
  const pokemons = useSelector(state => state.pokeCopy);
  return (
    <div>
      <SearchBar />
      <Sort />
      {pokemons.length ? (
        <>
          <main className={styles.mainGrid}>
            <ListOfPoke />
          </main>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
