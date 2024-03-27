import React from "react";
import { WhiteButton, YellowButton } from "../components/Buttons";

const LandingPage = () => {
  return (
    <div className=" bg-[url('C:\Users\welcome\OneDrive\Desktop\drom\Dorm-Deals-Frontend\src\Images\landingimg.jpg')]  bg-cover min-h-screen bg-center-cover flex flex-col justify-center items-center text-center px-4">
        <div className=" bg-white bg-opacity-30 w-45 m-30 p-8 py-14 rounded-lg  shadow-cyan-500/50 shadow-lg">
        <div className="text-white text-3xl md:text-5xl font-semibold mb-6">
        Welcome to College Marketplace
      </div>
      <div className="text-white md:text-lg mb-8">
        Buy and sell goods within your college community.
      </div>
      <div className="space-x-4">
        <YellowButton val="Log In" navigation="/login"  />
        <WhiteButton val="Sign Up" navigation="/signup" />
      </div>
        </div>
     
    </div>
  );
};

export default LandingPage;
