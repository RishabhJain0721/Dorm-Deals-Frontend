import React, { useState } from "react";
import axios from "axios";
import Input from "../components/Input";
import { BlueButton } from "../components/Buttons";
import CustomAlertDialogue from "../components/CustomAlertDialogue";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [verificationLinkDialogue, setVerificationLinkDialogue] =
    useState(false);
  const [duplicateuserDialogue, setDuplicateUserDialogue] = useState(false);
  const navigate = useNavigate();

  const toggleVerificationLinkDialogue = () => {
    setVerificationLinkDialogue(!verificationLinkDialogue);
  };
  const toggleDuplicateUserDialogue = () => {
    setDuplicateUserDialogue(!duplicateuserDialogue);
  };

  // Function to handle signup
  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/signup", { name, email, password })

      .then((res) => {
        toggleVerificationLinkDialogue();
        alert(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          // If the response status is 400, it's a duplicate user
          toggleDuplicateUserDialogue();
          setName("");
          setEmail("");
          setPassword("");
        } else if (err.response && err.response.status === 401) {
          alert("Invalid Email");
        } else {
          console.log(err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <CustomAlertDialogue
          onPressed={() => navigate("/login")}
          title={"Verification your account"}
          message={"A verification link has been sent to your email"}
          isVisible={verificationLinkDialogue}
          toggleVisibility={toggleVerificationLinkDialogue}
        />
        <CustomAlertDialogue
          isVisible={duplicateuserDialogue}
          toggleVisibility={toggleDuplicateUserDialogue}
          title="User Already Exists"
          message="A user is already with this email, please login"
        />
        <form onSubmit={handleSignup}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center">
            <BlueButton val="Sign Up" loading={loading} />
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
