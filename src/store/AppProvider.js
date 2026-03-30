import { useState, useReducer } from "react";
import AppContext from "../store/app-context";
function authReducer(state, action) {
  if (action.type === "Login") {
    return {
      isLoggedIn: true,
    };
  } else if (action.type === "Logout") {
    return {
      isLoggedIn: false,
    };
  } else {
    return state;
  }
}
const storedLoginStatus = localStorage.getItem("isLoggedIn");
const initialAuthState = {
  isLoggedIn: storedLoginStatus === "1" ? true : false,
};
const AppProvider = ({ children }) => {
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
    dispatchAuth({
      type: "Login",
    });
  };
  const handleLogout = () => {
    // setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "0");
    dispatchAuth({
      type: "Logout",
    });
  };
  const appContextValue = {
    isLoggedIn: authState.isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };
  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
