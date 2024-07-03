import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white py-4">
      <div className="container w-5/6 mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" />
        <nav className="flex items-center gap-8">
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
              >
                <path
                  d="M13.0866 5.99996L8.41991 10.6666L3.75324 5.99996"
                  stroke="#6D6E71"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </ul>
          <button className="px-8 py-4 border-2 border-[#00732F] text-[#00732F] rounded-md font-bold text-[15px]">
            Login / Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
