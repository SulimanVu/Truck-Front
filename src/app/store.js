import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'
import car from '../features/carSlice'
import request from '../features/requestSlice'

export const store = configureStore({
  reducer: {
    application,
    request,
    car,
  },
});