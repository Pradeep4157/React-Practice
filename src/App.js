/*
  REACT VIRTUAL DOM : 

      it is a concept where react creates a virtual dom whenever we update any state and compares it with actual react dom and only 

      changes the component that need re-rendering. 

      also if we are creating a list dynamically using some array, we should avoid using indexes because if we insert some ele in between and update the list

      it would cause errors. because of wrong indexes.

      CONTEXT API : 



      CLIENT-SERVER ARCH : 

      front -> backend -> db ops


      now i have to imp counter.. 


      we need useReducer for that ?


      or simply useState will do  ?


      we will imp both ways.. 



      cont from 9:08






*/
import { useRef } from "react";
import { useContext, useReducer, useCallback } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AppTodo from "../src/AddTodo.js";
import { counterActions } from "./store/index.js";
// import "./App.css";
// import AppProvider from "../src/store/AppProvider";
// const link = "https://jsonplaceholder.typicode.com/todos/";
function App() {
  const new_state = useSelector((state) => state.counter);
  console.log(new_state);
  //   const [Todos, setTodos] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const handleFetchTodos = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetch(link, { method: "GET" });
  //       if (!response.ok) throw new Error();

  //       const data = await response.json();

  //       if (data.length === 0) {
  //         throw new Error("No Todos found");
  //       }
  //       setLoading(false);
  //       setTodos(data);
  //     } catch (error) {
  //       return error;
  //     }
  //   };
  //   useEffect(() => {
  //     handleFetchTodos();
  //   }, []);

  function reducer(state, action) {
    if (action.type === "increment") {
      return { count: state.count + 1 };
    } else if (action.type === "decrement") {
      return { count: state.count - 1 };
    }
  }
  const inputRef = useRef();
  const Dispatch = useDispatch();
  const handleIncrement = useCallback(() => {
    Dispatch(counterActions.increment());
  }, []);
  const handleDecrement = useCallback(() => {
    Dispatch(counterActions.decrement());
  }, []);
  const handleSet = useCallback(() => {
    Dispatch(counterActions.set(inputRef.current.value));
  });
  const state = useSelector((state) => state.counter);

  return (
    <div>
      <div>{state}</div>
      <button onClick={handleIncrement}>Increment Button</button>
      <br />
      <button onClick={handleDecrement}>Decrement Button</button>
      <br></br>
      <div>
        <input type="number" ref={inputRef}></input>
        <button onClick={handleSet}>Set</button>
      </div>
      {/* <AppTodo />
      <button onClick={handleFetchTodos}>CLICK ME!!</button>
      {loading ? (
        <p>"Loading.."</p>
      ) : (
        <ul>
          {Todos.map((todo) => (
            <li key={todo.title}>{todo.title}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default App;
