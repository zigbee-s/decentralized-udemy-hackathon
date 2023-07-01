import React, { useState } from "react"
import avatar from '../../assets/avatar.png';
import { FaSignInAlt, FaUserCircle, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignup = () => {
    alert("Signup")
  };

  const handleLogin = () => {
    alert("Login")
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 font-Inter">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center pr-20">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Edu
          </span>
        </a>

        <form className="flex-grow mx-4 md:mx-auto">
          <label htmlFor="default-search" className="sr-only">
            Search
          </label>
          <div className="relative flex items-center">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for anything"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 dark:text-gray-400 absolute left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex pl-20">
          <button
            id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
            type="button"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:focus:ring-blue-800 bg-gradient-to-r from-[#FB65FE] via-[#9010FF] to-[#FB65FE] hover:from-[#9010FF] hover:via-[#FB65FE] hover:to-[#9010FF]"
          >
            Connect wallet
          </button>
        </div>

        <div className="ml-8 relative">
          <div
            className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 cursor-pointer"
            onMouseEnter={handleDropdownToggle}
          >
            <img src={avatar} alt="avatar" />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-md">
                <ul>
                  <li onClick={handleSignup} className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaUserPlus className="mr-2" />
                    Sign Up
                  </li>
                  <li onClick={handleLogin} className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <FaSignInAlt className="mr-2" />
                    Login
                  </li>
                  <li className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer">
                    <Link to='/profile'>
                    <FaUserCircle className="mr-2" />
                    Profile
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
