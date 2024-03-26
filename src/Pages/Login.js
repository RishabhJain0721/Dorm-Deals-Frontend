import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { BlueButton } from "../components/Buttons";
import { AuthContext } from "../Contexts/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import CustomAlertDialogue from "../components/CustomAlertDialogue";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [name, setName] = useState("");
  // Remove the duplicate declaration of 'setEmail'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [verificationLinkDialogue, setVerificationLinkDialogue] =
    useState(false);
  const [duplicateuserDialogue, setDuplicateUserDialogue] = useState(false);



  const toggleVerificationLinkDialogue = () => {
    setVerificationLinkDialogue(!verificationLinkDialogue);
  };
  const toggleDuplicateUserDialogue = () => {
    setDuplicateUserDialogue(!duplicateuserDialogue);
  };


// this component will handle the form it will signin or signup
  const toggleShowLogin = () => {
    setShowLogin(!showLogin)
  }


  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Login data to => /api/auth/login
    if (showLogin) {
      axios
        .post("/api/auth/login", { email, password })
        .then((res) => {
          dispatch({
            type: "LOGIN",
            payload: { name: res.data.name, token: res.data.token },
          });
          navigate("/dashboard");
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }


    // signup data to => /api/auth/signup

    else {
      axios
        .post("/api/auth/signup", { name, email, password })

        .then((res) => {
          toggleVerificationLinkDialogue();
          toast.success(res.data.message);
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
            toast.error("Invalid Email");
          } else {
            toast.error("Something went wrong");
            console.log(err);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }

    axios
      .post("/api/auth/login", { email, password })

      .then((res) => {
        dispatch({
          type: "LOGIN",
          payload: { name: res.data.name, token: res.data.token },
        });
        navigate("/dashboard");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">{showLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleLogin}>
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
          {!showLogin && (
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute top-9 right-3 z-10 text-black text-xl cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          <div className="text-center w-full">
            <BlueButton val={showLogin ? "Login" : "Sign Up"} loading={loading} />
          </div>
        </form>
        <p className="mt-4 text-center">
          {showLogin ? "Don't have an account?" : "Already have an account?"}{"  "}
          <span className="text-blue-500 hover:underline cursor-pointer" onClick={toggleShowLogin}>
            {showLogin ? "Sign Up" : "Login"}
          </span>
          </p>

        </div>
    </div>
  );
};

export default Login;
