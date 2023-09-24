import React, { useContext } from "react";
import { WhiteButton, YellowButton } from "../components/Buttons";
import { AuthContext } from "../Contexts/AuthContext";

const LandingPage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center">
      <div className="text-white text-5xl font-semibold mb-6">
        Welcome to College Marketplace
      </div>
      <div className="text-white text-lg mb-8">
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
