/*
    continue from 5:27

*/
import { createSlice, configureStore } from "@reduxjs/toolkit";
const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    set(state, action) {
      state.counter = action.payload;
    },
  },
});
export const counterActions = counterSlice.actions;
const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
