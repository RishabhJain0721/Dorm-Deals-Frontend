import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { SearchContext } from "../Contexts/SearchContext";

/**
 * Navbar component
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { searchDispatch } = useContext(SearchContext);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchSubmitHandler = () => {
    searchDispatch({
      type: "SEARCHSTARTED",
      payload: { value: searchInput },
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 p-4 flex justify-between items-center relative">
        {/* Left Section */}
        <div className="text-white text-2xl font-bold ml-8 flex items-center">
          DormDeals<span className="text-red-500 text-3xl">.</span>
        </div>

        <div
          className={`flex-col md:flex-row justify-between items-center absolute md:static inset-x-0 top-full bg-gray-900 gap-2 py-2 md:py-0 ${
            isDropdownOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Middle Section */}
          <div className="md:w-1/4 flex">
            <input
              onChange={searchInputHandler}
              type="text"
              className="w-full px-2 py-1 border rounded-s-2xl"
              placeholder="Search..."
            />
            <button
              onClick={searchSubmitHandler}
              className="px-4 bg-red-600 rounded-e-3xl"
            >
              <FaSearch className="text-white" />
            </button>
          </div>

          {/* Tab Section */}
          <div className="flex justify-center space-y-2 md:space-x-4 md:space-y-0 relative flex-col md:flex-row items-center">
            <Link
              to="/dashboard"
              className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out"
            >
              All Items
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-red-500 px-4 transition duration-300 ease-in-out"
            >
              About us
            </Link>
            <Link
              to="/dashboard/sell-item"
              className="text-white bg-red-500 rounded-3xl hover:text-red-500 px-4 transition duration-300 ease-in-out"
            >
              Sell
            </Link>
          </div>

          {/* Right Section */}
          <div className="text-white flex items-center">
            <div className="rounded-full flex justify-center items-center h-8 w-8 ">
              <IoPersonOutline />
            </div>
            <Link to="/dashboard/profile" className="hover:underline">
              My Account
            </Link>
          </div>
        </div>
        <button
          className="text-white hover:text-slate-200 block md:hidden"
          onClick={toggleDropdown}
        >
          {isDropdownOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <div className="bg-red-500 h-0.5"></div>
    </>
  );
};

export default Navbar;
