import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

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
      if (state.value < 5) state.value += 1;
    },
    goBack: (state) => {
      if (state.value > 1) state.value -= 1;
    },
    goBackByAmount(state, action: PayloadAction<number>) {
      if (state.value - action.payload > 0) {
        state.value -= action.payload;
      }
    },
  },
});

export const { nextStep, goBack } = stepCounterSlice.actions;

export const selectStepCount = (state: RootState) => state.stepCounter.value;

export default stepCounterSlice.reducer;
