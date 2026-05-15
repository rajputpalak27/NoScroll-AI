import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenAiSearch } from "../utils/OpenAiSlice";

const UserProfile = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const showOpenAiSearch = useSelector(
    (store) => store.openai.showOpenAiSearch,
  );
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/notFound");
      });
    setShowDropdown(false);
  };

  const handleOpenAiSearchToggle = () => {
    dispatch(toggleOpenAiSearch());
    setShowDropdown(false);
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
        <div className="absolute right-0 mt-3 w-40 rounded-md bg-gray-500/70 p-3 shadow-lg space-y-2">
          <button
            onClick={handleOpenAiSearchToggle}
            className="w-full rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            {!showOpenAiSearch ? "NoScroll AI" : "Home"}
          </button>
          <button
            onClick={handleSignOut}
            className="w-full rounded-md bg-red-600 px-4 py-2  text-white hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
