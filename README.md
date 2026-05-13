# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Project Overview

This is a full-stack Airbnb-inspired web application built using **Node.js, Express.js, MongoDB, Mongoose, EJS, and CSS**.

The application currently supports complete CRUD (Create, Read, Update, Delete) functionality for property listings, allowing users to browse listings, view detailed information, create new entries, edit existing listings, and remove listings from the database.

The backend is built using **Express.js** with **MongoDB** as the database and **Mongoose** for schema modeling and database interactions. The frontend uses **EJS templating** for server-side rendering with reusable layouts and partial components.

This project follows a modular folder structure for maintainability and scalability.

---

## 🚀 Features Implemented

### Core Functionality
- View all property listings
- View complete details of a single listing
- Create new property listings
- Edit existing listings
- Delete listings with confirmation popup

### Backend Features
- RESTful routing architecture
- Dynamic route parameters
- Express server setup
- MongoDB integration using Mongoose
- Schema-based data modeling
- Database seeding with sample data
- Method override for PUT and DELETE requests

### Frontend Features
- Dynamic server-side rendering using EJS
- Reusable navbar and footer components
- Shared boilerplate layout template
- Custom CSS styling
- Styled listing detail page
- Styled edit listing page
- Delete confirmation dialog for safer actions

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- HTML
- CSS
- EJS

### Tools & Packages
- method-override
- ejs-mate
- nodemon

---

## 📂 Project Structure

```text
AIRBNB/
│
├── init/
│   ├── data.js              # Sample listing data
│   └── index.js             # Database initialization script
│
├── models/
│   └── listings.js          # Mongoose schema/model
│
├── public/
│   └── css/
│       └── style.css        # Custom styling
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs       # Reusable navbar
│   │   └── footer.ejs       # Reusable footer
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs  # Common page layout
│   │
│   └── listing/
│       ├── index.ejs        # All listings page
│       ├── showInfo.ejs     # Single listing details
│       ├── createNew.ejs    # Create listing form
│       └── editInfo.ejs     # Edit listing form
│
├── app.js                   # Main application server
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔄 Routes Implemented

| Method | Route | Description |
|--------|------|-------------|
| GET | `/listings` | Display all listings |
| GET | `/listings/new` | Show form to create a new listing |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Show detailed listing info |
| GET | `/listings/:id/edit` | Show edit form |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-github-repo-link>
cd AIRBNB
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

---

### 4. Seed sample data (optional)

```bash
node init/index.js
```

---

### 5. Start the application

```bash
node app.js
```

For development:

```bash
npx nodemon app.js
```

---

### 6. Open in browser

```text
http://localhost:8080/listings
```

---

## 📚 Concepts Practiced

This project helped in learning and implementing:

- CRUD operations
- RESTful routing
- Express middleware
- Dynamic routing
- Route parameters
- Form handling
- Template rendering with EJS
- Layouts and partials
- MongoDB database operations
- Mongoose schema design
- Method override
- Project folder structuring

---

## 🚧 Planned Features

Future improvements planned:

- User authentication (Signup/Login/Logout)
- Authorization (only owners can edit/delete)
- Reviews and ratings system
- Image upload using Cloudinary
- Search functionality
- Listing filters
- Wishlist / Favorites
- Interactive maps integration
- Booking system
- Payment integration
- Responsive UI improvements
- Flash success/error messages

---

## 👨‍💻 Author

**Ishaan Bansal**

---

## 🌟 Project Status

Currently under active development 🚀