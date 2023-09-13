import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    navigate('/');
  };
  
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}

export default Dashboard
