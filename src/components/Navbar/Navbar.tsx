import React, { useState } from "react";
import { Logo } from "../../utils/images";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-none shadow-sm">
      <div className="align-elements mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full py-2">
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-black hover:text-teal-200">
              Our menu
            </a>
            <a href="#about" className="text-black hover:text-teal-200">
              About
            </a>
          </div>

          <div className="flex-shrink-0 text-black text-2xl font-bold">
            <img src={Logo} alt="Meal Master Logo" width={50} />
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
