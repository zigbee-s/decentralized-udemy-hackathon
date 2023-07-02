import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Logged in successfully!");
    window.location.href="/";
  };

  return (
    <div className="container mx-auto py-20 px-8">
      <div className="max-w-md mx-auto rounded-lg shadow-lg bg-purple-100 p-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">Welcome back!</h1>
        <p className="text-gray-700 mb-8">
          Log in to your EduNEAR account and continue your learning journey.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-purple-800">Log in to your account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
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

          <div className="mb-4">
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

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold"
          >
            Log In
          </button>
        </form>

        <p className="text-gray-700 mt-4">
          Don't have an account? <Link to="/register" className="text-purple-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
