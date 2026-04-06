/*
  REACT VIRTUAL DOM : 

      it is a concept where react creates a virtual dom whenever we update any state and compares it with actual react dom and only 

      changes the component that need re-rendering. 

      also if we are creating a list dynamically using some array, we should avoid using indexes because if we insert some ele in between and update the list

      it would cause errors. because of wrong indexes.

      CONTEXT API : 



      CLIENT-SERVER ARCH : 

      front -> backend -> db ops






*/

import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import AppTodo from "../src/AddTodo.js";
import "./App.css";
import AppProvider from "../src/store/AppProvider";
const link = "https://jsonplaceholder.typicode.com/todos/";
function App() {
  const [Todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFetchTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch(link, { method: "GET" });
      if (!response.ok) throw new Error();

      const data = await response.json();

      if (data.length === 0) {
        throw new Error("No Todos found");
      }
      setLoading(false);
      setTodos(data);
    } catch (error) {
      console.log("we reached here !!");
      return error;
    }
  };
  useEffect(() => {
    handleFetchTodos();
  }, []);
  return (
    <div>
      <AppTodo />
      <button onClick={handleFetchTodos}>CLICK ME!!</button>
      {loading ? (
        <p>"Loading.."</p>
      ) : (
        <ul>
          {Todos.map((todo) => (
            <li key={todo.title}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
