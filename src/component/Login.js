/*
  CLEAN UP FUNCTIONS : 

  The basic version was checking if email and password is valid at

  every keystroke, but if we use clean up function then we can reduce

  these calls.

  So we set a timeout after which it will check if email and password 

  is valid or not but just below that timeout function(this function starts
  
  executing because timeout is async function so it will allow
  
  execution of below code ) we write a clearTimeout

  to clear the time that it was calculating so it starts from 0 again 

  this way if we type fast enough then we can avoid a lot of these 

  checks.



*/
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

import AppContext from "../store/app-context";
const Login = () => {
  // const { isLoggedIn, login } = useContext(AppContext);
  const [password, onChangePassword] = useState("");
  const [email, onChangeEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsFormValid(password.length > 5 && email.length > 5);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [email, password]);
  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    onChangeEmail(enteredEmail);
  };
  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    onChangePassword(enteredPassword);
  };
  return (
    <div>
      <label>Email: </label>
      <input
        name="email"
        value={email}
        onChange={(e) => handleEmailChange(e)}
      ></input>
      <br></br>
      <label>Password: </label>
      <input
        name="name"
        value={password}
        onChange={(e) => handlePasswordChange(e)}
      ></input>
      <br></br>
      <button className={isFormValid === false ? "disabled" : ""}>
        Submit
      </button>
    </div>
  );
};
export default Login;
