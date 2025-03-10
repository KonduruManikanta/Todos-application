﻿# Todos-application



This Todo Application is a full-stack web application built with a React frontend and a Node.js/Express backend with an SQLite database. The application allows users to manage their daily tasks and profile, supporting CRUD operations on tasks and user profiles.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
5. [API Documentation](#api-documentation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Features

- **User Authentication**: Secure user sign-up, login, and logout.
- **Task Management**: Users can create, read, update, and delete (CRUD) tasks.
- **Status Tracking**: Users can mark tasks as "pending," "in progress," "completed," or "done."
- **Profile Management**: Users can update their profile information.
- **Responsive Design**: Optimized for all devices.

## Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express, SQLite
- **Database**: SQLite (for simplicity in development)
- **API Testing**: Postman

## Project Structure

```plaintext
todo-app/
├── backend/
│   ├── config/
│   │   └── db.js                   # Database connection configuration
│   ├── controllers/
│   │   ├── authController.js       # Handles authentication logic
│   │   ├── todoController.js       # Handles CRUD operations for todos
│   │   └── userController.js       # Handles profile management
│   ├── middleware/
│   │   └── authMiddleware.js       # Middleware for JWT validation
│   ├── models/
│   │   ├── Todo.js                 # Todo schema/model
│   │   └── User.js                 # User schema/model
│   ├── routes/
│   │   ├── authRoutes.js           # Routes for authentication
│   │   ├── todoRoutes.js           # Routes for todo management
│   │   └── userRoutes.js           # Routes for profile management
│   ├── .env                        # Environment variables
│   ├── server.js                   # Main server file
│   └── package.json                # Backend dependencies and scripts
└── frontend/
    ├── public/
    │   └── index.html              # Main HTML file for React
    ├── src/
    │   ├── components/
    │   │   ├── Auth/
    │   │   │   ├── Login.js        # Login form component
    │   │   │   └── Signup.js       # Signup form component
    │   │   ├── Todos/
    │   │   │   └── TodoList.js     # Main Todo list and task management
    │   │   └── Profile/
    │   │       └── Profile.js      # Profile management component
    │   ├── pages/
    │   │   ├── HomePage.js         # Homepage with Todos
    │   │   ├── LoginPage.js        # Login page
    │   │   ├── SignupPage.js       # Signup page
    │   │   └── ProfilePage.js      # Profile management page
    │   ├── services/
    │   │   ├── api.js              # API service for HTTP requests
    │   └── utils/
    │       └── token.js            # Helper for JWT token management
    ├── App.js                      # Main App component with routing
    └── package.json                # Frontend dependencies and scripts
```

## Getting Started

### Prerequisites

- **Node.js** (v12 or later)
- **npm** (Node package manager)

### Installation

1. **Clone the Repository**:
   
   git clone https://github.com/KonduruManikanta/todos-application.git
   cd todo-app
 

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up the environment variables:
     - Create a `.env` file in the backend folder and configure it as follows:
       ```plaintext
       PORT=5000
       JWT_SECRET=your_secret_key
       DATABASE_URL=sqlite::memory
       ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

### Running the Application

- **Backend**: Running at `http://localhost:5000`
- **Frontend**: Running at `http://localhost:3000`

## API Documentation

Below are key endpoints for testing via Postman or cURL:

### User Authentication

- **Signup**: `POST /api/auth/signup`
  - **Body**: `{ "username": "testuser", "email": "test@example.com", "password": "password123" }`
- **Login**: `POST /api/auth/login`
  - **Body**: `{ "email": "test@example.com", "password": "password123" }`

### Task Management

- **Create Task**: `POST /api/todos` (Authenticated)
  - **Body**: `{ "title": "New Task", "description": "Task description", "status": "pending" }`
- **Get All Tasks**: `GET /api/todos` (Authenticated)
- **Update Task**: `PUT /api/todos/:id` (Authenticated)
  - **Body**: `{ "title": "Updated Task", "status": "in progress" }`
- **Delete Task**: `DELETE /api/todos/:id` (Authenticated)

### User Profile

- **Get Profile**: `GET /api/users/profile` (Authenticated)
- **Update Profile**: `PUT /api/users/profile` (Authenticated)
  - **Body**: `{ "username": "updatedUser", "email": "updated@example.com" }`

## Usage

1. **Sign up or log in** to manage tasks.
2. **Add, view, update, or delete tasks** from the todo list.
3. **Update profile** information by navigating to the profile page.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License.

---

This README provides an overview of the Todo Application project, covering the setup, key features, and how to get started. Adjust paths or any specific instructions according to your setup if necessary.
