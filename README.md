# Airbnb Clone Project

## 📌 Overview

A full-stack Airbnb-style web application built using Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap.

Users can create, view, edit, and delete property listings through a responsive interface following RESTful routing principles.

---

# ✨ Features

* CRUD operations for listings
* Responsive UI using Bootstrap
* Dynamic EJS templating
* Reusable layouts and partials
* Client-side validation using Bootstrap
* Server-side validation using Joi
* Custom error handling middleware
* Async wrapper for handling route errors
* Method override for PUT and DELETE requests
* MongoDB integration using Mongoose

---

# ⚠️ Error Handling

* Custom Express error class
* Centralized error middleware
* Joi validation errors
* Mongoose validation errors
* Custom error page (`error.ejs`)

---

# 📂 Project Structure

```text id="pl3my0"
AIRBNB
│
├── models/
├── public/
│   ├── css/
│   └── js/
├── utility/
├── views/
│   ├── includes/
│   ├── layouts/
│   └── listing/
│
├── app.js
├── schema.js
└── README.md
```

---

# 🛠️ Tech Stack

## Frontend

* HTML
* CSS
* Bootstrap
* EJS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Validation & Utilities

* Joi
* Method-Override
* EJS-Mate

---

# 🚀 Run Project

## Install Dependencies

```bash id="d6vjlwm"
npm install
```

## Start Server

```bash id="o8jlwm"
npm run dev
```

or

```bash id="njlwm7"
nodemon app.js
```

---

# 📌 Author

**Ishaan Bansal**
DTU CSE Student
