// import pokeball from "../../img/pokeball.png";
import styles from "./notFound.module.css";
const NotFound = ({msg}) => {
  return (
    <div className={styles.divFlex}>
      <div className={styles.flex}>
        <p className={styles.text}>sorry</p>
        <div className={styles.status}>
          <p className={styles.code}>404</p>
        </div>
        <p className={styles.msg}>{msg}</p>
      </div>
    </div>
  );
};
export default NotFound;
