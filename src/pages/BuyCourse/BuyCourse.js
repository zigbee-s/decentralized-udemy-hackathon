import React from "react";

function BuyCourse() {
  return (
    <div className="mt-20 pt-5 font-Inter">
      <header className="bg-white border-b-2 border-gray-300">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-3xl font-bold">Course Name</h1>
        </div>
      </header>

      <div className="container mx-auto py-8 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src="https://via.placeholder.com/800x400"
                alt="Course"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Course Name</h2>
                <p className="text-gray-700 text-base mb-4">
                  Course description Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Beatae magnam quae, tempora asperiores
                  inventore debitis itaque odio.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">$49.99</span>
                  <a href="/course">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold">
                    Buy Now
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Instructor</h2>
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="https://via.placeholder.com/150"
                  alt="Instructor"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-700">Instructor Bio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyCourse;
