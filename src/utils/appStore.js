import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    nowMovies: moviesReducer,
  },
});

export default appStore;
