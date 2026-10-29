# TaskTrek – Full-Stack Task Management Application

TaskTrek is a full-stack task management application designed to help users organize, track, and manage their daily tasks efficiently. It provides a responsive dashboard, secure authentication, task management features, and search and status filtering to improve productivity.

## 🚀 Live Demo

- **Frontend: ** https://task-trek-mern.vercel.app/
- **Backend API:** https://tasktrek-mern.onrender.com

## ✨ Features

- **User Authentication:** Secure registration and login using JWT authentication and password hashing with bcrypt.
- **Task Management:** Create, view, update, and delete tasks.
- **Task Status Tracking:** Organize tasks into Todo, Doing, and Done statuses.
- **Search and Filtering:** Search tasks and filter them by status.
- **Responsive Dashboard:** View and manage tasks through a responsive interface.
- **Dashboard Statistics:** Track task progress and view task summaries.
- **Toast Notifications:** Receive feedback for application actions.
- **User-Specific Tasks:** Each authenticated user manages their own tasks.
- **RESTful API:** Communicate between the frontend and backend through API endpoints.

## 🛠️ Tech Stack

**Frontend**
- React.js
- Vite
- JavaScript
- Tailwind CSS
- Axios
- React Hot Toast

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt

**Deployment**
- Vercel – Frontend
- Render – Backend
- MongoDB Atlas – Cloud Database

## 📂 Project Structure

```text
TaskTrek-MERN/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── todoRoutes.js
│   ├── middleware/
│   ├── models/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
└── README.md
```

*Note: The structure above is representative. Adjust folder names to match your actual repository.*

## ⚙️ Getting Started

### Prerequisites

Install the following before running TaskTrek locally:

- Node.js and npm
- MongoDB Atlas account or a local MongoDB instance
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Rakshithaj-29/TaskTrek-MERN.git
cd TaskTrek-MERN
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_strong_jwt_secret
```

Replace the placeholder values with your actual configuration. Use the exact environment variable names expected by your authentication code.

Start the backend:

```bash
npm start
```

Alternatively, if you use Nodemon:

```bash
npx nodemon server.js
```

The backend will run at:

`http://localhost:3000`

### 3. Set Up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory:

```env
VITE_API_URL=http://localhost:3000
```

Ensure your Axios configuration uses this variable:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
```

Start the frontend development server:

```bash
npm run dev
```

Vite will display the local URL, typically:

`http://localhost:5173`

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used to sign and verify JWTs |
| `VITE_API_URL` | Base URL of the backend API |


## 🌐 Deployment

### Frontend – Vercel

1. Import the GitHub repository into Vercel.
2. Select the `frontend` directory as the root directory.
3. Configure the Vite build command as `npm run build`.
4. Set the output directory to `dist`.
5. Configure `VITE_API_URL` with your deployed Render backend URL.
6. Deploy the application.

### Backend – Render

1. Create a new Web Service and connect the GitHub repository.
2. Set the root directory to `backend`.
3. Configure the build command as `npm install`.
4. Configure the start command as `node server.js`.
5. Add `MONGO_URI` and the required authentication environment variables.
6. Deploy the service.

### Database – MongoDB Atlas

Configure a cloud database and ensure its network access settings allow the deployed backend to connect.

## 🔌 API Overview

The backend exposes the following route prefixes:

| Route | Purpose |
|---|---|
| `/` | API welcome message |
| `/auth` | Authentication endpoints |
| `/todos` | Task management endpoints |

Specific HTTP methods and endpoint paths depend on the route definitions in the backend.

## 🔮 Future Enhancements

- Task deadlines and priority levels
- Task reminders and notifications
- Real-time task updates
- Team collaboration
- Task analytics and productivity reports

## 👩‍💻 Author

**Rakshitha Kumari J**

- GitHub: [@Rakshithaj-29](https://github.com/Rakshithaj-29)

## 📄 License

This project is open-source. Add a `LICENSE` file to the repository to specify the license under which it may be used and distributed.














*backend URL = https://tasktrek-mern.onrender.com
 * FrontenB URL = https://task-trek-mern.vercel.app/
