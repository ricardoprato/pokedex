import {useState} from "react";
import ListOfPoke from "../../components/listOfPoke/listOfPoke";
import styles from "./home.css";
import SearchBar from "../../components/searchBar/searchBar";
import {useSelector} from "react-redux";
import Loading from "../../components/loading/loading";
import Sort from "../../components/sort/sort";
import Pagination from "../../components/pagination/pagination";
const Home = () => {
  const pokemons = useSelector(state => state.pokemonsLoaded);
  const pokeCopy = useSelector(state => state.pokeCopy);
  const [pokePerPage, setPokePerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * pokePerPage;
  const firstIndex = lastIndex - pokePerPage;
  const currentPokemons = pokeCopy.slice(firstIndex, lastIndex);
  return (
    <div>
      <SearchBar />
      <Sort setPokePerPage={setPokePerPage} setCurrentPage={setCurrentPage} />
      {pokemons.length ? (
        <>
          <main className={styles.mainGrid}>
            <ListOfPoke currentPoke={currentPokemons} />
          </main>
          {pokeCopy.length && (
            <div className={styles.pagination}>
              <Pagination
                currentPage={currentPage}
                pokePerPage={pokePerPage}
                totalPoke={pokeCopy.length}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
