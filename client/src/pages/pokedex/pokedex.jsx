import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getPokesApi} from "../../redux/actions";
import ListOfPoke from "../../components/listOfPoke/listOfPoke";
import SearchBar from "../../components/searchBar/searchBar";
import Loading from "../../components/loading/loading";
import Sort from "../../components/sort/sort";
import Pagination from "../../components/pagination/pagination";
import styles from "./pokedex.module.css";
import UsePokemon from "../../customHook/usePokemon";
import {
  GEN1,
  GEN2,
  GEN3,
  GEN4,
  GEN5,
  GEN6,
  GEN7,
  GEN8,
} from "../../redux/reduders/case";
import NotFound from "../../components/notfound/notfound";
const Pokedex = () => {
  const {gen} = useParams();
  const dispatch = useDispatch();
  const pokeCopy = useSelector(state => state.pokeCopy);
  const [pokePerPage, setPokePerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * pokePerPage;
  const firstIndex = lastIndex - pokePerPage;
  const currentPokemons = pokeCopy.slice(firstIndex, lastIndex);
  const pokemons = UsePokemon(gen);
  useEffect(() => {
    switch (gen) {
      case GEN1:
        dispatch(getPokesApi(gen, 0, 151, pokemons));
        break;
      case GEN2:
        dispatch(getPokesApi(gen, 151, 100, pokemons));
        break;
      case GEN3:
        dispatch(getPokesApi(gen, 251, 135, pokemons));
        break;
      case GEN4:
        dispatch(getPokesApi(gen, 386, 107, pokemons));
        break;
      case GEN5:
        dispatch(getPokesApi(gen, 494, 155, pokemons));
        break;
      case GEN6:
        dispatch(getPokesApi(gen, 649, 72, pokemons));
        break;
      case GEN7:
        dispatch(getPokesApi(gen, 721, 88, pokemons));
        break;
      case GEN8:
        dispatch(getPokesApi(gen, 809, 89, pokemons));
        break;
    }
  }, [gen]);
  return (
    <div>
      <SearchBar />
      <Sort
        setPokePerPage={setPokePerPage}
        setCurrentPage={setCurrentPage}
        gen={gen}
      />
      {pokemons.length ? (
        <>
          <main className={styles.mainGrid}>
            {currentPokemons.length ? (
              <ListOfPoke currentPoke={currentPokemons} />
            ) : (
              <NotFound msg="No matches found" />
            )}
          </main>
          {pokeCopy.length ? (
            <div className={styles.pagination}>
              <Pagination
                currentPage={currentPage}
                pokePerPage={pokePerPage}
                totalPoke={pokeCopy.length}
                setCurrentPage={setCurrentPage}
              />
            </div>
          ) : null}
        </>
      ) : (
        <div className={styles.Loading}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Pokedex;
