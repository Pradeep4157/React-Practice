import { memo } from "react";
const Counter = memo(function Counter({ counter }) {
  console.log("COUNTER IS RENDERED");
  return <div>Counter : {counter}</div>;
});
export default Counter;
  