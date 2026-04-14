import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);

  const handleLogin = () => {
    setSignIn(!isSignIn);
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://occ.a.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
          alt="bg-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-autogit right-0 left-0 text-white bg-opacity-60">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <button className="p-4 my-6 w-full bg-red-800" type="submit">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={handleLogin}>
          {isSignIn
            ? "New to NoScroll AI? Sign Up Now..."
            : "Already Registred? Sign In here..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
