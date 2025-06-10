import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";

import { FaRegUserCircle } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { logoutUser } from "../../features/auth/authThunks";

import { Logo } from "../../utils/images";

const Navbar: React.FC = () => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const [reachedThreshold, setReachedThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 10;
      if (window.scrollY > threshold) {
        setReachedThreshold(true);
      } else {
        setReachedThreshold(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <nav
      className={`backdrop-blur-xs border-b-1 border-gray-200 text-sm fixed top-0 z-50 w-full bg-white bg-clip-padding transition ${
        reachedThreshold ? "bg-opacity-70 shadow-2xl" : "bg-opacity-100"
      }`}
    >
      <div className="align-elements ">
        <div className="flex justify-between items-center h-full py-1">
          <div className="flex justify-center items-center space-x-10">
            <NavLink to="/">
              <img src={Logo} alt="Meal Master Logo" width={50} />
            </NavLink>
            <div className="hidden md:flex space-x-7 ">
              <Navlinks />
            </div>
          </div>

          <div className="hidden md:flex">
            {user ? (
              <div className="flex flex-row space-x-2">
                <NavLink
                  to="/pantry"
                  className="text-white text-xs flex justify-center items-center hover:bg-orange-400  bg-orange-500  px-4 rounded-lg transition-all duration-300 hover:shadow-xl "
                >
                  Pantry
                </NavLink>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <FaRegUserCircle className="text-3xl" />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex space-x-6">
                <NavLink to="/login">Login</NavLink>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-16 right-0 md:w-96  bg-white shadow-lg flex justify-end z-50">
          <div className="space-y-2 px-2 pt-2 pb-3 w-full">
            {user ? (
              <>
                <NavLink
                  to="/pantry"
                  className="block text-black hover:text-orange-500"
                >
                  My Pantry
                </NavLink>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="block text-black hover:text-orange-500"
              >
                Login / Register
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
