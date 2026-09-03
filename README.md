# 🍔 CLJ Food Order

CLJ Food Order is a full-stack food ordering web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It includes a customer-facing frontend for browsing and ordering food, a Node/Express backend API connected to MongoDB, and a separate admin panel for managing orders, menu items, and restaurant data.

## 📌 About

The project is structured into three independent modules — **frontend**, **backend**, and **admin** — each with its own dependencies and run commands, allowing them to be developed and deployed separately.

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Admin Panel:** Vite.js
* **Architecture:** MERN (MongoDB, Express, React, Node)

## 📂 Project Structure
CLJ-Food-Order/
├── frontend/ # React.js customer-facing web app
├── backend/ # Node.js + Express.js API server with MongoDB
└── admin/ # Vite.js admin dashboard


## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <[repository-url](https://github.com/val23-cloud/completeclj.git)>
```

### 2. Frontend Setup (React.js)

```bash
cd frontend
npm i
npm start
```

### 3. Backend Setup (Node.js + Express.js + MongoDB)

```bash
cd backend
npm i
node .\index.js
```

> Make sure MongoDB is running and your connection string / environment variables (e.g. `.env` with `MONGO_URI`) are configured before starting the backend.

### 4. Admin Panel Setup (Vite.js)

```bash
cd admin
npm i
npm run dev
```

## ⚙️ Prerequisites

* Node.js and npm installed
* MongoDB instance (local or cloud, e.g. MongoDB Atlas)

## 🎯 Features

* Browse and order food items through the customer web app
* Admin dashboard to manage menu items, orders, and restaurant data
* RESTful API backend connected to MongoDB for persistent data storage

## 📄 License

This project is open for personal and educational use. Add a license file if you plan to distribute or open-source it publicly.

---

**Project:** CLJ Food Order
**Stack:** MongoDB • Express.js • React.js • Node.js • Vite.js
