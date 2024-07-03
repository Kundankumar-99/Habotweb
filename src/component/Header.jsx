import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./modal";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  

    return (
        <header className="bg-white py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <img src={logo} alt="Logo" className="h-10 sm:h-12" />
            <nav className="hidden md:flex items-center gap-8" id="navbar-hamburger">
              <ul className="flex gap-8 text-[#6D6E71]">
                <li>Find Suppliers</li>
                <li className="flex items-center gap-2">
                  Find Service Tags{" "}
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current text-[#6D6E71] h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      d="M13.0866 5.99996L8.41991 10.6666L3.75324 5.99996"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
              </ul>
              <button className="px-8 py-4 border-2 border-[#00732F] text-[#00732F] rounded-md font-bold text-[15px]">
                Login / Sign Up
              </button>
            </nav>
            {/* Mobile Menu Button for small screens */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-hamburger"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>
    
          {/* Modal for Mobile Menu */}
          <Modal isOpen={isMenuOpen} onClose={toggleMenu}>
          <img src={logo} alt="Logo" className="h-10 sm:h-12 mb-8 -ml-2" />
            <nav className="flex flex-col  gap-8">
              <ul className="flex flex-col gap-4 text-[#6D6E71]">
                <li>Find Suppliers</li>
                <li className="flex items-center gap-2">
                  Find Service Tags{" "}
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current text-[#6D6E71] h-4 w-4 sm:h-5 sm:w-5"
                  >
                    <path
                      d="M13.0866 5.99996L8.41991 10.6666L3.75324 5.99996"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
              </ul>
              <button className="px-8 py-4 border-2 border-[#00732F] w-1/2 text-[#00732F] rounded-md font-bold text-[15px]">
                Login / Sign Up
              </button>
            </nav>
          </Modal>
        </header>
      );
}
