import { useState, useEffect } from "react";

function WeatherMoodWidget({ weather }) {
  const [emoji, setEmoji] = useState("☀️");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const weatherEmojis = {
      Sunny: "☀️",
      Rainy: "🌧️",
      Cloudy: "☁️",
    };

    setEmoji(weatherEmojis[weather] || "☀️");
  }, [weather]);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h2>{weather}</h2>
      <button type="button" onClick={handleClick}>
        {count} Clicks {emoji}
      </button>
    </div>
  );
}

export default WeatherMoodWidget;