import {Link} from "react-router-dom";
import SearchBar from "../../components/searchBar/searchBar";
import GEN1 from "../../img/GEN 1.svg";
import GEN2 from "../../img/GEN 2.svg";
import GEN3 from "../../img/GEN 3.svg";
import GEN4 from "../../img/GEN 4.svg";
import GEN5 from "../../img/GEN 5.svg";
import GEN6 from "../../img/GEN 6.svg";
import GEN7 from "../../img/GEN 7.svg";
import GEN8 from "../../img/GEN 8.svg";
import Poke1 from "../../img/GEN 1 - Poke.svg";
import Poke2 from "../../img/GEN 2 - Poke.svg";
import Poke3 from "../../img/GEN 3 - Poke.svg";
import Poke4 from "../../img/GEN 4 - Poke.svg";
import Poke5 from "../../img/GEN 5 - Poke.svg";
import Poke6 from "../../img/GEN 6 - Poke.svg";
import Poke7 from "../../img/GEN 7 - Poke.svg";
import Poke8 from "../../img/GEN 8 - Poke.svg";

import styles from "./home.module.css";
const Home = () => {
  return (
    <>
      <SearchBar />
      <div className={styles.grid}>
        <Link to="/pokedex/GEN1">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img src={Poke1} alt="starter pokemons of the first generation" />
            </div>
            <img src={GEN1} alt="" />
          </div>
        </Link>
        <Link to="pokedex/GEN2">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img
                src={Poke2}
                alt="starter pokemons of the second generation"
              />
            </div>
            <img src={GEN2} alt="" />
          </div>
        </Link>
        <Link to="/pokedex/GEN3">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img src={Poke3} alt="starter pokemons of the third generation" />
            </div>
            <img src={GEN3} alt="" />
          </div>
        </Link>
        <Link to="/pokedex/GEN4">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img
                src={Poke4}
                alt="starter pokemons of the fourth generation"
              />
            </div>
            <img src={GEN4} alt="" />
          </div>
        </Link>
        <Link to="/pokedex/GEN5">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img src={Poke5} alt="starter pokemons of the fifth generation" />
            </div>
            <img src={GEN5} alt="" />
          </div>
        </Link>
        <Link to="/pokedex/GEN6">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img src={Poke6} alt="starter pokemons of the sixth generation" />
            </div>
            <img src={GEN6} alt="" />
          </div>
        </Link>
        <Link to="/pokedex/GEN7">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img
                src={Poke7}
                alt="starter pokemons of the seventh generation"
              />
            </div>
            <img src={GEN7} alt="" />
          </div>
        </Link>
        <Link to="/pokedex/GEN8">
          <div className={styles.divImg}>
            <div className={styles.imgPoke}>
              <img
                src={Poke8}
                alt="starter pokemons of the eighth generation"
              />
            </div>
            <img src={GEN8} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
};
export default Home;
