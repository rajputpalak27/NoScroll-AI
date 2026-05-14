import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice.js";

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRated = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS,
      );
      const jsonData = await data.json();
      dispatch(addTopRatedMovies(jsonData.results));
    };
    getTopRated();
  }, [dispatch]);
};

export default useTopRated;
