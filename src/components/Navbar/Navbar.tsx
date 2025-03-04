import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";

import { Logo } from "../../utils/images";

const Navbar: React.FC = () => {
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

  return (
    <nav
      className={`backdrop-blur-sm fixed top-0 z-50 w-full bg-white bg-clip-padding transition ${
        reachedThreshold ? "bg-opacity-70 shadow-2xl" : "bg-opacity-100"
      }`}
    >
      <div className="align-elements ">
        <div className="flex justify-between items-center h-full py-2">
          <div className="flex-shrink-0 text-black text-2xl font-bold">
            <NavLink to="/">
              <img src={Logo} alt="Meal Master Logo" width={50} />
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-6">
            <Navlinks />
          </div>

          <div className="hidden md:flex space-x-6">
            <NavLink to="/register">My account</NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
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
        <div className="md:hidden">
          <div className="space-y-2 px-2 pt-2 pb-3">
            <Navlinks />
            <NavLink
              to="/register"
              className="block text-black hover:text-teal-200"
            >
              My account
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
