import React from "react";
import Button from "./button";

export default function Ready_To_Dive() {
  return (
    <div>
      <div className="container flex flex-col md:flex-row gap-16 md:gap-32 mx-auto w-5/6 py-20">
        <div className=" w-full flex flex-col md:w-1/2  gap-8">
          <h1 className="text-[35px] text-black font-bold ">
            Ready to dive into <span className="text-[#271555]">HABOT?</span>
          </h1>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="px-8 py-2 border-2 w-1/2 border-[#00732F] bg-[#00732F] text-white rounded-md font-bold text-[15px] flex items-center justify-center">
            <span>Sign up Today!</span>
            {/* Signup Button Icon SVG */}
            <svg
              width="32"
              height="17"
              viewBox="0 0 32 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-6"
            >
              <path
                d="M31.7885 7.52684L24.5159 0.254223C24.2547 -0.050834 23.7956 -0.0863957 23.4905 0.174912C23.1855 0.436157 23.1499 0.895274 23.4112 1.20033C23.4356 1.22877 23.4621 1.25533 23.4905 1.27964L29.5195 7.31591H0.727237C0.325619 7.31591 0 7.64153 0 8.04321C0 8.44489 0.325619 8.77045 0.727237 8.77045H29.5195L23.4905 14.7994C23.1855 15.0606 23.1499 15.5198 23.4112 15.8248C23.6725 16.1299 24.1316 16.1654 24.4366 15.9041C24.4651 15.8798 24.4916 15.8533 24.5159 15.8248L31.7886 8.5522C32.0705 8.26864 32.0705 7.81052 31.7885 7.52684Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="md:w-1/2  grid grid-cols-2 gap-4 ">
          <Button Text={"Abu Dhabi"} />
          <Button Text={"Dubai"} />
          <Button Text={"Sharjah & Ajman"} />
          <Button Text={"Fujairah"} />
          <Button Text={"Ras Al Khaimah"} />
          <Button Text={"Umm Al Quwain"} />
        </div>
      </div>
    </div>
  );
}
