import React from "react";
import IconBox from "./IconBox";
import Signup_icon from "./icon/Signup_icon";
import Post_Icon from "./icon/Post_Icon";
import Review_icon from "./icon/Review_icon";
import Profile_Icon from "./icon/Profile_Icon";
import Share_Icon from "./icon/Share_Icon";
import Connect_Icon from "./icon/Connect_Icon";

export default function How_it_works() {
  return (
    <div className=" flex flex-col gap-4  container w-5/6 mx-auto">
      <div>
        <h2 className="font-bold text-[37px] text-center">How it works?</h2>
        <p className="text-center w-2/3 mx-auto">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 mx-auto py-12 sm:mx-0 sm:grid-cols-2 my-8 gap-4">
        <IconBox
          IconText="Select Your Role and Sign Up"
          backgroundColor="bg-[#E8FBFF]"
        >
         <Signup_icon />
        </IconBox>
        <IconBox IconText="Buyers Post Your Requirements">
          <Post_Icon/>
        </IconBox>
        <IconBox
          IconText="Review, Select, and Contact the Best Suppliers"
          backgroundColor="bg-[#E8FBFF]"
        >
          
          <Review_icon/>
        </IconBox>
        <IconBox IconText="Suppliers Complete your profile and get notified for opportunities">
          <Profile_Icon/>
        </IconBox>
        <IconBox
          IconText="Contact to Buyers and Share your Quote for the service"
          backgroundColor="bg-[#E8FBFF]"
        >
          <Share_Icon/>
        </IconBox>
        <IconBox IconText="Both the Parties can Connect and Make Business Leave a Feedback">
         
          <Connect_Icon/>
        </IconBox>
      </div>
    </div>
  );
}
