import React from "react";
import { FaUser, FaFileImage, FaVideo, FaUpload, FaRupeeSign, FaBook } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from 'react';



const Create = ({ marketPlace }) => {
  const [courseData, setCourseData] = useState({
    id: uuidv4(),
    courseName: "",
    description: "",
    instructorDetails: "",
    cost: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();


    // upon recieving data we need to push it to smart contract 
    // await marketPlace.addTutorial(uniqueId.value, courseName.value, description.value,instructorDetails.value,cost.value, imageId.value, videoId.value)

    console.log(courseData);
  };


  return (
    <div className="max-w-md mx-auto font-Inter">
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-20 pt-20">
          <label htmlFor="courseName" className="block text-gray-700 font-bold mb-2">
            Name of the Course
          </label>
          <div className="relative">

            <input
              type="text"
              id="courseName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter the name of the course"
            />
            <FaUser className="absolute right-3 top-2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <div className="relative">
            <textarea
              id="description"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter the course description"
            ></textarea>
            <FaBook className="absolute right-3 top-2 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="instructorDetails" className="block text-gray-700 font-bold mb-2">
            Instructor Details
          </label>
          <div className="relative">
            <input
              type="text"
              id="instructorDetails"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter the instructor details"
            />
            <FaUser className="absolute right-3 top-2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="cost" className="block text-gray-700 font-bold mb-2">
            Cost
          </label>
          <div className="relative">
            <input
              type="text"
              id="cost"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
              placeholder="Enter the course cost"
            />
            <FaRupeeSign className="absolute right-3 top-2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image Upload
          </label>
          <input type="file" id="image" className="mb-2" />
        </div>

        <div className="mb-4">
          <label htmlFor="video" className="block text-gray-700 font-bold mb-2">
            Video Upload
          </label>
          <input type="file" id="video" className="mb-2" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>

  )
}

export default Create;