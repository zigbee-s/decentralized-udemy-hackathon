import React, { useState } from 'react';
import axios from 'axios';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  const getImageUrl = () => {
    axios
      .get('http://localhost:3001/api/image/link/6e3f91a7-b1ed-4d3e-b6e5-a31779086853-cat.jpg') // Replace 'image_filename.jpg' with the actual image filename
      .then((response) => {
        setImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.error('Error getting image URL:', error);
      });
  };

  return (
    <div>
      <button onClick={getImageUrl}>Get Image</button>
      Here:
      {imageUrl && <img src={imageUrl} alt="" />}
    </div>
  );
};

export default ImageDisplay;
