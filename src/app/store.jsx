import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice.jsx";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
