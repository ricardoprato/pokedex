import {useNavigate} from "react-router";
import {useState} from "react";
import styles from "./SearchBar.module.css";
import validator from "./ultis";
const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validator(keyword));
    if (Object.keys(errors).length === 0 && keyword !== "") {
      navigate(`/detail/${keyword}`, {replace: true});
      setKeyword("");
    }
  };
  const handleChange = e => {
    setErrors(validator(e.target.value));
    setKeyword(e.target.value.toLowerCase());
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
          className={!errors?.search ? styles.input : styles.errors}
        />
        <button type="submit" value={keyword} className={styles.button}>
          <div className={styles.buttonDetail}></div>
        </button>
      </div>
      {errors.search && <span className={styles.error}>{errors.search}</span>}
    </form>
  );
};

export default SearchBar;
