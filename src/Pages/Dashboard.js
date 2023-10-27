import React from "react";
import Navbar from "../components/Navbar";
import Items from "../components/Items";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      height:'100vh',
      width:'100%'
  }}>
      <Navbar />
      <Items />
      <Footer />
    </div>
  );
};

export default Dashboard;
