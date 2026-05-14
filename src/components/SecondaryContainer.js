import React from "react";
import MovieSections from "./MovieSections";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black pl-12">
      <div className="-mt-52 relative z-20">
        {movies.nowPlayingMovies && (
          <MovieSections
            title={"Now Playing"}
            moviesList={movies.nowPlayingMovies}
          />
        )}
      </div>

      {movies.popularMovies && (
        <MovieSections title={"Popular"} moviesList={movies.popularMovies} />
      )}

      {movies.topRatedMovies && (
        <MovieSections title={"Top 10"} moviesList={movies.topRatedMovies} />
      )}

      {movies.upcomingMovies && (
        <MovieSections title={"Upcoming"} moviesList={movies.upcomingMovies} />
      )}
    </div>
  );
};

export default SecondaryContainer;
