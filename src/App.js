import "./App.css";
import { useState } from "react";
import Counter from "../src/Counter";
function SetCounter({ solve }) {
  const [input, handleInputChange] = useState("");
  console.log("Set Counter is rendered");
  return (
    <div>
      <form>
        <input
          type="number"
          name="Enter a number : "
          value={input}
          onChange={(event) => handleInputChange(event.target.value)}
        ></input>
        <br></br>
        <button onClick={(event) => solve(event, input)}>Submit</button>
      </form>
    </div>
  );
}
function App() {
  console.log("APP IS RENDERED");
  const [counter, handleCounter] = useState(0);

  function solve(event, input) {
    event.preventDefault();
    handleCounter(input);
  }
  return (
    <div>
      <Counter counter={counter}> </Counter>
      <SetCounter solve={solve}></SetCounter>
    </div>
  );
}

export default App;
