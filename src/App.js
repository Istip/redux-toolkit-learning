import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  changeByAmount
} from "./features/counter/counterSlice";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <h2>For learning purposes</h2>
      <hr />

      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>
        <h2>+</h2>
      </button>
      <button onClick={() => dispatch(decrement())}>
        <h2>-</h2>
      </button>

      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(changeByAmount(Number(number)))}>
        Increment by <b>{number}</b>
      </button>
    </div>
  );
}
