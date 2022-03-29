import {NavLink} from "react-router-dom";
import styles from "./nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.flex}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/pokemonCreate">
          Create a Poke
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
