import React from "react";
import { BACKGROUND } from "../utils/constants.js";
import { lang } from "../utils/Languages.js";
import { useDispatch, useSelector } from "react-redux";
import { chnageLanguage } from "../utils/appConfigSlice.js";

const OpenAiSearchBar = () => {
  const dispatch = useDispatch();
  const handleLangChange = (e) => {
    dispatch(chnageLanguage(e.target.value));
  };

  const langPreference = useSelector((store) => store.appconfig.lang);
  const selectedLanguage = lang.find(
    (language) => language.identifier === langPreference,
  );

  return (
    <div
      className="relative min-h-[40vh] w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${BACKGROUND})` }}
    >
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 text-center">
          Let me find you a Perfect watch...
        </h1>

        <form className="w-full max-w-6xl bg-black/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-2xl flex flex-col lg:flex-row items-center gap-4">
          <input
            className="w-full lg:flex-1 p-4 rounded-xl bg-zinc-900 text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-red-500 transition-all duration-300"
            type="text"
            placeholder={selectedLanguage?.placeholder}
          />

          <button className="w-full lg:w-auto px-8 py-4 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 whitespace-nowrap">
            {selectedLanguage?.search}
          </button>

          <div className="flex flex-col w-full lg:w-60">
            <select
              className="p-4 rounded-xlbg-zinc-900  bg-zinc-900 text-white border border-gray-700
    outline-none cursor-pointer focus:border-red-500 transition-all duration-300 max-h-52 overflow-y-scroll [scrollbar-width:none]
    [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden "
              onChange={handleLangChange}
            >
              {lang.map((lan) => (
                <option
                  key={lan.identifier}
                  value={lan.identifier}
                  className="bg-zinc-900 text-white"
                >
                  {lan.name}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OpenAiSearchBar;
