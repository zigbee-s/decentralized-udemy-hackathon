import React, {  } from 'react';
import FileUploadForm from './components/FileUploadForm'; // Import the FileUploadForm component
import VideoPlayer from './components/VideoPlayer';
import ImageDisplay from './components/ImageDisplay';


const App = () => {
  return (
    <>  
      <h1>File Upload</h1>
      <FileUploadForm />
      <VideoPlayer/>
      <ImageDisplay/>
    </>
  )
};

export default App;
