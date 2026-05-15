import Header from "./Header.js";
import useNowPlaying from "../hooks/useNowPlaying.js";
import PrimaryContainer from "./PrimaryContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRated from "../hooks/useTopRated.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import { useSelector } from "react-redux";
import OpenAiSearch from "./OpenAiSearch.js";

const Home = () => {
  useNowPlaying();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  const showOpenAiSearch = useSelector(
    (store) => store.openai.showOpenAiSearch,
  );

  return (
    <>
      <Header />
      {showOpenAiSearch ? (
        <>
          <OpenAiSearch />
        </>
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}

      {/* {
        Container 1{
          video bg
          details of bg movie
        }

        Container2{
          movies list (horizontal sliders)
          cards format
        }
      } */}
    </>
  );
};

export default Home;
