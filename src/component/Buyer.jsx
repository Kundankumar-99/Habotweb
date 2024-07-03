import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import Tabs from "./Tabs";

export default function Buyer() {
  return (
    <div className="container flex flex-col sm:flex-row items-start py-28 justify-center w-5/6 mx-auto h-[700px] sm:h-[550px] rounded-md bg-[#072F57]">
      <div className=" w-full sm:w-1/2 flex items-center justify-center  px-4 sm:ml-4 ">
        <YouTubeVideo videoId="QVNpTiFsGvw" />
      </div>

      <div className="right w-full sm:w-1/2 flex  text-white   justify-center ">
        <Tabs />
      </div>
    </div>
  );
}
