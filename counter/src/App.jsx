import { useState } from "react";
import "./App.css";

export default function App() {
  let [counter, setCounter] = useState(15);
  const addCounter = () => {
    setCounter(Math.min(counter + 1, 30));
  };

  const decreaseCounter = () => {
    setCounter(Math.max(counter - 1, 0));
  };
  return (
    <div>
      <h1>React Counter {counter}</h1>
      <button onClick={addCounter}>Add</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}
