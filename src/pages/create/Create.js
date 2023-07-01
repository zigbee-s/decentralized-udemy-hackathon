import React from "react";

const Create = () => {
    return (
        <div className="max-w-md mx-auto font-Inter">
  <form>
    <div className="mb-4 mt-20 pt-20">
      <label htmlFor="courseName" className="block text-gray-700 font-bold mb-2">
        Name of the Course
      </label>
      <input
        type="text"
        id="courseName"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Enter the name of the course"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
        Description
      </label>
      <textarea
        id="description"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Enter the course description"
      ></textarea>
    </div>

    <div className="mb-4">
      <label htmlFor="instructorDetails" className="block text-gray-700 font-bold mb-2">
        Instructor Details
      </label>
      <input
        type="text"
        id="instructorDetails"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Enter the instructor details"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="cost" className="block text-gray-700 font-bold mb-2">
        Cost
      </label>
      <input
        type="text"
        id="cost"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
        placeholder="Enter the course cost"
      />
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