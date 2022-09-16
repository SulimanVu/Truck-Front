import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import car from "../features/carSlice";
import request from "../features/requestSlice";
import category from "../features/categorySlice";
import user from "../features/userSlice";

export const store = configureStore({
  reducer: {
    application,
    request,
    car,
    category,
    user,
  },
});
