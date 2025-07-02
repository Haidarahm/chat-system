# How to run the project

[![Watch the video](/howToUse.mp4)]

# Chat System Web Application

A real-time chat web application with authentication, user profiles, and image upload, built with React, Express, MongoDB, and Socket.io.

---

## Features

- User authentication (signup, login, logout)
- Real-time messaging with Socket.io
- Profile management with avatar upload (Cloudinary)
- Responsive UI with Tailwind CSS and DaisyUI
- Toast notifications
- State management with Zustand

---

## Tech Stack

### Frontend

- **React** (v19)
- **Vite** (for fast development)
- **Tailwind CSS** & **DaisyUI** (UI styling)
- **React Router** (routing)
- **Axios** (API requests)
- **Socket.io-client** (real-time communication)
- **Zustand** (state management)
- **Lucide-react** (icons)
- **React Hot Toast** (notifications)

### Backend

- **Node.js** (Express)
- **MongoDB** (with Mongoose)
- **Socket.io** (real-time communication)
- **Cloudinary** (image upload)
- **JWT** (authentication)
- **Bcryptjs** (password hashing)
- **dotenv** (environment variables)
- **cookie-parser** (cookie handling)
- **CORS** (cross-origin requests)

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)
- Cloudinary account (for image uploads)

### Installation

#### 1. Clone the repository

```bash
git clone <your-repo-url>
cd chat-system
```

#### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5001
```

Start the backend server:

```bash
npm run dev
```

#### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## Scripts

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

### Backend

- `npm run dev` - Start backend with nodemon

---

## Dependencies

### Frontend

- axios
- daisyui
- lucide-react
- react
- react-dom
- react-hot-toast
- react-router
- socket.io-client
- zustand

#### Dev Dependencies

- @eslint/js
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- autoprefixer
- eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- globals
- postcss
- tailwindcss
- vite

### Backend

- bcryptjs
- cloudinary
- cookie-parser
- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- socket.io

#### Dev Dependencies

- nodemon

---

## License

MIT
