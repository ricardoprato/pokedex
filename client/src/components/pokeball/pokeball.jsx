import styles from "./pokeball.module.css";
const Pokeball = ({setState}) => {
  const handleClick = () => {
    setState(true);
  };
  return (
    <div className={styles.pokeball}>
      <button className={styles.detail} onClick={handleClick}></button>
    </div>
  );
};

export default Pokeball;
