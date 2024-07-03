import React from "react";
import bg from "../assets/Background.png";

export default function Herosection() {
  return (
    <div className="min-h-[76vh] relative">
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full  object-cover z-10"
      />
      <div className="relative flex flex-col justify-center items-center py-32 text-white z-20 container mx-auto w-5/6">
        <p className="text-5xl text-center leading-snug font-bold">
          Are You a Supplier ?
          <br />
          <span className="font-normal text-5xl">
            Explore Matching Opportunities.
          </span>
        </p>
        <div className="flex gap-2 mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search your required service here"
              className="px-10 py-4 rounded-md text-black focus:text-black placeholder-right"
            />
            <svg
              className="absolute top-4 left-2"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_126)">
                <path
                  d="M13.125 5.6875C12.642 5.6875 12.25 5.2955 12.25 4.8125V3.5H8.75V4.8125C8.75 5.2955 8.358 5.6875 7.875 5.6875C7.392 5.6875 7 5.2955 7 4.8125V3.5C7 2.53487 7.78488 1.75 8.75 1.75H12.25C13.2151 1.75 14 2.53487 14 3.5V4.8125C14 5.2955 13.608 5.6875 13.125 5.6875Z"
                  fill="#E7760D"
                />
                <path
                  d="M11.1213 13.4575C10.9637 13.5187 10.7362 13.5625 10.5 13.5625C10.2638 13.5625 10.0362 13.5187 9.82625 13.44L0 10.1675V16.8437C0 18.1737 1.07625 19.25 2.40625 19.25H18.5938C19.9237 19.25 21 18.1737 21 16.8437V10.1675L11.1213 13.4575Z"
                  fill="#E7760D"
                />
                <path
                  d="M21 6.78125V8.785L10.71 12.215C10.64 12.2413 10.57 12.25 10.5 12.25C10.43 12.25 10.36 12.2413 10.29 12.215L0 8.785V6.78125C0 5.45125 1.07625 4.375 2.40625 4.375H18.5938C19.9237 4.375 21 5.45125 21 6.78125Z"
                  fill="#E7760D"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_126">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search relative your desired location here"
              className="px-10 py-4 rounded-md text-black focus:text-black placeholder-right"
            />
            <svg
            className="absolute top-4 left-2"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 0C7.03917 0 3.41406 3.6252 3.41406 8.08594C3.41406 9.59531 3.83193 11.0643 4.627 12.3311L10.9519 22.6817C11.0598 22.8569 11.2215 22.9648 11.4102 22.9917C11.6662 23.0321 11.9493 22.9244 12.0975 22.6683L18.4405 12.2232C19.1951 10.9834 19.5859 9.54145 19.5859 8.08594C19.5859 3.6252 15.9608 0 11.5 0ZM11.5 12.1289C9.23603 12.1289 7.45703 10.2961 7.45703 8.08594C7.45703 5.86226 9.27632 4.04297 11.5 4.04297C13.7237 4.04297 15.543 5.86226 15.543 8.08594C15.543 10.2826 13.791 12.1289 11.5 12.1289Z"
                fill="#E7760D"
              />
              <path
                d="M11 0V4.04297C13.2237 4.04297 15.043 5.86226 15.043 8.08594C15.043 10.2826 13.291 12.1289 11 12.1289V22.9996C11.23 23.0049 11.4664 22.8947 11.5975 22.6683L17.9404 12.2232C18.6951 10.9834 19.0859 9.54145 19.0859 8.08594C19.0859 3.62519 15.4608 0 11 0Z"
                fill="#E7770D"
              />
            </svg>
          </div>
          <button className="px-8 py-4 border-2 border-[#00732F] bg-[#00732F] text-white rounded-md font-bold text-sm">
            Search
          </button>
        </div>
        <p className="mt-4 text-lg">
          <span className="font-bold">Are you a buyer? </span>
          <a href="#" className="underline">
            Click here if you are looking to post a requirement
          </a>
        </p>
      </div>
    </div>
  );
}
