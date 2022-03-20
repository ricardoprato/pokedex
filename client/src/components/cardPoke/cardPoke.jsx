const CardPoke = ({
  id,
  name,
  height,
  weight,
  speed,
  attack,
  defense,
  img,
  hp,
  types,
}) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{height}</p>
      <p>{weight}</p>
      <p>{speed}</p>
      <p>{attack}</p>
      <p>{defense}</p>
      <p>{hp}</p>
      <ul>
        {types.map((t, i) => {
          return <li key={`${t}${i}`}>{t}</li>;
        })}
      </ul>
      <img src={img} alt="" />
    </div>
  );
};

export default CardPoke;
