import React from "react";
import YouTubeVideo from "./YouTubeVideo";

export default function Buyer() {
  return (

    <div className="container flex items-start py-28 justify-center w-5/6 mx-auto h-[550px] rounded-md bg-[#072F57]">

      {/* <div className="video w-1/2 flex items-center justify-center">Video</div> */}
      <div className="w-1/2 flex items-center justify-center ml-4 ">
      <YouTubeVideo videoId="QVNpTiFsGvw" />
      </div>
      
      <div className="right w-1/2 flex gap-24  text-white   justify-center ">

        <div>Buyer</div>

        <div>Supplier</div>

      </div>

    </div>
  );
}
