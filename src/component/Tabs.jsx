import React, { useState } from "react";
import Iconlist from "./iconlist";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // State to track active tab

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 ">
      <div className="flex gap-28">
        {/* Buyer Button*/}

        <button
          className={`py-2 px-4 font-bold text-[26px]  focus:outline-none ${activeTab === "tab1"
              ? " border-b-2 border-b-[#EB7150] text-[#EB7150]"
              : ""
            }`}
          onClick={() => handleTabClick("tab1")}
        >
          Buyer
        </button>

        {/* Supplier Button */}

        <button
          className={`py-2 px-4 font-bold text-[26px]   focus:outline-none ${activeTab === "tab2"
              ? "text-[#EB7150] border-b-2 border-b-[#EB7150]"
              : ""
            }`}
          onClick={() => handleTabClick("tab2")}
        >
          Supplier
        </button>
      </div>

      {/* Tab content based on activeTab state */}
      <div className="mt-4 flex flex-col">
        {activeTab === "tab1" && (
          <div className="p-4 ">
            <div className="flex flex-col gap-4">
              {" "}
              <Iconlist text="Post your requirement" />
              <Iconlist text="Sit back for multiple suppliers to contact you." />
              <Iconlist text="Choose among the suppliers based on the ratings and reviews." />{" "}
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="p-4 ">
            <div className="flex flex-col gap-4 ">
              {" "}
              <Iconlist text="Post your requirements2" />
              <Iconlist text="Sit back for multiple suppliers to contact you.2" />
              <Iconlist text="Choose among the suppliers based on the ratings and reviews.2" />{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
