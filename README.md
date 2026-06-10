# WanderLust - Airbnb Inspired Property Rental Platform

A full-stack property rental platform inspired by Airbnb where users can explore destinations, create and manage listings, upload property images, and share reviews. The application focuses on secure authentication, role-based authorization, image management, and a seamless user experience.

## Features

### Authentication & Authorization

* User Signup, Login, and Logout using Passport.js
* Session-based authentication with Express Session
* MongoDB Atlas session storage using Connect-Mongo
* Protected routes for authenticated users
* Role-based authorization for listings and reviews

### Listing Management

* Create, edit, view, and delete property listings
* Search listings by country, location, title, and maximum price
* Image upload support using Multer
* Cloudinary integration for cloud image storage
* Automatic replacement and deletion of old images

### Reviews & Ratings

* Add ratings and reviews to listings
* Prevent duplicate reviews from the same user
* Restrict listing owners from reviewing their own listings
* Review ownership validation for deletion

### Validation & Error Handling

* Server-side validation using Joi
* Centralized error handling middleware
* Flash messages for success and error notifications
* Custom Express error handling

### Architecture

* MVC (Model-View-Controller) architecture
* Modular route and controller structure
* Reusable middleware implementation

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

## Installation

1. Clone the repository

```bash
git clone https://github.com/ishban2006/AirBNB.git
cd AirBNB
```

2. Install dependencies

```bash
npm install
```

3. Create a .env file

```env
MONGOATLAS_DB_URL=your_mongodb_atlas_url
SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

4. Start the development server

```bash
npm run dev
```

## Key Learnings

* Authentication and session management using Passport.js
* MongoDB Atlas integration and cloud database deployment
* Image upload and cloud storage with Cloudinary
* MVC architecture and scalable project structure
* Middleware design and authorization patterns
* Server-side validation and centralized error handling

## Future Improvements

* Interactive maps integration
* Property categories and filters
* Booking functionality
* Wishlist/Favorites system
* Payment gateway integration
* Responsive image galleries
