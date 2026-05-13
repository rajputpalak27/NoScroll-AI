import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFields } from "../utils/validate";
import { auth } from "../utils/firebase";
import { signOut, updateProfile } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const handleLogin = () => {
    setSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = validateFields(email.current.value, password.current.value);
    setError(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: null,
          })
            .then(() => {
              signOut(auth);
              setSignIn(true);
            })
            .catch((error) => {
              setError(error.code, "-", error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode, "-", errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode, "-", errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND}
          alt="bg-image"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-60">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <p className="text-red-600">{error}</p>
        <button
          className="p-4 my-6 w-full bg-red-800"
          type="submit"
          onClick={handleSubmit}
        >
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
