import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const location = useLocation();
  const isProtectedRoute = location.pathname === "/home";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        user?.displayName && navigate("/home");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute top-0 left-0 z-10 flex w-screen items-center justify-between px-8 py-4 bg-gradient-to-b from-black ">
      <img className="w-40" src={HEADER_LOGO} alt="logo" />

      {user && isProtectedRoute && <UserProfile />}
    </div>
  );
};

export default Header;
