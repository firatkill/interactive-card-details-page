import { configureStore } from "@reduxjs/toolkit";
import cardInfoSlice from "./cardInfoSlice";
import submitSlice from "./submitSlice";
import cardSlice from "./cardSlice";
const store = configureStore({
  reducer: {
    card: cardSlice.reducer,
    cardInfo: cardInfoSlice.reducer,
    submit: submitSlice.reducer,
  },
});

export default store;
