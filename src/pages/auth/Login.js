import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { FiBook } from 'react-icons/fi';
import { FaPencilAlt, FaRuler } from 'react-icons/fa';

const Login = () => {
  return (
    <div 
    className="py-20 px-8 flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-200"
    >
      <img src={Logo} alt="logo" className="w-40 h-40 mb-6" />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Hello, Welcome to <span className="text-purple-500">Edu.near</span>
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
        <p className="mb-4">
        <FaPencilAlt className='text-red-600' />
          Welcome to our innovative tutorial platform! We've created a unique marketplace where content creators can share
          their expertise through video NFT tutorials. Here's how it works: creators upload their tutorials as NFTs, and
          anyone can purchase these NFTs to gain the right to distribute the course. When a tutorial is sold by a buyer, a
          percentage of the sale is paid as a royalty to the original owner.
        </p>
        <p className="mb-4">
        <FaRuler className='text-red-600' />
          But we didn't stop there! We've also incorporated NFT certificates, ensuring that your achievements are
          recognized and verified. After completing a course, you can download your personalized certificate as an NFT,
          adding a touch of exclusivity to your accomplishments.
        </p>
        <p className='mb-4'>
        <FiBook className='text-red-600' />
          Our platform combines the power of NFTs with the flexibility of a tutorial marketplace, allowing creators to
          monetize their content and buyers to explore, distribute, and sell these valuable tutorials. Join us today and
          become a part of this decentralized and innovative learning community!
        </p>
      </div>
      <Link to="/" className="mt-8">
      <button 
      className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 text-center dark:focus:ring-blue-800 bg-gradient-to-r from-[#FB65FE] via-[#9010FF] to-[#FB65FE] hover:from-[#9010FF] hover:via-[#FB65FE] hover:to-[#9010FF]">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Login;
