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

// Экспортируем автоматически созданные экшены
export const { increment, decrement } = counterSlice.actions;

// Экспортируем редюсер для использования в store
export default counterSlice.reducer;
