import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const DisplayVideo = ({ displayId }) => {
  const nowTrailerVideo = useSelector((store) => store.movies?.nowTrailerVideo);
  useTrailerVideo(displayId);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          nowTrailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DisplayVideo;
