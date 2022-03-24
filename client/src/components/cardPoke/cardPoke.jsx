import styles from "./cardPoke.module.css";
import {NavLink} from "react-router-dom";
const CardPoke = ({
  id,
  name,
  height,
  weight,
  speed,
  attack,
  defense,
  img,
  hp,
  types,
  boolean,
}) => {
  return (
    <>
      <div
        className={`${styles.container} ${boolean && styles.containerWidth}`}
        data-id={id}
      >
        {boolean && (
          <>
            <div className={`${styles.circle} ${styles.height}`}>
              {height / 10}m
            </div>{" "}
            <div className={`${styles.circle} ${styles.weight}`}>
              {weight / 10}kg
            </div>
          </>
        )}

        <h2 className={styles.mainText}>{name}</h2>
        <div className={styles.types}>
          {types.map((t, i) => {
            return (
              <span className={[t]} key={`${t}${i}`}>
                {t}
              </span>
            );
          })}
        </div>
        <NavLink className={styles.img} to={`/detail/${id}`}>
          <img className={styles.img} src={img} alt={name} />
        </NavLink>
      </div>
      {boolean && (
        <div className={styles.stats}>
          <div className={styles.statsText}>
            <p>Hp: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            <p>Speed: {speed}</p>
          </div>
          <div className={styles.progressDiv}>
            <progress className={styles.progress} value={hp} max="200">
              {hp}
            </progress>
            <progress className={styles.progress} value={attack} max="200">
              {attack}
            </progress>
            <progress className={styles.progress} value={defense} max="200">
              {defense}
            </progress>
            <progress className={styles.progress} value={speed} max="200">
              {speed}
            </progress>
          </div>
        </div>
      )}
    </>
  );
};

export default CardPoke;
