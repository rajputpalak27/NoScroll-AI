import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";
import openaiReducer from "./OpenAiSlice.js";
import appconfigReducer from "./appConfigSlice.js";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    openai: openaiReducer,
    appconfig: appconfigReducer,
  },
});

export default appStore;
