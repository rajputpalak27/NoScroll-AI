import { createSlice } from "@reduxjs/toolkit";

const appConfiSlice = createSlice({
  name: "appConfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    chnageLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default appConfiSlice.reducer;

export const { chnageLanguage } = appConfiSlice.actions;
