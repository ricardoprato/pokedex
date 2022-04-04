import {useSelector, useDispatch} from "react-redux";
import {useParams, useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {addPokeDb, getPokesDb, pokemonUpdate} from "../../redux/actions";
import {URL} from "../../url";
import validator from "./validators";
import Modal from "../../components/modal/modal";
import styles from "./form.module.css";

const Form = () => {
  const pokeDb = useSelector(state => state.pokeDb);
  const pokemonToUpdate = useSelector(state => state.pokemonUpdate);
  const types = useSelector(state => state.types);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [form, setForm] = useState({
    name: "",
    hp: "",
    attack: "",
    defense: "",
    specialDefense: "",
    specialAttack: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    types: [],
  });
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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
      specialDefense: Number(form.specialDefense) || " ",
      specialAttack: Number(form.specialAttack) || " ",
      height: Number(form.height) || " ",
      weight: Number(form.weight) || " ",
      img: form.img || " ",
      types: form.types,
    };
    setErrors(validator(poke, pokeDb));
    if (
      Object.keys(errors).length === 0 &&
      form.types.length > 0 &&
      form.name !== "" &&
      form.hp !== "" &&
      form.attack !== "" &&
      form.defense !== "" &&
      form.speed !== "" &&
      form.specialAttack !== "" &&
      form.specialDefense !== "" &&
      form.height !== "" &&
      form.weight !== "" &&
      form.img !== ""
    ) {
      let msg = null;
      id
        ? (msg = await fetch(`${URL}/pokemons/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(poke),
          }))
        : (msg = await fetch(`${URL}/pokemons`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(poke),
          }));
      const res = await msg.json();
      setKeyword(res.msg);
      if (!isOpen && res) {
        setIsOpen(prev => !prev);
        if (res.msg === "Pokemon added") {
          dispatch(addPokeDb(res.id));
          setForm({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            specialDefense: "",
            specialAttack: "",
            speed: "",
            height: "",
            weight: "",
            img: "",
            types: [],
          });
        } else if (res.msg === "Pokemon updated") {
          dispatch(getPokesDb());
          setForm({
            name: "",
            hp: "",
            attack: "",
            defense: "",
            specialDefense: "",
            specialAttack: "",
            speed: "",
            height: "",
            weight: "",
            img: "",
            types: [],
          });
        }
      }
    }
  };

  useEffect(() => {
    if (pokemonToUpdate) {
      setForm({
        name: pokemonToUpdate.name,
        hp: pokemonToUpdate.hp,
        attack: pokemonToUpdate.attack,
        defense: pokemonToUpdate.defense,
        speed: pokemonToUpdate.speed,
        specialAttack: pokemonToUpdate.specialAttack,
        specialDefense: pokemonToUpdate.specialDefense,
        height: pokemonToUpdate.height,
        weight: pokemonToUpdate.weight,
        img: pokemonToUpdate.img,
        types: pokemonToUpdate.types,
      });
    }
    return () => dispatch(pokemonUpdate(null));
  }, [pokemonToUpdate, id]);
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="name">
          name
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Pokémon name"
            className={errors?.name ? styles.errorInput : styles.input}
            value={form.name}
            onChange={handleChange}
          />
          {errors?.name && <p className={styles.error}>{errors?.name}</p>}
        </label>
        <label className={styles.label} htmlFor="hp">
          hp
          <input
            type="text"
            name="hp"
            id="hp"
            placeholder="Pokémon health"
            value={form.hp}
            className={errors?.hp ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.hp && <p className={styles.error}>{errors?.hp}</p>}
        </label>
        <label className={styles.label} htmlFor="attack">
          attack
          <input
            type="text"
            id="attack"
            name="attack"
            placeholder="Pokémon attack"
            value={form.attack}
            className={errors?.attack ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.attack && <p className={styles.error}>{errors?.attack}</p>}
        </label>
        <label className={styles.label} htmlFor="defense">
          defense
          <input
            type="text"
            name="defense"
            placeholder="Pokémon defense"
            value={form.defense}
            className={errors?.defense ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.defense && <p className={styles.error}>{errors?.defense}</p>}
        </label>
        <label className={styles.label} htmlFor="specialDefense">
          Special Defense
          <input
            type="text"
            name="specialDefense"
            id="specialDefense"
            placeholder="Pokémon Special Defense"
            value={form.specialDefense}
            className={
              errors?.specialDefense ? styles.errorInput : styles.input
            }
            onChange={handleChange}
          />
          {errors?.specialDefense && (
            <p className={styles.error}>{errors?.specialDefense}</p>
          )}
        </label>
        <label className={styles.label} htmlFor="specialAttack">
          Special Attack
          <input
            type="text"
            name="specialAttack"
            id="specialAttack"
            placeholder="Pokémon Special Attack"
            value={form.specialAttack}
            className={errors?.specialAttack ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.specialAttack && (
            <p className={styles.error}>{errors?.specialAttack}</p>
          )}
        </label>
        <label className={styles.label} htmlFor="speed">
          speed
          <input
            type="text"
            name="speed"
            id="speed"
            placeholder="Pokémon speed"
            value={form.speed}
            className={errors?.speed ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.speed && <p className={styles.error}>{errors?.speed}</p>}
        </label>
        <label className={styles.label} htmlFor="height">
          height
          <input
            type="text"
            name="height"
            id="height"
            placeholder="Pokémon height"
            value={form.height}
            className={errors?.height ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.height && <p className={styles.error}>{errors?.height}</p>}
        </label>
        <label className={styles.label} htmlFor="weight">
          weight
          <input
            type="text"
            name="weight"
            id="weight"
            placeholder="Pokémon weight"
            value={form.weight}
            className={errors?.weight ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.weight && <p className={styles.error}>{errors?.weight}</p>}
        </label>
        <label className={styles.label} htmlFor="img">
          image
          <input
            type="text"
            name="img"
            id="img"
            placeholder="Pokémon img"
            value={form.img}
            className={errors?.img ? styles.errorInput : styles.input}
            onChange={handleChange}
          />
          {errors?.img && <p className={styles.error}>{errors?.img}</p>}
        </label>
        <label htmlFor="types" className={`${styles.label} ${styles.types}`}>
          types
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
          <select
            id="types"
            onChange={handleType}
            className={styles.select}
            value={form.types}
            multiple={true}
            size={3}
          >
            {types &&
              types.map(type => (
                <option
                  key={type.id}
                  value={type.name}
                  className={styles[type.name]}
                >
                  {type.name}
                </option>
              ))}
          </select>
          {errors?.types && <p className={styles.error}>{errors?.types}</p>}
        </label>
        {!Object.keys(errors).length && (
          <input
            type="submit"
            value={id ? "Update Pokémon" : "Create Pokémon"}
            className={styles.submit}
            onClick={handleSubmit}
          />
        )}
      </form>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {keyword.length ? (
          <>
            <h2>{keyword}</h2>
            {keyword === "Pokemon added" || keyword === "Pokemon updated" ? (
              <button
                onClick={() => navigate("/", {replace: true})}
                className={styles.update}
              >
                Go to Home
              </button>
            ) : (
              <button onClick={() => setIsOpen(prev => !prev)}>Ok</button>
            )}
          </>
        ) : (
          <h2>Invalid Data</h2>
        )}
      </Modal>
    </>
  );
};

export default Form;
