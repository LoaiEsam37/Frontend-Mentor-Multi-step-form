import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface DataState {
  value: number;
}

// Define the initial state using that type
const initialState: DataState = {
  value: 0,
};

export const dataObjectSlice = createSlice({
  name: "dataObject",
  initialState: {
    value: {},
  },
  reducers: {
    assignObject: (state, action: PayloadAction<object>) => {
      state.value = Object.assign(state.value, action.payload);
    },
  },
});

export const { assignObject } = dataObjectSlice.actions;

export const selectDataObject = (state: RootState) => state.dataObject.value;

export default dataObjectSlice.reducer;
