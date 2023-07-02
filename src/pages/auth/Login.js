import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto py-20 px-8">
      <div className="min-w-100 rounded-lg shadow-lg bg-purple-100 p-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-800">
          Welcome to <span className="text-purple-600">EduNEAR</span>!
        </h1>
        <p className="text-gray-700 mb-8">
          EduNEAR is an amazing online learning platform that offers a wide range of courses to enhance your knowledge and skills. Join our community of learners and unlock your potential today!
        </p>

        <h2 className="text-2xl font-bold mb-4 text-purple-800">Log in to your account</h2>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-semibold"
          >
            Log In
          </button>
      </div>
    </div>
  );
};

export default Login;
