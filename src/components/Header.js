import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { useLocation } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const location = useLocation();
  const isProtectedRoute = location.pathname === "/home";

  return (
    <div className="absolute top-0 left-0 z-10 flex w-screen items-center justify-between px-8 py-4 bg-gradient-to-b from-black ">
      <img
        className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && isProtectedRoute && <UserProfile />}
    </div>
  );
};

export default Header;
