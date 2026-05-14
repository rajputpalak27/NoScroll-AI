import React from "react";
import SectionCards from "../components/SectionCards";

const MovieSections = ({ title, moviesList }) => {
  return (
    <div className="px-6">
      <h2 className="text-3xl font-semibold py-2 text-white">{title}</h2>

      <div className="flex overflow-x-auto overflow-y-hidden no-scrollbar">
        {moviesList?.map((movie) => (
          <SectionCards key={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieSections;
