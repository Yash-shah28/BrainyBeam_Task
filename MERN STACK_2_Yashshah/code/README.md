# 🔒 Protected Routes with Authentication (React + Node.js + JWT)

This project demonstrates how to implement **protected routes** that require authentication to access, using **React.js (with React Router)** on the frontend and **Node.js + Express + JWT** on the backend. It secures both frontend pages and backend APIs, ensuring only authenticated users can access restricted resources.

---

## 🚀 Features

- ✅ React Router v6 for client-side routing.
- ✅ PrivateRoute component to protect frontend routes.
- ✅ JWT-based authentication (token issued on login, verified on requests).
- ✅ Node.js + Express backend with protected API endpoints.
- ✅ Middleware to verify JWT tokens and restrict unauthorized API access.
- ✅ Secure password hashing using `bcryptjs`.
- ✅ Token expiry support.
- ✅ Clean and modular code structure.

---


### Setup .env file

```bash
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development

CLIENT_URL= http://localhost:5173
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```

### I'll see you in the next one! 🚀
