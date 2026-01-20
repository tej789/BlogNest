# 📝 BlogNest – Full Stack Blogging Platform

BlogNest is a **full-stack MERN blogging platform** where users can create, publish, manage, and explore blogs across multiple categories.
It is designed with **real-world features**, clean architecture, and scalable backend APIs, making it ideal for **learning, deployment, and placement interviews**.

---

## 🚀 Features

### 👤 User Features

* User Registration & Login (JWT Authentication)
* Secure session handling using **HTTP-only cookies**
* View blogs by category
* View trending blogs and popular authors
* User profile management

### ✍️ Author Features

* Create, update, and delete blogs
* Upload blog images using **Cloudinary**
* Dashboard to manage personal blogs
* Track blog activity

### 🛠️ Admin / Backend Features

* RESTful API architecture
* Role-based access control
* Centralized error handling
* Secure authentication & authorization
* MongoDB schema validation with Mongoose

---

## 🧑‍💻 Tech Stack

### Frontend

* **React.js** (Vite)
* React Router
* Axios
* CSS / Responsive Design

### Backend

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* JWT Authentication
* Cloudinary (Image Storage)

### Tools & Utilities

* dotenv
* express-fileupload
* cookie-parser
* cors

---

## 📁 Project Structure

```
BlogNest-main/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
├── .gitattributes
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
JWT_EXPIRES=7d
COOKIE_EXPIRE=7

CLOUDINARY_CLIENT_NAME=your_cloudinary_name
CLOUDINARY_CLIENT_API=your_cloudinary_api_key
CLOUDINARY_CLIENT_SECRET=your_cloudinary_secret
```

⚠️ **Do not push `.env` file to GitHub**

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/BlogNest.git
cd BlogNest-main
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Server will run on:
`http://localhost:4000`

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:
`http://localhost:5173`

---

## 🔐 Authentication Flow

* JWT token generated on login
* Stored securely in cookies
* Protected routes handled using middleware
* Role-based access for blog operations

---

## 📦 Deployment Ready

* Environment-based configuration
* MongoDB Atlas supported
* Can be deployed on:

  * Render / Railway (Backend)
  * Vercel / Netlify (Frontend)

---

## 🎯 Why BlogNest? (Interview Value)

✅ Real-world MERN project
✅ Clean MVC architecture
✅ JWT & security best practices
✅ Easy to explain in interviews
✅ Scalable & production-ready

---

## 👨‍💻 Author

**Tej**
Full Stack Developer (MERN)
📌 Built for learning, deployment, and placements

---

## 📜 License

This project is licensed under the **MIT License**.
