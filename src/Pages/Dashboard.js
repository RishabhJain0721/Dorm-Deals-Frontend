import React from "react";
import Navbar from "../components/Navbar";
import Items from "../components/Items";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("details");
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <Items />
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Dashboard;
