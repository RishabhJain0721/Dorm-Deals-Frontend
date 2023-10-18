import React from "react";
import { WhiteButton, YellowButton } from "../components/Buttons";

const LandingPage = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="text-white text-3xl md:text-5xl font-semibold mb-6">
        Welcome to College Marketplace
      </div>
      <div className="text-white md:text-lg mb-8">
        Buy and sell goods within your college community.
      </div>
      <div className="space-x-4">
        <YellowButton val="Log In" navigation="/login" />
        <WhiteButton val="Sign Up" navigation="/signup" />
      </div>
    </div>
  );
};

export default LandingPage;
