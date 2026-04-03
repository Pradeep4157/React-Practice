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
import Login from "../src/component/Login";
import Logout from "../src/component/Logout";
import "./App.css";
import AppProvider from "../src/store/AppProvider";

function App() {
  return (
    <AppProvider>
      <div>
        <Login></Login>
      </div>
    </AppProvider>
  );
}

export default App;
