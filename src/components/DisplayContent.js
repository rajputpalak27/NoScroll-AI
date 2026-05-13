import React from "react";
import { Info, Play } from "lucide-react";

const DisplayContent = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-[3.5%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-md text-xl font-semibold hover:bg-white/80 transition">
          <Play fill="black" size={26} strokeWidth={2} />
          Play
        </button>

        <button className="flex items-center gap-2 bg-gray-500/70 hover:bg-gray-500/50 text-white px-8 py-3.5 rounded-md text-xl font-medium transition">
          <Info size={24} strokeWidth={1.5} className="scale-110" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default DisplayContent;
