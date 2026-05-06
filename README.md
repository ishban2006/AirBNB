# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Project Overview

This project is a full-stack Airbnb-inspired web application built using **Node.js, Express.js, MongoDB, and EJS** with server-side rendering.

The application currently supports complete CRUD functionality for property listings:

* Users can view all listings
* Explore detailed information about individual listings
* Create new listings
* Edit and update existing listings
* Delete listings from the database

MongoDB is used for database management with Mongoose for schema modeling and database interaction.
The frontend is rendered dynamically using EJS templates with reusable layouts and components.

The project also includes:

* Reusable navbar and footer components using EJS includes
* Shared boilerplate layout for consistent UI structure
* Custom CSS styling
* RESTful routing architecture
* Organized folder structure for scalability and maintainability

---

## 🚀 Features Implemented

* 📋 View all property listings
* 🔍 Detailed listing page
* ➕ Create new listing
* ✏️ Edit existing listing
* ❌ Delete listing
* 🧠 Dynamic EJS rendering
* ♻️ Reusable layouts and partials
* 🎨 Custom styling with CSS
* 🔗 RESTful CRUD routes

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Templating Engine:** EJS
* **Frontend:** HTML, CSS

---

## 📂 Project Structure

```id="projectStruct"
AIRBNB/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listings.js
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── includes/
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listing/
│       ├── index.ejs
│       ├── showInfo.ejs
│       ├── createNew.ejs
│       └── editInfo.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔄 Routes Implemented

| Method | Route                | Description                |
| ------ | -------------------- | -------------------------- |
| GET    | `/listings`          | Show all listings          |
| GET    | `/listings/:id`      | Show details of a listing  |
| GET    | `/listings/new`      | Render create listing form |
| POST   | `/listings`          | Create a new listing       |
| GET    | `/listings/:id/edit` | Render edit form           |
| PUT    | `/listings/:id`      | Update listing             |
| DELETE | `/listings/:id`      | Delete listing             |

---

## ⚙️ Setup Instructions

1. Clone the repository

```bash id="cloneCmd"
git clone <your-repository-link>
cd AIRBNB
```

2. Install dependencies

```bash id="installCmd"
npm install
```

3. Start MongoDB locally

4. Run the application

```bash id="runCmd"
node app.js
```

5. Open in browser

```id="browserCmd"
http://localhost:8080/listings
```

---

## 🚧 Future Improvements

* 🔐 User Authentication & Authorization
* ⭐ Reviews and Ratings
* 📸 Cloudinary Image Uploads
* 🎨 Fully Responsive UI
* 🌐 Deployment
* 🗺️ Maps & Geolocation Integration

---

## 👨‍💻 Author

**Ishaan Bansal**
