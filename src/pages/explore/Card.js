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
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
      title: 'Python for Data Science',
      content: 'Explore data analysis and ML with Python.',
    },
    {
      imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/8f/d1/ec/8fd1ec68-1ced-9c02-6df8-9f7e6f7df0f4/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/434x0w.webp',
      title: 'Web Design Masterclass',
      content: 'Create stunning and user-friendly designs',
    },
    {
      imageUrl: 'https://www.rlogical.com/wp-content/uploads/2023/03/MERN-Stack-Best-for-Developing-Web-Apps.webp',
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
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png',
      title: 'Python for Data Science and ML',
      content: 'Learn data analysis, visualization, and machine learning techniques with Python.',
    },
    {
      imageUrl:'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/8f/d1/ec/8fd1ec68-1ced-9c02-6df8-9f7e6f7df0f4/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/434x0w.webp',
      title: 'Web Design Masterclass',
      content: 'Create stunning and user-friendly website designs with HTML, CSS, and JavaScript.',
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4">
    {cardData.map((card, index) => (
      <Link to="/buyCourse" className="min-h-100 hover:scale-105" key={index}>
        <div className="w-64 min-h-100 px-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full transition duration-300 hover:bg-blue-100">
            <img className="w-full mb-4 rounded-md" src={card.imageUrl} alt={card.title} />
            <h2 className="text-xl font-bold mb-2">{card.title}</h2>
            <p className="text-gray-700 flex-grow">{card.content}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default Card;
