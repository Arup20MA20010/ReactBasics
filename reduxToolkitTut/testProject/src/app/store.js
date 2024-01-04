import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../freatures/counter";
export const store = configureStore({
  reducer: counterReducer,
});
