/*
  REACT VIRTUAL DOM : 

      it is a concept where react creates a virtual dom whenever we update any state and compares it with actual react dom and only 

      changes the component that need re-rendering. 

      also if we are creating a list dynamically using some array, we should avoid using indexes because if we insert some ele in between and update the list

      it would cause errors. because of wrong indexes.

      CONTEXT API : 




*/
import AppContext from "../src/store/app-context";
import { useContext } from "react";
// import "./App.css";
// import { useState } from "react";
// import { useCallback } from "react";
// import { useMemo } from "react";
// import Counter from "../src/Counter";
// function CounterButton({ event, solve, input }) {
//   console.log("BUTTON IS RENDERED");
//   return <button onClick={(event) => solve(event, input)}>Submit</button>;
// }
// function SetCounter({ solve }) {
//   const [input, handleInputChange] = useState("");
//   console.log("Set Counter is rendered");
//   return (

//     <div>
//       <form>
//         <input
//           type="number"
//           name="Enter a number : "
//           value={input}
//           onChange={(event) => handleInputChange(event.target.value)}
//         ></input>
//         <br></br>
//         <CounterButton
//           solve={solve}
//           input={input}
//           onClick={(event) => solve(event, input)}
//         ></CounterButton>
//       </form>
//     </div>
//   );
// }
function calc(count) {
  count *= 100;
}
function App() {
  const message = useContext(AppContext);
  // console.log("APP IS RENDERED");
  // const [counter, handleCounter] = useState(0);
  // const [count, handle_random_count] = useState(null);
  // const calculate_random = useMemo(() => {
  //   calc(count);
  // }, [count]);

  // const solve = useCallback((event, input) => {
  //   event.preventDefault();
  //   handleCounter(input);
  // }, []);

  return (
    <div>{message.message}</div>
    // <div>
    //   <Counter counter={counter}> </Counter>
    //   <SetCounter solve={solve}></SetCounter>
    // </div>
  );
}

export default App;
