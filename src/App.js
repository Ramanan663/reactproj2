//import logo from "./logo.svg";
//import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incriment, decriment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> counter {counter}</h1>
      <button onClick={() => dispatch(incriment())}>+</button>
      <button onClick={() => dispatch(decriment())}>-</button>
      {isLogged ? <h3> valuabel infrmation</h3> : ""}
    </div>
  );
}

export default App;
