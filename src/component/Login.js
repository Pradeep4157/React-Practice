import { useContext } from "react";
import AppContext from "../store/app-context";
const Login = () => {
  const { isLoggedIn, login } = useContext(AppContext);

  return (
    <div>{isLoggedIn ? "Welcome" : <button onClick={login}>Login</button>}</div>
  );
};
export default Login;
