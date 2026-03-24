import "./App.css";
import { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import Counter from "../src/Counter";
function CounterButton({ event, solve, input }) {
  console.log("BUTTON IS RENDERED");
  return <button onClick={(event) => solve(event, input)}>Submit</button>;
}
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
        <CounterButton
          solve={solve}
          input={input}
          onClick={(event) => solve(event, input)}
        ></CounterButton>
      </form>
    </div>
  );
}
function calc(count) {
  count *= 100;
}
function App() {
  console.log("APP IS RENDERED");
  const [counter, handleCounter] = useState(0);
  const [count, handle_random_count] = useState(null);
  const calculate_random = useMemo(() => {
    calc(count);
  }, [count]);

  const solve = useCallback((event, input) => {
    event.preventDefault();
    handleCounter(input);
  }, []);
  return (
    <div>
      <Counter counter={counter}> </Counter>
      <SetCounter solve={solve}></SetCounter>
    </div>
  );
}

export default App;
