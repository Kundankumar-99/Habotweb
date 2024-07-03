import React from "react";
import footerlogo from "../assets/whitelogo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import Linkedin from "../assets/Linkedin.png";
import Twitter from "../assets/Twitter.png";

export default function Footer() {
  return (
    <footer className=" flex bg-[#123557] py-16 wrap">
      <div className="container w-5/6 mx-auto flex md:flex-row flex-col justify-between gap-16 items-center border-t-2 border-b-2 border-white py-8 px-2">
        <div className="flex md:flex-row flex-col gap-12 items-center">
          <div className=" text-white flex flex-col gap-4">
            <img src={footerlogo} alt="Logo" />
            <p>© R Singhania </p>
          </div>
          <div className="flex  gap-16 text-white">
            <ul>
              <li className="font-bold">Company</li>
              <li>About</li>
              <li>FAQ</li>
            </ul>
            <ul>
              <li className="font-bold">Terms</li>
              <li>Data privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
            <ul>
              <li className="font-bold">Related</li>
              <li>Find Buyer</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
        <div className="icon flex gap-4">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
    </footer>
  );
}
