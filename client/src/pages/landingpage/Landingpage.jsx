import {NavLink} from "react-router-dom";
import styles from "./Landingpage.module.css";
const LandingPage = () => {
  return (
    <div className={styles["landing-page"]}>
      <div className={styles.buttonBox}>
        <p className={styles.text}>
          Press{" "}
          {
            <NavLink className={styles.link} to="/home">
              start
            </NavLink>
          }
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
