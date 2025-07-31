demo link = https://talksy-chat-app-qlkv.vercel.app/

💬 Talksy — Real-Time Chat Application

Talksy is a full-stack, real-time one-to-one chat application built using modern web technologies. Designed for fast and secure communication, it offers live messaging with instant delivery, real-time online/offline user status, and a clean, responsive user interface.

The frontend is built with React.js and Tailwind CSS, ensuring a smooth and responsive experience across all devices. It uses Context API for state management and Socket.IO for real-time bi-directional communication.

The backend, powered by Node.js, Express.js, and MongoDB, handles secure user authentication with JWT, efficient data storage, and RESTful API endpoints. Users can also upload profile pictures, which are seamlessly managed using Cloudinary.

    🔒 Authentication with JWT (Login, Logout, Protected Routes)

    💬 One-to-One Private Messaging in real-time

    🟢 Live User Status updates

    📤 Profile Picture Uploads via Cloudinary

    📱 Responsive UI/UX with Tailwind CSS

    ⚡ Real-Time Messaging using Socket.IO

    🧠 Global State Management using React Context API

🧱 Tech Stack
Frontend

    React.js — Component-based UI

    Vite — Fast development server with HMR

    Tailwind CSS — Utility-first styling

    Context API — Global state management

    ESLint — Linting and code quality

    Cloudinary — Image storage

Backend

    Node.js + Express.js — REST API

    MongoDB + Mongoose — NoSQL Database

    Socket.IO — Real-time WebSocket communication

    JWT — Authentication

    Multer — File uploads

📸 Screenshots

    Add images here (e.g., /screenshots/login.png, /screenshots/chat.png)
    Example:

Login Page	Chat Interface
	
📂 Folder Structure

<img width="619" height="325" alt="image" src="https://github.com/user-attachments/assets/b590af45-dbe8-4819-bd58-86e1504da82f" />

⚙️ Setup & Installation
Prerequisites

    Node.js (v16+ recommended)

    MongoDB (Local or MongoDB Atlas)

    Cloudinary Account (for profile pictures)

🔑 Environment Variables

Create a .env file in the /server directory:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

🚀 Run Locally
1. Clone the Repository

git clone https://github.com/Razik1108/Talksy_Chat_App-master.git
cd Talksy_Chat_App-master

2. Install Dependencies

# For frontend
cd client
npm install

# For backend
cd ../server
npm install

3. Start the Application

# In /server
npm run dev

# In /client (in a separate terminal)
npm run dev

Frontend: http://localhost:5173
Backend API: http://localhost:5000
📌 TODO / Roadmap

    ✅ One-to-One Chat

    ✅ User Authentication

    ✅ Profile Image Uploads

    ✅ Live User Status

    🔄 Group Chats (Coming Soon)

    🔄 Typing Indicators

    🔄 Push Notifications (Web/Mobile)

🛡️ Security Notes

    All sensitive data (e.g., JWT secrets, DB URI) must be stored in .env files.

    Do not commit .env or credential files.

.env
node_modules/

🤝 Contributing

Contributions, issues, and feature requests are welcome!

    Fork the repository

    Create your feature branch: git checkout -b feature/AmazingFeature

    Commit your changes: git commit -m 'Add AmazingFeature'

    Push to the branch: git push origin feature/AmazingFeature

    Open a Pull Request

🙏 Acknowledgments

    React.js

    Socket.IO

    Cloudinary

    Tailwind CSS

    MongoDB Atlas

📃 License

This project is licensed under the MIT License.

