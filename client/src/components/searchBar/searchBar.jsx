import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useState} from "react";
import styles from "./SearchBar.module.css";
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const pokes = useSelector(state => state.pokemonsLoaded);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/detail/${keyword}`, {replace: true});
    setKeyword("");
  };
  const handleChange = e => {
    setKeyword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label htmlFor="search" className={styles.label}>
        Search for Pokémon by name or using the National Pokédex number.
      </label>
      <div className={styles.div}>
        <input
          id="search"
          type="text"
          list="pokes"
          placeholder="What Pokémon are you looking for?"
          onChange={handleChange}
          value={keyword}
          className={styles.input}
        />
        <button type="submit" value={keyword} className={styles.button}>
          <div className={styles.buttonDetail}></div>
        </button>
      </div>
      <datalist id="pokes">
        {pokes &&
          pokes.map(p => {
            return <option key={p.id} value={p.name}></option>;
          })}
      </datalist>
    </form>
  );
};

export default SearchBar;
