# decentralized-udemy-hackathon
This project is a marketplace where content creators can upload tutorials, and distributors or YouTubers can purchase them for a certain amount. The distributors can further provide view access to the purchased content to end users. Whenever an end user purchases a tutorial for viewing, a royalty fee is paid to the original creator. Additionally, the platform charges a fixed percentage for all transactions.

The project is built using the NEAR blockchain for smart contract functionality. The frontend is developed using React, while the backend is implemented using Node.js. The cloud services are provided by Azure. The course data, including images and videos, are stored on the cloud, and their unique identifiers are stored in a smart contract. The backend interacts with Azure to render and upload videos and images, and it also includes functionality to stream videos in bits.

## Helpful scenario
The platform offers new creators a chance to earn more and gain exposure, while YouTubers can monetize their audience base and reach new viewers.

### For New Creators:
1. Opportunity for exposure to a wider audience.
2. Higher earning potential through royalties, especially for creators without an existing viewer base.
3. Building a reputation and gaining recognition in their field.

###For YouTubers:
1. Monetizing their existing viewer base through exclusive tutorials.
2. Expanding their reach beyond YouTube to a broader audience.
3. Collaborating with new creators for diverse content offerings.

## Directory Structure
- contract: Contains the smart contract code.
- backend: Includes the Node.js backend code.
- frontend: Contains the React frontend code.

## Getting Started
To get started with the project, follow the steps below:

1. Install the necessary dependencies by running the following command:
```
npm install
```
2. Deploy the smart contract to the NEAR blockchain using the deploy script:
```
npm run deploy
```
3. Start the frontend by running the following command:
```
npm run start
```
4. Start the frontend by running the following command in different terminal:
```
npm run frontend
```

# Usage
Once the application is up and running, users can access the marketplace through the frontend interface. Content creators can upload tutorials, and distributors can purchase them. Distributors can then provide access to the purchased content to end users, who can view the tutorials by paying the specified price. Whenever an end user purchases a tutorial, a royalty fee is automatically paid to the original creator, and the platform retains a percentage as its transaction fee.

The backend handles interactions with Azure for rendering and uploading videos and images. It also enables the streaming of videos in bits for a seamless viewing experience.

<img width="959" alt="screenshot 1" src="https://github.com/zigbee-s/decentralized-udemy-hackathon/assets/80088403/e37817a5-07f7-4768-bcdf-74799d63b770">
<img width="960" alt="screenshot 2" src="https://github.com/zigbee-s/decentralized-udemy-hackathon/assets/80088403/86695afa-c7c6-4228-8795-e30535232451">
<img width="960" alt="screenshot 3" src="https://github.com/zigbee-s/decentralized-udemy-hackathon/assets/80088403/050f721a-61f5-4547-afd2-35dd90999902">
<img width="957" alt="screenshot 4" src="https://github.com/zigbee-s/decentralized-udemy-hackathon/assets/80088403/17c4ea7a-8751-41a5-b301-21f287834b72">




