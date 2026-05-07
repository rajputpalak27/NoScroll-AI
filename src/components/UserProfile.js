import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/notFound");
      });
  };

  return (
    <div className="relative">
      <div
        className="flex cursor-pointer items-center gap-2 text-white"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600">
          <FontAwesomeIcon icon={faUser} />
        </div>

        <span className="font-semibold">{user.displayName}</span>

        <FontAwesomeIcon icon={faCaretDown} />
      </div>

      {showDropdown && (
        <div className="absolute right-0 mt-3 w-40 rounded-md bg-black/90 p-3 shadow-lg">
          <button
            onClick={handleSignOut}
            className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
