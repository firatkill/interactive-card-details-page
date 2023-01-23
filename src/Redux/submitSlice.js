import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
  name: "submit",
  initialState: { isSubmitted: false },
  reducers: {
    submitAction(state) {
      state.isSubmitted = true;
    },
  },
});

export default submitSlice;
export const submitActions = submitSlice.actions;
