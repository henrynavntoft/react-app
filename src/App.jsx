import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[currentTime.getDay()];

  return (
    <div className="App">
      <div className="card">
        <h2>{day}</h2>
        <h2>{currentTime.toLocaleTimeString()}</h2>
      </div>
    </div>
  );
}

export default App;
