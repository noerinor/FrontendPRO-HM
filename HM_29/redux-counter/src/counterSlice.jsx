import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

<<<<<<< HEAD
export const { increment, decrement } = counterSlice.actions;

=======

export const { increment, decrement } = counterSlice.actions;


>>>>>>> 7046a0ce5e4ee76b1ae70e5476d2bf2f988b8ebf
export default counterSlice.reducer;
