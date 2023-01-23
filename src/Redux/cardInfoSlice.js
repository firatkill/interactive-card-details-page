import { createSlice } from "@reduxjs/toolkit";

const cardInfoSlice = createSlice({
  name: "cardInfo",
  initialState: {
    cardHolderName: "",
    cardNumber: "",
    cardExpDateMonth: "",
    cardExpDateYear: "",
    cardCvc: "",
  },
  reducers: {
    assignCardHolderName(state, action) {
      state.cardHolderName = action.payload;
    },
    assignCardNumber(state, action) {
      state.cardNumber = action.payload;
    },
    assignCardExpDateMonth(state, action) {
      state.cardExpDateMonth = action.payload;
    },
    assignCardExpDateYear(state, action) {
      state.cardExpDateYear = action.payload;
    },
    assignCardCvc(state, action) {
      state.cardCvc = action.payload;
    },
  },
});

export const cardInfoActions = cardInfoSlice.actions;
export default cardInfoSlice;
