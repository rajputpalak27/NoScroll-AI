import Header from "./Header.js";
import useNowPlaying from "../hooks/useNowPlaying.js";
import PrimaryContainer from "./PrimaryContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Home = () => {
  useNowPlaying();
  return (
    <>
      <Header />
      <PrimaryContainer />
      <SecondaryContainer />

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
