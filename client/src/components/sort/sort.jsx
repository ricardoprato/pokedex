import {useSelector, useDispatch} from "react-redux";
import styles from "./sort.module.css";
import {useState, useEffect} from "react";
import {sortAndFilter} from "../../redux/actions/index";
const Sort = ({setPokePerPage, setCurrentPage}) => {
  const types = useSelector(state => state.types);
  const [sort, setSort] = useState({
    order: "ascending",
    allPokes: "all",
    allTypes: "all",
    stats: "id",
  });
  const dispatch = useDispatch();
  const handleChange = e => {
    setSort(prev => ({...prev, [e.target.name]: e.target.value}));
    setCurrentPage(1);
  };
  const handlePokePerPage = e => {
    setPokePerPage(e.target.value);
    setCurrentPage(1);
  };
  useEffect(() => {
    dispatch(sortAndFilter(sort));
  }, [dispatch, sort]);
  return (
    <>
      <form className={styles.container}>
        <div>
          <select
            name="order"
            id="order-select"
            onChange={handleChange}
            className={styles.mainOption}
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
        <div className={styles.orderContainer}>
          <div>
            <select
              name="allPokes"
              id="allPokes"
              className={styles.option}
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="existent">Existent</option>
              <option value="created">created</option>
            </select>
            <select
              name="allTypes"
              id="allTypes"
              className={styles.option}
              onChange={handleChange}
            >
              <option value="all">all</option>
              {types &&
                types.map(t => {
                  return (
                    <option key={t.id} value={t.name} className={`${t.name}`}>
                      {t.name}
                    </option>
                  );
                })}
            </select>
            <select
              name="stats"
              id="stats"
              className={styles.option}
              onChange={handleChange}
            >
              <option value="id">id</option>
              <option value="name">name</option>
              <option value="hp">hp</option>
              <option value="attack">attack</option>
              <option value="defense">defense</option>
              <option value="speed">speed</option>
              <option value="height">height</option>
              <option value="weight">weight</option>
            </select>
          </div>
          <select
            name="amount"
            id="amount"
            onChange={handlePokePerPage}
            className={styles.option}
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="151">151</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Sort;
