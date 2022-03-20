const Loading = () => {
  const gif = [
    "https://media.giphy.com/media/kuWN0iF9BLQKk/giphy.gif",
    "https://media.giphy.com/media/fYkYhw2ANU1I4/giphy.gif",
    "https://media.giphy.com/media/z8OcWLLk4SrpS/giphy.gif",
    "https://media.giphy.com/media/27wc7vMWPvvJC/giphy.gif",
    "https://media.giphy.com/media/IQebREsGFRXmo/giphy.gif",
  ];
  return (
    <div>
      <img src={gif[Math.round(Math.random() * gif.length - 1)]} alt="" />
      <p>Loading</p>
    </div>
  );
};

export default Loading;
