import styles from "./listOfPoke.module.css";
import CardPoke from "../cardPoke/cardPoke";
const ListOfPoke = ({currentPoke}) => {
  return (
    <div className={styles.container}>
      {currentPoke &&
        currentPoke.map(poke => <CardPoke key={poke.id} {...poke} />)}
    </div>
  );
};

export default ListOfPoke;
