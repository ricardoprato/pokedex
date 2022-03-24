import {useSelector} from "react-redux";

import styles from "./listOfPoke.module.css";
import CardPoke from "../cardPoke/cardPoke";
const ListOfPoke = () => {
  const pokemons = useSelector(state => state.pokeCopy);
  return (
    <div className={styles.container}>
      {pokemons.map(poke => (
        <CardPoke key={poke.id} {...poke} />
      ))}
    </div>
  );
};

export default ListOfPoke;
