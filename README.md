# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Overview

This project is a full-stack web application inspired by Airbnb, built using Node.js, Express, MongoDB, and EJS. It allows users to view listings, explore detailed information, and perform full CRUD operations on listings.

---

## 🚀 Features Implemented

* 📋 View all listings (Index)
* 🔍 View detailed information of a listing (Show)
* ➕ Create a new listing (Create)
* ✏️ Edit existing listings (Update)
* ❌ Delete listings (Delete)
* 🗄️ MongoDB integration using Mongoose
* 🧠 Dynamic rendering using EJS
* 🔗 RESTful routing (GET, POST, PUT, DELETE)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Templating Engine:** EJS
* **Frontend:** HTML, CSS

---

## 📂 Project Structure

```id="struct2"
AirBNB/
│
├── models/
│   └── listings.js
│
├── init/
│   ├── data.js
│   └── index.js
│
├── views/
│   └── listing/
│       ├── index.ejs
│       ├── showInfo.ejs
│       ├── createNew.ejs
│       ├── editInfo.ejs
│
├── app.js
├── package.json
└── README.md
```

---

## 🔄 Routes Implemented

| Method | Route                | Description                 |
| ------ | -------------------- | --------------------------- |
| GET    | `/listings`          | Display all listings        |
| GET    | `/listings/:id`      | Display single listing      |
| GET    | `/listings/new`      | Show form to create listing |
| POST   | `/listings`          | Create new listing          |
| GET    | `/listings/:id/edit` | Show edit form              |
| PUT    | `/listings/:id`      | Update listing              |
| DELETE | `/listings/:id`      | Delete listing              |

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash id="setup1"
git clone <your-repo-link>
cd AirBNB
```

2. Install dependencies:

```bash id="setup2"
npm install
```

3. Start MongoDB locally or use MongoDB Atlas

4. Run the application:

```bash id="setup3"
node app.js
```

5. Open in browser:

```id="setup4"
http://localhost:8080/listings
```

---

## ⚠️ Current Limitations

* No authentication (login/signup)
* No image upload (only URL-based images)
* Basic UI (not fully styled)
* Minimal validation and error handling

---

## 🚧 Future Improvements

* 🔐 Authentication & Authorization
* ⭐ Reviews and ratings system
* 📸 Image uploads (Cloudinary)
* 🎨 Improved UI/UX (responsive design)
* ⚡ API-based architecture

---

## 💡 Learning Outcomes

* RESTful routing (GET, POST, PUT, DELETE)
* CRUD operations using MongoDB & Mongoose
* Server-side rendering using EJS
* Handling form data and dynamic routing

---

## 👨‍💻 Author

Ishaan Bansal
