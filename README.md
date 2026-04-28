# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Overview

This project is a full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS. It allows users to view property listings, explore detailed information, and create new listings.

This is an early-stage implementation focusing on core backend functionality and server-side rendering.

---

## 🚀 Features Implemented

* 📋 View all listings (Index Route)
* 🔍 View detailed information for a single listing (Show Route)
* ➕ Create a new listing (Form + POST request)
* 🗄️ MongoDB integration using Mongoose
* 🧠 Dynamic rendering using EJS templates
* 🔗 RESTful routing (GET & POST requests)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Templating Engine:** EJS
* **Frontend:** HTML, CSS (basic)

---

## 📂 Project Structure

```
AirBNB/
│
├── models/
│   └── listings.js        # Mongoose schema
│
├── init/                  # Database initialization scripts
│
├── views/
│   └── listing/
│       ├── index.ejs      # Show all listings
│       ├── showInfo.ejs   # Show single listing details
│       ├── createNew.ejs  # Create new listing form
│
├── app.js                 # Main server file
```

---

## 🔄 Routes Implemented

| Method | Route           | Description               |
| ------ | --------------- | ------------------------- |
| GET    | `/listings`     | Show all listings         |
| GET    | `/listings/:id` | Show details of a listing |
| POST   | `/listings`     | Create a new listing      |

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
cd AirBNB
```

2. Install dependencies:

```bash
npm install
```

3. Start MongoDB (locally or Atlas)

4. Run the app:

```bash
node app.js
```

5. Open in browser:

```
http://localhost:8080/listings
```

---

## ⚠️ Current Limitations

* No update/edit functionality yet
* No delete functionality
* No authentication or authorization
* Basic UI (not styled fully)
* No validation or error handling

---

## 🚧 Future Improvements

* ✏️ Edit & Delete listings (Full CRUD)
* 🔐 User authentication (Login/Signup)
* ⭐ Reviews and ratings system
* 📸 Image uploads (Cloudinary)
* 🎨 Improved UI/UX
* ⚡ API-based architecture

---

## 💡 Learning Outcomes

* Understanding RESTful routing
* Working with MongoDB & Mongoose
* Server-side rendering using EJS
* Handling GET and POST requests in Express

---

## 👨‍💻 Author

Ishaan Bansal

