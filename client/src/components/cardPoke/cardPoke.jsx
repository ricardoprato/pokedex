import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import Modal from "../modal/modal";
import styles from "./cardPoke.module.css";
import {deletePoke, pokemonUpdate} from "../../redux/actions/index";
import {useState} from "react";
const CardPoke = props => {
  const {
    id,
    name,
    height,
    weight,
    speed,
    attack,
    defense,
    specialAttack,
    specialDefense,
    img,
    hp,
    types,
    boolean,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = e => {
    if (e.target.name === "delete") {
      dispatch(deletePoke(id));
      navigate("/", {replace: true});
    }
    if (e.target.name === "update") {
      dispatch(pokemonUpdate(props));
      navigate(`/pokemonUpdate/${id}`, {replace: true});
    }
  };
  const handleButtonClick = e => {
    if (e.target.name === "delete") {
      setIsOpen(prev => !prev);
    }
    if (e.target.name === "update") {
      setIsOpenEdit(prev => !prev);
    }
  };
  return (
    <>
      <div className={boolean && styles.containerGrid}>
        <div
          className={`${styles.container} ${
            styles[types[Math.floor(Math.random() * types.length)]]
          } ${boolean && styles.containerCard}`}
        >
          {!boolean ? (
            <NavLink className={styles.img} to={`/detail/${id}`}>
              <img className={styles.img} src={img} alt={name} />
            </NavLink>
          ) : (
            <img className={styles.img} src={img} alt={name} />
          )}
          <h2 className={styles.mainText}>{name}</h2>
          <p className={styles.id}>ID: {id}</p>
          <div className={styles.types}>
            {types.map((t, i) => {
              return (
                <span className={[t]} key={`${t}${i}`}>
                  {t}
                </span>
              );
            })}
          </div>
        </div>
        {boolean && (
          <div className={styles.stats}>
            <div className={styles.divText}>
              <div>
                <p className={styles.text}>Height</p>
                <div className={`${styles.circle} ${styles.height}`}>
                  <p>{height / 10}m</p>
                </div>
              </div>
              <div>
                <p className={styles.text}>Weight</p>
                <div className={`${styles.circle} ${styles.weight}`}>
                  <p>{weight / 10}kg</p>
                </div>
              </div>
            </div>
            <div className={styles.statsText}>
              <div className={styles.statsCircle}>
                <p className={`${styles.textCircle} ${styles.hp}`}>HP</p>
                <span>{hp}</span>
              </div>
              <div className={styles.statsCircle}>
                <p className={`${styles.textCircle} ${styles.attack}`}>ATK</p>
                <span>{attack}</span>
              </div>
              <div className={styles.statsCircle}>
                <p className={`${styles.textCircle} ${styles.defense}`}>DEF</p>
                <span>{defense}</span>
              </div>
              <div className={styles.statsCircle}>
                <p className={`${styles.textCircle} ${styles.specialAttack}`}>
                  spA
                </p>
                <span>{specialAttack}</span>
              </div>
              <div className={styles.statsCircle}>
                <p className={`${styles.textCircle} ${styles.specialDefense}`}>
                  spD
                </p>
                <span>{specialDefense}</span>
              </div>
              <div className={styles.statsCircle}>
                <p className={`${styles.textCircle} ${styles.speed}`}>SPD</p>
                <span>{speed}</span>
              </div>
              <div className={styles.statsCircleTotal}>
                <p className={`${styles.textCircle} ${styles.total}`}>TOT</p>
                <span>
                  {hp +
                    attack +
                    defense +
                    specialAttack +
                    specialDefense +
                    speed}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      {typeof id === "string" && boolean && (
        <div className={styles.divButtons}>
          <button
            className={styles.delete}
            name="delete"
            onClick={handleButtonClick}
          >
            Delete
          </button>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h2>Are you sure you want to delete this pokemon?</h2>
            <button
              className={styles.delete}
              name="delete"
              onClick={handleClick}
            >
              Delete
            </button>
          </Modal>
          <button
            className={styles.update}
            name="update"
            onClick={handleButtonClick}
          >
            Update
          </button>
          <Modal setIsOpen={setIsOpenEdit} isOpen={isOpenEdit}>
            <h2>Are you sure you want to update this pokemon?</h2>{" "}
            <button
              className={styles.update}
              name="update"
              onClick={handleClick}
            >
              Update
            </button>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CardPoke;
