import React from "react";
import videothumbnail from "../assets/Video_Thumbnail.png";

const YouTubeVideo = () => {
  const handleThumbnailClick = () => {
    window.open("https://www.youtube.com/embed/QVNpTiFsGvw", "_blank");
  };

  return (
    <div
      className="relative w-full max-w-xl h-80 cursor-pointer"
      onClick={handleThumbnailClick}
    >
      <img
        src={videothumbnail}
        alt="Video Thumbnail"
        className="w-full h-full object-cover rounded-md"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <svg
          width="107"
          height="76"
          viewBox="0 0 107 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="19.1374"
            y="17.5234"
            width="53.7231"
            height="40.1194"
            rx="5"
            fill="white"
          />
          <path
            d="M84.2177 0H22.0758C9.88367 0 0 9.88366 0 22.0758V53.1402C0 65.3323 9.88367 75.216 22.0758 75.216H84.2177C96.4099 75.216 106.294 65.3323 106.294 53.1402V22.0758C106.294 9.88366 96.4099 0 84.2177 0ZM69.288 39.1194L40.2222 52.982C39.4477 53.3514 38.5531 52.7867 38.5531 51.9288V23.337C38.5531 22.4669 39.4712 21.9029 40.2473 22.2962L69.3131 37.0253C70.1773 37.4632 70.1623 38.7025 69.288 39.1194Z"
            fill="#F61C0D"
          />
        </svg>
      </div>
    </div>
  );
};

export default YouTubeVideo;
