import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (displayId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getDisplayVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          displayId +
          "/videos?language=en-US",
        API_OPTIONS,
      );
      const jsonData = await data.json();

      const finalTrailer = jsonData.results.filter(
        (video) =>
          video.type === "Trailer" && video.name === "Official Trailer",
      );

      const trailer =
        finalTrailer.length > 0 ? finalTrailer : [jsonData.results[0]];
      dispatch(addTrailerVideo(trailer[0]));
    };
    getDisplayVideo();
  }, [displayId, dispatch]);
};
export default useTrailerVideo;
