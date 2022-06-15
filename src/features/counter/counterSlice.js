import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    changeByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

console.log(counterSlice);

export const { increment, decrement, changeByAmount } = counterSlice.actions;
export default counterSlice.reducer;
