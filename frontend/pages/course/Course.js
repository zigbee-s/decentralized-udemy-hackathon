import React, { useState } from "react";
import instructor from '../../assets/instructor.png';

function Course() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      const commentList = [...comments, newComment];
      setComments([...comments, newComment]);
      setNewComment("");
    }
  }

  const handleGenerateCertificate = () => {
    alert("Generate Certificate")
  }

  const handleSellCourse = () => {
    alert("Sell course");
  }

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
              <div className="aspect-w-16 aspect-h-9">
                <div className="relative">
                  <iframe width="800"
                    height="500"
                    src="https://www.youtube.com/embed/4pHPI7dTL3I"
                    title="Course Playlist"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Course Name</h2>
                <p className="text-gray-700 text-base mb-4">
                  Course description Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Beatae magnam quae, tempora asperiores
                  inventore debitis itaque odio.
                </p>
                <div className="bg-white border-t-2 border-gray-300 p-4">
                  <h3 className="text-lg font-bold mb-4">Comments</h3>
                  {
                    comments.length > 0 ? (
                      <ul className="space-y-4">
                        {comments.map((comment, index) => (
                          <li key={index} className="bg-white border-t-2 border-gray-300 p-4">
                            <p className="text-gray-700">{comment}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700">No comments yet</p>
                    )
                  }
                  <form className="mt-4" onSubmit={handleCommentSubmit}>
                    <input
                      type="text"
                      className="border border-gray-300 p-2 rounded-md w-full"
                      placeholder="Add a comment"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md font-semibold"
                    >
                      Add Comment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>


          <div className="lg:col-span-1  text-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div>
              <h2 className="text-xl font-bold mb-4">Instructor</h2>
              <hr className="border-t-2 border-gray-300 my-4" />
              <div className="flex flex-col items-center">
                <div className="flex">
                  <img
                    className="w-12 h-12 rounded-full object-cover "
                    src={instructor}
                    alt="Instructor"
                  />
                  <h3 className="text-2xl font-semibold text-purple-500 mt-4 hover:text-pink-500 transition duration-300">
                    John Doe
                  </h3>
                </div>
                <p className="text-gray-700">
                  John Doe is an experienced web developer with a passion for teaching others. He has been working in the industry for over 10 years and has expertise in frontend and backend development. John enjoys sharing his knowledge and helping aspiring developers improve their skills. In his free time, he loves to explore new technologies and contribute to open-source projects.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
            <h2 className="text-3xl font-bold mb-4 text-center ">Course Options</h2>
            <div className="flex justify-center">

              <button
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white rounded-md font-semibold mr-4 transition-colors duration-300 ease-in-out"
                onClick={handleGenerateCertificate}
              >
                Generate Certificate
              </button>
              <button
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white rounded-md font-semibold transition-colors duration-300 ease-in-out"
                onClick={handleSellCourse}
              >
                Sell Course
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
