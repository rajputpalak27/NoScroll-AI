import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "nowMovies",
  initialState: {
    nowPlayingMovies: null,
    nowTrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.nowTrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
