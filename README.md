# WanderLust - Airbnb Inspired Property Rental Platform

A full-stack property rental platform inspired by Airbnb where users can explore destinations, create and manage listings, upload property images, and share reviews. The application focuses on secure authentication, role-based authorization, image management, and a seamless user experience.

---

## Live Demo

* 🌐 **Live Application:** https://airbnb-ib-project.onrender.com

---

## Features

### Authentication & Authorization

* User Signup, Login, and Logout using Passport.js
* Session-based Authentication with Express Session
* MongoDB Atlas Session Storage using Connect-Mongo
* Protected Routes for Authenticated Users
* Role-based Authorization for Listings and Reviews

### Listing Management

* Create, Edit, View, and Delete Property Listings
* Search Listings by Country, Location, Title, and Maximum Price
* Image Upload Support using Multer
* Cloudinary Integration for Cloud Image Storage
* Automatic Replacement and Deletion of Old Images

### Reviews & Ratings

* Add Ratings and Reviews to Listings
* Prevent Duplicate Reviews from the Same User
* Restrict Listing Owners from Reviewing Their Own Listings
* Review Ownership Validation for Deletion

### Validation & Error Handling

* Server-side Validation using Joi
* Centralized Error Handling Middleware
* Flash Messages for Success and Error Notifications
* Custom Express Error Handling

### Architecture

* MVC (Model-View-Controller) Architecture
* Modular Route and Controller Structure
* Reusable Middleware Implementation

---

## Tech Stack

### Frontend

* EJS
* Bootstrap 5
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication & Security

* Passport.js
* Passport-Local
* Express Session
* Connect-Mongo

### Media Storage

* Cloudinary
* Multer
* Multer Storage Cloudinary

### Validation

* Joi

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/ishban2006/AirBNB.git
cd AirBNB
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root.

```env
MONGOATLAS_DB_URL=your_mongodb_atlas_url
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Run the Application

```bash
npm run dev
```

---

## Screenshots

Add screenshots or GIFs here:

* Home Page
* Property Listing Page
* Listing Details
* Create/Edit Listing
* Search Results
* User Authentication
* Reviews Section

---

## Key Learnings

* Authentication and Session Management using Passport.js
* MongoDB Atlas Integration and Cloud Database Deployment
* Image Upload and Cloud Storage with Cloudinary
* MVC Architecture and Scalable Project Structure
* Middleware Design and Authorization Patterns
* Server-side Validation and Centralized Error Handling

---

## Future Improvements

* Interactive Maps Integration
* Property Categories and Advanced Filters
* Booking and Reservation System
* Wishlist/Favorites
* Payment Gateway Integration
* User Profile Management
* Responsive Image Galleries

---

## Author

**Ishaan Bansal**
