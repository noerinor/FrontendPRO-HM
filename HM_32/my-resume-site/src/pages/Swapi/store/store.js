import { configureStore } from "@reduxjs/toolkit";
import swapiReducer from "./swapiReducer";

const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
