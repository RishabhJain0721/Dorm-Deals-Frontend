import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import axios from "axios";

const VerifyEmail = () => {
  const navigate = useNavigate(); // Use useNavigate to access navigation

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  console.log(token);

  useEffect(() => {
    // Make an API call to your server to verify the email using the token
    axios
      .get(`/verify-email?token=${token}`)
      .then((response) => {
        console.log(response.data.message);
        // Optionally, you can redirect the user to a login page or display a success message.

        // Redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        console.error("Email verification failed:", error);
        alert("Email verification failed.")
        navigate("/")
        // Handle the error, e.g., display an error message.
      });
  }, [token, navigate]); // Include navigate in the dependency array

  return (
    <div>
      {/* You can display a loading spinner or a message while the verification is in progress */}
      <p className=" text-center text-3xl">Verifying your email...</p>
    </div>
  );
};

export default VerifyEmail;
