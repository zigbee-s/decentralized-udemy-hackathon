import React from 'react';

const VideoPlayer = () => {
  const fileName = 'fc11ebe3-6592-4f3c-9173-8ee7da766b27-test (2).mp4'

  const videoUrl = `http://localhost:3001/api/video/stream/${fileName}`;

  return (
    <div>
        {videoUrl && (
        <video controls style={{ width: '500px', height: 'auto' }}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  )

};
export default VideoPlayer;
