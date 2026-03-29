import { useContext } from "react";
import AppContext from "../store/app-context";
const Logout = () => {
  const { isLoggedIn, login, logout } = useContext(AppContext);

  return (
    <div>
      {isLoggedIn ? <button onClick={logout}>Logout</button> : "Login Nigga"}
    </div>
  );
};

export default Logout;
