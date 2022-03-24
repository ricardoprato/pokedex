import styles from "./loading.module.css";
const Loading = () => {
  const gif = [
    "https://media.giphy.com/media/D3IozBXyAvMIx5Ck0E/giphy.gif",
    "https://media.giphy.com/media/LPFssSmSyEAYYaSKf7/giphy.gif",
    "https://media.giphy.com/media/L9Bm0ylCuhypt3LZlV/giphy.gif",
    "https://media.giphy.com/media/nSMQtfVmvjPF1Zzo8w/giphy.gif",
    "https://media.giphy.com/media/vOvijvrVYiLtzqcEaC/giphy.gif",
    "https://media.giphy.com/media/nVT4JHQoN9mu5PJfe7/giphy.gif",
    "https://media.giphy.com/media/q4fE0CkhPWbVpoPhN8/giphy.gif",
    "https://media.giphy.com/media/KFN11yb9Oq0qeCzQGd/giphy.gif",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <img
          src={gif[Math.round(Math.random() * gif.length - 1)]}
          alt=""
          className={styles.img}
        />
      </div>
      <p className={styles.text} data-text="Loading...">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
