import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Account created successfully!");
    window.location.href="/";
  };

  return (
    <div className="container mx-auto py-20 px-8">
      <div className="min-w-100 rounded-lg shadow-lg bg-purple-100 p-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">
          Welcome to <span className="text-purple-600">EduNEAR</span>!
        </h1>
        <p className="text-gray-700 mb-8">
          EduNEAR is an amazing online learning platform that offers a wide range of courses to enhance your knowledge and skills. Join our community of learners and unlock your potential today!
        </p>

        <h2 className="text-2xl font-bold mb-4 text-purple-800">Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex">
            <div className="mr-2 w-1/2">
              <label htmlFor="firstName" className="flex items-center text-gray-700 mb-1">
                <FiUser className="mr-2" />
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="ml-2 w-1/2">
              <label htmlFor="lastName" className="flex items-center text-gray-700 mb-1">
                <FiUser className="mr-2" />
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="mr-2 w-1/2">
              <label htmlFor="email" className="flex items-center text-gray-700 mb-1">
                <FiMail className="mr-2" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="ml-2 w-1/2">
              <label htmlFor="password" className="flex items-center text-gray-700 mb-1">
                <FiLock className="mr-2" />
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="border border-gray-300 p-2 rounded-md w-full"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold"
          >
            Register
          </button>
        </form>

        <p className="text-gray-700 mt-4">
          Already have an account? <Link to="/login" className="text-purple-600">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
