import React from "react";
import Navbar from "../components/Navbar";
import Items from "../components/Items";

/**
 * Dashboard component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Items />
    </div>
  );
};

export default Dashboard;
