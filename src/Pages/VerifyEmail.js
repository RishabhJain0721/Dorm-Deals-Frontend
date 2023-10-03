import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const VerifyEmail = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  useEffect(() => {
    // Make an API call to your server to verify the email using the token
    axios
      .get(`/verify-email?token=${token}`)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Email verification failed:", error);
        alert("Email verification failed.");
        navigate("/");
      });
  }, [token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-96">
      <p className=" text-4xl">Verifying your email</p>
      <InfinitySpin width="200" color="#424242" />
    </div>
  );
};

export default VerifyEmail;
