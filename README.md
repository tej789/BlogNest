# BlogNest
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

