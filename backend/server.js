const express = require('express');
const multer = require('multer');
const axios = require('axios');
const { BlobServiceClient } = require('@azure/storage-blob');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());

// Create a temporary storage location for storing the file chunks
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Azure Storage configuration


const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
const CONTAINER_NAME = process.env.CONTAINER_NAME;


// Create an Azure Blob Service client
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

// Route for handling file chunk uploads
// Upload route
app.post('/api/upload', upload.single('file'), async (req, res) => {
  console.log('Uploading file:', req.file.originalname);
  try {
    const file = req.file;

    // Generate a unique identifier for the file
    const uniqueId = uuidv4();

    // Use the unique identifier as the filename
    const fileName = `${uniqueId}-${file.originalname}`;

    // Upload the file to Azure Blob Storage with the new filename
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    const uploadBlobResponse = await blockBlobClient.upload(file.buffer, file.buffer.length);

    console.log('File uploaded');

    const blobProperties = await blockBlobClient.getProperties();
    const contentLength = blobProperties.contentLength;

    res.set('Content-Length', contentLength.toString()); // Set the content-length header

    // Return the unique identifier to the React frontend
    res.status(200).json({ fileId: fileName });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file');
  }
});



// Route for streaming the uploaded video
const {generateBlobSASQueryParameters, BlobSASPermissions, StorageSharedKeyCredential } = require("@azure/storage-blob");


async function generateSasToken(filename) {
  const storageAccountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
  const storageAccountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;
  const containerName = process.env.CONTAINER_NAME;

  const sharedKeyCredential = new StorageSharedKeyCredential(storageAccountName, storageAccountKey);
  const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`, sharedKeyCredential);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobClient = containerClient.getBlobClient(filename);

  const sasOptions = {
    containerName: containerClient.containerName,
    blobName: blobClient.name,
    permissions: BlobSASPermissions.parse("r"),
    protocol: "https",
    startsOn: new Date(),
    expiresOn: new Date(new Date().getTime() + 3600 * 1000), // Set the expiration time (e.g., 1 hour from now)
  };

  const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();
  return blobClient.url + "?" + sasToken;
}


// Route for streaming the uploaded video
app.get('/api/video/stream/:filename', async (req, res) => {
  const filename = req.params.filename;
  console.log('Streaming file:', filename);
  try {
    const sasUrl = await generateSasToken(filename);
    
    // console.log('SAS URL:', sasUrl);

    const options = {
      headers: {
        'Accept-Ranges': 'bytes',
        'Content-Type': 'video/mp4',
      },
    };

    // Check if range headers exist
    const rangeHeader = req.headers['range'];
    if (rangeHeader) {
      const parts = rangeHeader.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : undefined;

      // Retrieve video file size
      const response = await axios.head(sasUrl);
      const videoSize = response.headers['content-length'];

      options.headers['Content-Range'] = `bytes ${start}-${end || videoSize - 1}/${videoSize}`;

      // Stream the specific range of the video file
      const streamResponse = await axios.get(sasUrl, {
        headers: {
          Range: rangeHeader,
        },
        responseType: 'stream',
      });

      streamResponse.data.pipe(res);
    } else {
      // Stream the entire video file
      const response = await axios.get(sasUrl, { responseType: 'stream' });
      response.data.pipe(res);
    }
  } catch (error) {
    console.error('Error streaming file:', error);
    res.status(500).send('Error streaming file');
  }
});

// Route for getting the link to an image
app.get('/api/image/link/:filename', async (req, res) => {
  const filename = req.params.filename;
  console.log('Getting link for image:', filename);
  try {
    const sasUrl = await generateSasToken(filename);
    
    // console.log('SAS URL:', sasUrl);

    // Return the SAS URL as the response
    res.status(200).json({ imageUrl: sasUrl });
  } catch (error) {
    console.error('Error getting link for image:', error);
    res.status(500).send('Error getting link for image');
  }
});


// Start the server
app.listen(3001, () => {
console.log('Server listening on port 3001');
});