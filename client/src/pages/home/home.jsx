import ListOfPoke from "../../components/listOfPoke/listOfPoke";
import styles from "./home.css";
const Home = () => {
  return (
    <main className={styles.mainGrid}>
      <ListOfPoke />
    </main>
  );
};

export default Home;
