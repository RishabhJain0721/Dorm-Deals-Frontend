import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
//   const token = useParams();
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
      })
      .catch((error) => {
        console.error("Email verification failed:", error);
        // Handle the error, e.g., display an error message.
      });
  }, [token]);

  return (
    <div>
      {/* You can display a loading spinner or a message while the verification is in progress */}
      <p>Verifying your email...</p>
    </div>
  );
};

export default VerifyEmail;
