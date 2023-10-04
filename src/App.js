import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import Dashboard from "./Pages/Dashboard";
import VerifyEmail from "./Pages/VerifyEmail";
import ItemInfo from "./components/ItemInfo";
import Seller from "./Pages/Seller";
import About from "./Pages/About";
import { AuthContext } from "./Contexts/AuthContext";
import { ItemContextProvider } from "./Contexts/ItemContext";
import { SearchContextProvider } from "./Contexts/SearchContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div>
      <ItemContextProvider>
        <SearchContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
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
    </div>
  );
};

export default App;
