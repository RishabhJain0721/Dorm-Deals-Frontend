import React, { useContext,useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import VerifyEmail from "./Pages/VerifyEmail";
import ItemInfo from "./components/ItemInfo";
import Seller from "./Pages/Seller";
import About from "./Pages/About";
import { AuthContext } from "./Contexts/AuthContext";
import { ItemContextProvider } from "./Contexts/ItemContext";
import { SearchContextProvider } from "./Contexts/SearchContext";
import "./App.css";
import { HashLoader } from "react-spinners";
import axios from "axios";

axios.defaults.baseURL = "https://shy-ruby-bream-vest.cyclic.app";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading (true);
    setTimeout(() => {
      setLoading(false);
    },4000)

  }, []);
  return (
    <div>
            {
        loading ? 
        <div style={{minHeight:"100vh", width: "100%", display:"flex",justifyContent:"center",alignItems:"center"}}>
          <HashLoader color="#36d7b7" loading={loading} size={150}/>
        </div>
          :
      <ItemContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route
                path="/dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="/dashboard/profile" element={<Profile />} />
              <Route path="/dashboard/itemInfo" element={<ItemInfo />} />
              <Route path="/dashboard/sell-item" element={<Seller />} />
              <Route path="/dashboard/item/:id" element={<ItemInfo />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </BrowserRouter>
        </SearchContextProvider>
      </ItemContextProvider>
}
    </div>
  );
};

export default App;
