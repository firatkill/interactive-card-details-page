import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    isFrontSide: true,
    isRotating: false,
  },
  reducers: {
    turn(state) {
      state.isFrontSide = !state.isFrontSide;
    },
    startRotation(state) {
      state.isRotating = true;
    },
    endRotation(state) {
      state.isRotating = false;
    },
  },
});

export const cardActions = cardSlice.actions;

export default cardSlice;
