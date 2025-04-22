Quotes and Inspiration App - Frontend
📱 Overview
This repository contains the frontend application for a quotes and inspiration app. Built with Vue.js, this app allows users to create accounts, log in, and view inspiring quotes. The frontend interfaces with a backend API to handle user authentication and quote retrieval.
✨ Features

User authentication (signup and login)
Random quote display on landing page
Dashboard with personalized quotes after login
Responsive design with a modern UI
Session management using localStorage

🛠️ Technologies Used

Vue.js 3
Vue Router for page navigation
UnoCSS for styling
Vite as the build tool

🚀 Getting Started
Prerequisites

Node.js (v16+)
npm or yarn

Installation

Clone the repository:
bashgit clone https://github.com/linadevinci/ALinaWebsiteFront.git
cd ALinaWebsiteFront

Install dependencies:
bashnpm install

Configure the backend API:
Make sure the VITE_API_URL environment variable is set to point to your backend service, or update the config.js file.
Start the development server:
bashnpm run start

Build for production:
bashnpm run build


🔗 Backend API Integration
The frontend communicates with a backend API for:

User registration
Authentication
Fetching random quotes

The application is configured to connect to the backend via the API client in api-client.js.
🌐 Deployment
The application is deployed on Netlify: https://alinafront.netlify.app/
