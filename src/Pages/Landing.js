import React from "react";
import { WhiteButton, YellowButton } from "../components/Buttons";
import landingImg from "../Images/LANDING.jpg";

const LandingPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${landingImg})` }}
      className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="bg-white bg-opacity-30 max-w-lg sm:max-w-2xl md:max-w-3xl w-full mx-4 p-6 sm:p-10 md:p-14 rounded-2xl shadow-cyan-500/50 shadow-lg">
        <div className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold mb-6 leading-tight">
          Welcome to College Marketplace
        </div>
        <div className="text-white text-sm sm:text-base md:text-lg mb-8">
          Buy and sell goods within your college community.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <YellowButton val="Log In" navigation="/login" />
          <WhiteButton val="Sign Up" navigation="/signup" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
