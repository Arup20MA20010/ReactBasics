import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.value += parseInt(action.payload);
    },
  },
});

export const { addCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
