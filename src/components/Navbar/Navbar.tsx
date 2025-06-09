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
      className={`backdrop-blur-xs fixed top-0 z-50 w-full bg-white bg-clip-padding transition ${
        reachedThreshold ? "bg-opacity-70 shadow-2xl" : "bg-opacity-100"
      }`}
    >
      <div className="align-elements ">
        <div className="flex justify-between items-center h-full py-2">
          <div className="shrink-0 text-black text-2xl font-bold">
            <NavLink to="/">
              <img src={Logo} alt="Meal Master Logo" width={50} />
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-6">
            <Navlinks />
          </div>
          {user ? (
            <button onClick={() => setIsOpen(!isOpen)} className="hidden md:flex">
              <FaRegUserCircle className="text-4xl" />
            </button>
          ) : (
            <div className="hidden md:flex space-x-6">
              <NavLink to="/login">Login</NavLink>
            </div>
          )}

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
            <Navlinks />
            {user ? (
              <>
          <NavLink
            to="/register"
            className="block text-black hover:text-teal-200"
          >
            My account
          </NavLink>
          <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <NavLink
          to="/login"
          className="block text-black hover:text-teal-200"
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
