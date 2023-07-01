import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const cardData = [
    {
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      title: 'JavaScript Mastery',
      content: 'Learn JavaScript from beginner to advanced.',
    },
    {
      imageUrl:'https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b',
      title: 'React Fundamentals',
      content: 'Master the basics of React framework.',
    },
    {
      imageUrl:'https://spectrum.ieee.org/media-library/the-python-logo-on-top-of-imagery-representing-dna-sequencing-or-other-data.jpg?id=33364099&width=980',
      title: 'Python for Data Science',
      content: 'Explore data analysis and machine learning with Python.',
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <Link to="/buyCourse" className='hover:scale-105'>
          <div className="w-300 px-4 mb-8" key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 hover:bg-blue-100 h-100">
              <img className="w-full mb-4 rounded-md" src={card.imageUrl} alt={card.title}/>
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-700">{card.content}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
