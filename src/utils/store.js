import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sortSlice";

const appStore = configureStore({
  reducer: {
    sort: sortReducer,
  },
});

export default appStore;
