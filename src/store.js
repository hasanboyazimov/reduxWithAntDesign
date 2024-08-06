import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import  productSlice  from "./features/ProductSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productSlice,
  },
});
