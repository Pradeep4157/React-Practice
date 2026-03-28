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
import { useState } from "react";
import Login from "../src/component/Login";
import AppProvider from "../src/store/AppProvider";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div
      value={{
        isLoggedIn: isLoggedIn,
        changeLogin: setIsLoggedIn,
      }}
    >
      <Login />
    </div>
  );
}

export default App;
