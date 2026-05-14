import React from "react";
import { TMDB_IMG_URL } from "../utils/constants";

const SectionCards = ({ poster_path }) => {
  return (
    <div className="min-w-[200px] pr-4">
      <img
        className="rounded-md"
        alt="Movie card"
        src={TMDB_IMG_URL + poster_path}
      />
    </div>
  );
};

export default SectionCards;
