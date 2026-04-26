/*
    continue from 5:27

*/
import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment() {},
    decrement() {},
  },
});
function Index() {
  return <div></div>;
}
export default Index;
