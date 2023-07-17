import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(new Date().toLocaleString());

  useEffect(() => {
    setInterval(() => {
      const newTime = new Date().toLocaleString();
      setTimer(newTime);
    }, 1000);
  });
  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}
