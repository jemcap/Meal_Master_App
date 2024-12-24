import React, { useState, useEffect } from "react";
import { Logo } from "../../utils/images";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reachedThreshold, setReachedThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 50;
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
      className={`blur-backdrop-filter fixed top-0 z-20 w-full bg-white bg-clip-padding transition ${
        reachedThreshold ? "bg-opacity-80 shadow-xl" : "bg-opacity-100"
      }`}
    >
      <div className="align-elements ">
        <div className="flex justify-between items-center h-full py-2">
          <div className="flex-shrink-0 text-black text-2xl font-bold">
            <img src={Logo} alt="Meal Master Logo" width={50} />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-black hover:text-teal-200">
              Our menu
            </a>
            <a href="#about" className="text-black hover:text-teal-200">
              About
            </a>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-black hover:text-teal-200">
              My account
            </a>
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
            <a href="#home" className="block text-black hover:text-teal-200">
              Our menu
            </a>
            <a href="#about" className="block text-black hover:text-teal-200">
              About
            </a>
            <a
              href="#services"
              className="block text-black hover:text-teal-200"
            >
              My account
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
