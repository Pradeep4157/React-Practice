import { createContext } from "react";

const AppContext = createContext({
  isLoggedIn: false,
});

export default AppContext;
