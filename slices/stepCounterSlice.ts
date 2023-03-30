import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
};

export const stepCounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
  },
  reducers: {
    nextStep: (state) => {
      state.value += 1;
    },
    goBack: (state) => {
      state.value -= 1;
    },
  },
});

export const { nextStep, goBack } = stepCounterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectStepCount = (state: RootState) => state.stepCounter.value;

export default stepCounterSlice.reducer;
