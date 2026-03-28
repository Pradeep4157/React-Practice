import { useState } from "react";
const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const appContextValue = {
    isLoggedIn: isLoggedIn,
    login: handleLogin,
  };
  return (
    <AppProvider.Provider value={appContextValue}>
      {children}
    </AppProvider.Provider>
  );
};
export default AppProvider;
