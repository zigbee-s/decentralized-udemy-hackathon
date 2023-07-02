import React, { useState } from "react";
import { FaUser, FaFileImage, FaVideo, FaUpload, FaRupeeSign, FaBook } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Create = ({ marketPlace }) => {
  const [courseData, setCourseData] = useState({
    id: uuidv4(),
    courseName: "",
    description: "",
    instructorDetails: "",
    cost: ""
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleVideoChange = (e) => {
    setSelectedVideo(e.target.files[0]);
  };

  const handleFileUpload = () => {
    return new Promise((resolve, reject) => {
      if (selectedImage && selectedVideo) {
        const imageFormData = new FormData();
        imageFormData.append("file", selectedImage);

        const videoFormData = new FormData();
        videoFormData.append("file", selectedVideo);

        axios
          .all([
            axios.post("http://localhost:3001/api/upload", imageFormData),
            axios.post("http://localhost:3001/api/upload", videoFormData)
          ])
          .then(
            axios.spread((imageResponse, videoResponse) => {
              // Handle success response for image upload
              console.log("Image uploaded successfully");
              const imageFilename = imageResponse.data.fileId;
              console.log("New image filename:", imageFilename);

              // Handle success response for video upload
              console.log("Video uploaded successfully");
              const videoFilename = videoResponse.data.fileId;
              console.log("New video filename:", videoFilename);

              resolve({ imageFilename, videoFilename });
            })
          )
          .catch((error) => {
            // Handle error
            console.error("Error uploading file:", error);
            reject(error);
          });
      } else {
        const error = new Error("Please select both an image and a video file");
        console.error(error);
        reject(error);
      }
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { imageFilename, videoFilename } = await handleFileUpload();

      // Upon receiving data and file uploads, you can push them to the smart contract
      await marketPlace.addTutorial(
        courseData.id,
        courseData.courseName,
        courseData.description,
        courseData.instructorDetails,
        courseData.cost,
        imageFilename,
        videoFilename
      );

    } catch (error) {
      // Handle err
      console.error("Error uploading files:", error);
    }
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <FaRupeeSign className="absolute right-3 top-2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image Upload
          </label>
          <input type="file" id="image" className="mb-2" onChange={handleImageChange} />
        </div>

        <div className="mb-4">
          <label htmlFor="video" className="block text-gray-700 font-bold mb-2">
            Video Upload
          </label>
          <input type="file" id="video" className="mb-2" onChange={handleVideoChange} />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
