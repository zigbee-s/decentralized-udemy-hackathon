import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import Navigation from './Navigation';
import Card from './Card';

const Explore = ({ marketPlace }) => {
  const [tutorials, setTutorials] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      const tutorials = await marketPlace.getTutorial();
      setTutorials(tutorials);
    };

    fetchTutorials();
  }, []);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const urls = await Promise.all(
        tutorials.map((tutorial) =>
          axios
            .get(`http://localhost:3001/api/image/link/${tutorial.imageId}`)
            .then((response) => response.data.imageUrl)
        )
      );
      setImageUrls(urls);
    };

    fetchImageUrls();
  }, [tutorials]);

  return (
    <>
      <Navigation />
      <div className="pt-5 pl-5 pr-5">
        <Card />
        <div className="grid grid-cols-4 gap-4">
          {tutorials.map((tutorial, index) => (
            <Link
            to={`/buy/${tutorial.uniqueId}?courseId=${tutorial.uniqueId}&name=${encodeURIComponent(tutorial.courseName)}&description=${encodeURIComponent(tutorial.description)}&instructor=${encodeURIComponent(tutorial.instructorDetails)}&price=${encodeURIComponent(tutorial.cost)}&image=${encodeURIComponent(imageUrls[index])}&video=${encodeURIComponent(tutorial.videoId)}`}
            className='hover:scale-105'
          >
          
            <div className="w-300 px-4 mb-8" key={tutorial.uniqueId}>
              <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:bg-blue-100 h-100">
                <img
                  className="w-full mb-4 rounded-md"
                  src={imageUrls[index]}
                  alt={tutorial.courseName}
                />
                <h2 className="text-xl font-bold mb-2">{tutorial.courseName}</h2>
                <p className="text-gray-700">{tutorial.description}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Explore;
