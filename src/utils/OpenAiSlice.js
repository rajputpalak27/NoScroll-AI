import { createSlice } from "@reduxjs/toolkit";

const OpenAiSlice = createSlice({
  name: "openai",
  initialState: {
    showOpenAiSearch: false,
  },
  reducers: {
    toggleOpenAiSearch: (state) => {
      state.showOpenAiSearch = !state.showOpenAiSearch;
      console.log(state.showOpenAiSearch);
    },
  },
});
export const { toggleOpenAiSearch } = OpenAiSlice.actions;

export default OpenAiSlice.reducer;
