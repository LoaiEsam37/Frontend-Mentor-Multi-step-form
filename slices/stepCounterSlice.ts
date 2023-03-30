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
  name: "stepCounter",
  initialState: {
    value: 1,
  },
  reducers: {
    nextStep: (state) => {
      if (state.value < 4) state.value += 1;
    },
    goBack: (state) => {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const { nextStep, goBack } = stepCounterSlice.actions;

export const selectStepCount = (state: RootState) => state.stepCounter.value;

export default stepCounterSlice.reducer;
