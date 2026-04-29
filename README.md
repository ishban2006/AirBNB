# 🏡 Airbnb Clone (Full Stack Project)

## 📌 Overview

This project is a full-stack Airbnb-inspired web application built using Node.js, Express, MongoDB, and EJS. It supports full CRUD operations for property listings and uses server-side rendering with reusable layouts and components.

---

## 🚀 Features Implemented

* 📋 View all listings (Index Page)
* 🔍 View detailed listing information (Show Page)
* ➕ Create new listings (Create)
* ✏️ Edit existing listings (Update)
* ❌ Delete listings (Delete)
* 🧠 Dynamic rendering using EJS
* ♻️ Reusable components (Navbar & Footer)
* 🧱 Layout system using EJS boilerplate
* 🎨 Basic styling with custom CSS
* 🔗 RESTful routing (GET, POST, PUT, DELETE)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Templating Engine:** EJS
* **Frontend:** HTML, CSS

---

## 📂 Project Structure

```id="struct3"
AirBNB/
│
├── models/
│   └── listings.js
│
├── init/
│   ├── data.js
│   └── index.js
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

## 🧩 EJS Architecture

* **Layouts:** Shared structure using `boilerplate.ejs`
* **Includes:** Reusable components like navbar and footer
* **Views:** Dynamic pages rendered with data from MongoDB

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash id="setupA"
git clone <your-repo-link>
cd AirBNB
```

2. Install dependencies:

```bash id="setupB"
npm install
```

3. Start MongoDB (locally or via Atlas)

4. Run the app:

```bash id="setupC"
node app.js
```

5. Open in browser:

```id="setupD"
http://localhost:8080/listings
```

---

## ⚠️ Current Limitations

* No authentication system
* No image upload (URL-based only)
* Basic UI styling
* Limited validation & error handling

---

## 🚧 Future Improvements

* 🔐 Authentication & Authorization
* ⭐ Reviews & Ratings
* 📸 Image upload (Cloudinary)
* 🎨 Advanced UI/UX (responsive design)
* 🌐 Deployment (Render / Vercel / Railway)

---

## 💡 Learning Outcomes

* RESTful routing and CRUD operations
* MVC-like project structuring
* EJS templating with layouts and partials
* MongoDB integration with Mongoose

---

## 👨‍💻 Author

Ishaan Bansal
