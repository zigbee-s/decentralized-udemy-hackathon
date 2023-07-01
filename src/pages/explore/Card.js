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
    {
      imageUrl: 'https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b59fa986fb66_ABM%20college%20web%20design%20skills%20main.jpg',
      title: 'Web Design Masterclass',
      content: 'Create stunning and user-friendly website designs with HTML, CSS, and JavaScript.',
    },
    {
      imageUrl: 'https://www.altamira.ai/wp-content/uploads/2019/09/Full-Stack-DeveloperArtboard-1.png',
      title: 'Full-Stack Web Development',
      content: 'Become a full-stack web developer and build end-to-end web applications.',
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      title: 'Complete JavaScript Course',
      content: 'Master the fundamentals and advanced concepts of JavaScript programming.',
    },
    {
      imageUrl: 'https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b',
      title: 'React Web Development',
      content: 'Build interactive and responsive web applications using React framework.',
    },
    {
      imageUrl: 'https://spectrum.ieee.org/media-library/the-python-logo-on-top-of-imagery-representing-dna-sequencing-or-other-data.jpg?id=33364099&width=980',
      title: 'Python for Data Science and Machine Learning',
      content: 'Learn data analysis, visualization, and machine learning techniques with Python.',
    },
    {
      imageUrl:'https://repository-images.githubusercontent.com/410214337/070f2aba-d9d6-4699-b887-9a0f29015b1b',
      title: 'Web Design Masterclass',
      content: 'Create stunning and user-friendly website designs with HTML, CSS, and JavaScript.',
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
