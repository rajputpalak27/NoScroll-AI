import React from "react";
import { useSelector } from "react-redux";
import DisplayContent from "./DisplayContent";
import DisplayVideo from "./DisplayVideo";

const PrimaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!nowPlaying) return;

  const currentMovie = nowPlaying[0];
  const { original_title, overview, id } = currentMovie;

  return (
    <>
      <DisplayContent title={original_title} overview={overview} />
      <DisplayVideo displayId={id} />
    </>
  );
};

export default PrimaryContainer;
