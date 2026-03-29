import { useState } from "react";
import AppContext from "../store/app-context";
const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const appContextValue = {
    isLoggedIn: isLoggedIn,
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
