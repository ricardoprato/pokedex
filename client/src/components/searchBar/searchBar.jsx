import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useState} from "react";
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">
        Search for Pokémon by name or using the National Pokédex number.
      </label>
      <input
        id="search"
        type="text"
        list="pokes"
        placeholder="What Pokémon are you looking for?"
        onChange={handleChange}
        value={keyword}
      />
      <input type="submit" value={keyword} />
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
