import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

interface valueInter {
  phone: Number;
  email: string;
  name: string;
  plan: string;
  paymentOption: string;
  services: string[];
}

interface DataState {
  value: valueInter;
}

// Define the initial state using that type
const initialState: DataState = {
  value: {
    phone: undefined,
    email: "",
    name: "",
    plan: "",
    paymentOption: "",
    services: [],
  },
};

export const dataObjectSlice = createSlice({
  name: "dataObject",
  initialState: {
    value: {
      phone: undefined,
      email: "",
      name: "",
      plan: "",
      paymentOption: "",
      services: [],
    },
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
