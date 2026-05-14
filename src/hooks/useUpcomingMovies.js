import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice.js";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS,
      );
      const jsonData = await data.json();
      dispatch(addUpcomingMovies(jsonData.results));
    };
    getUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
