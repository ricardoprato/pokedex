import {useSelector, useDispatch} from "react-redux";
import {useParams, useNavigate} from "react-router";
import {useState} from "react";
import {getPokes} from "../../redux/actions";
import validator from "./validators";
import styles from "./form.module.css";
import axios from "axios";
import Loading from "../../components/loading/loading";
const Form = () => {
  const pokeDb = useSelector(state => state.pokeDb);
  const types = useSelector(state => state.types);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    types: [],
  });
  const [errors, setErrors] = useState({});
  const {id} = useParams();
  const handleChange = e => {
    setErrors(validator({...form, [e.target.name]: e.target.value}, pokeDb));
    setForm(prev => ({...prev, [e.target.name]: e.target.value}));
  };
  const handleType = e => {
    setErrors(validator({...form, types: [...form.types, e.target.value]}));
    if (!form.types.includes(e.target.value) && form.types.length < 2) {
      setForm(prev => ({
        ...prev,
        types: [...prev.types, e.target.value],
      }));
    }
  };
  const handleRemove = e => {
    e.preventDefault();
    setForm(prev => ({
      ...prev,
      types: prev.types.filter(item => item !== e.target.value),
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const poke = {
      name: form.name || " ",
      hp: Number(form.hp) || " ",
      attack: Number(form.attack) || " ",
      defense: Number(form.defense) || " ",
      speed: Number(form.speed) || " ",
      height: Number(form.height) || " ",
      weight: Number(form.weight) || " ",
      img: form.img || " ",
      types: form.types,
    };
    setErrors(validator(poke, pokeDb));
    if (
      Object.keys(errors).length === 0 &&
      form.types.length > 0 &&
      form.name
    ) {
      let msg = null;
      id
        ? axios.put(`http://localhost:3001/pokemons/${id}`, form)
        : (msg = await axios.post("http://localhost:3001/pokemons", form));
      msg && alert(msg.data.msg);

      if (msg.data.msg === "Pokemon added") {
        dispatch(getPokes());
        navigate("/", {replace: true});
      }
    }
  };

  return (
    <>
      {pokeDb ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="name">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Pokémon name"
            className={errors?.name ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.name && <p className={styles.error}>{errors?.name}</p>}
          <label className={styles.label} htmlFor="hp">
            hp
          </label>
          <input
            type="text"
            name="hp"
            id="hp"
            placeholder="Pokémon health"
            className={errors?.hp ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.hp && <p className={styles.error}>{errors?.hp}</p>}
          <label className={styles.label} htmlFor="attack">
            attack
          </label>
          <input
            type="text"
            id="attack"
            name="attack"
            placeholder="Pokémon attack"
            className={errors?.attack ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.attack && <p className={styles.error}>{errors?.attack}</p>}
          <label className={styles.label} htmlFor="defense">
            defense
          </label>
          <input
            type="text"
            name="defense"
            placeholder="Pokémon defense"
            className={errors?.defense ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.defense && <p className={styles.error}>{errors?.defense}</p>}
          <label className={styles.label} htmlFor="speed">
            speed
          </label>
          <input
            type="text"
            name="speed"
            id="speed"
            placeholder="Pokémon speed"
            className={errors?.speed ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.speed && <p className={styles.error}>{errors?.speed}</p>}
          <label className={styles.label} htmlFor="height">
            height
          </label>
          <input
            type="text"
            name="height"
            id="height"
            placeholder="Pokémon height"
            className={errors?.height ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.height && <p className={styles.error}>{errors?.height}</p>}
          <label className={styles.label} htmlFor="weight">
            weight
          </label>
          <input
            type="text"
            name="weight"
            id="weight"
            placeholder="Pokémon weight"
            className={errors?.weight ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.weight && <p className={styles.error}>{errors?.weight}</p>}
          <label className={styles.label} htmlFor="img">
            image
          </label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="Pokémon img"
            className={errors?.img ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.img && <p className={styles.error}>{errors?.img}</p>}
          <label htmlFor="types" className={styles.label}>
            types
          </label>
          <div className={styles.divTypes}>
            {form.types.map(t => (
              <button
                key={t}
                className={`${t} ${styles.button}`}
                value={t}
                onClick={handleRemove}
              >
                {t}
              </button>
            ))}
          </div>
          <select id="types" onChange={handleType} className={styles.select}>
            {types &&
              types.map(type => (
                <option key={type.id} value={type.name} className={type.name}>
                  {type.name}
                </option>
              ))}
          </select>
          {errors?.types && <p className={styles.error}>{errors?.types}</p>}
          {!Object.keys(errors).length && (
            <input
              type="submit"
              value={id ? "Update Pokémon" : "Create Pokémon"}
              className={styles.submit}
            />
          )}
        </form>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Form;
