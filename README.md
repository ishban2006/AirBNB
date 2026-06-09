# WanderLust

A full-stack Airbnb-inspired property listing platform built using Node.js, Express.js, MongoDB, EJS, Bootstrap, and Passport.js.

## Features

### Explore Listings

Browse unique stays from around the world with detailed descriptions, images, locations, and pricing information.

### Create & Manage Listings

Authenticated users can:

* Create new listings
* Edit their own listings
* Delete their own listings

### Reviews & Ratings

Users can:

* Add reviews and ratings to listings
* View reviews left by other users
* Delete their own reviews
* Review a listing only once
* Cannot review their own listings

### Authentication & Authorization

Secure user authentication powered by Passport.js.

Features include:

* User Signup
* User Login
* User Logout
* Session Management
* Flash Messages
* Protected Routes
* Ownership Verification for Listings and Reviews

### Validation

Robust validation on both client and server sides.

* Bootstrap Validation (Frontend)
* Joi Validation (Backend)

### Error Handling

Custom centralized error handling using:

* Async wrappers
* Custom Express Error classes
* Error middleware

## Tech Stack

| Layer          | Technology                     |
| -------------- | ------------------------------ |
| Frontend       | EJS, Bootstrap 5               |
| Backend        | Node.js, Express.js            |
| Database       | MongoDB, Mongoose              |
| Authentication | Passport.js, Passport-Local    |
| Sessions       | Express-Session                |
| Validation     | Joi, Bootstrap Validation      |
| Templating     | EJS-Mate                       |
| Utilities      | Method-Override, Connect-Flash |

## Project Structure

```text
AirBNB/
│
├── config/
│   ├── db.js
│   ├── middleware.js
│   └── passport.js
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── expressRoutes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listings.js
│   ├── review.js
│   └── user.js
│
├── public/
│   ├── css/
│   └── js/
│
├── utility/
│   ├── expressError.js
│   └── wrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listing/
│   └── user/
│
├── app.js
├── schema.js
├── package.json
└── README.md
```

## MVC Architecture

The application follows the MVC (Model-View-Controller) design pattern.

### Models

Handle database schemas and interactions using Mongoose.

### Views

Render dynamic pages using EJS templates.

### Controllers

Contain all business logic and request handling.

### Routes

Handle endpoint definitions and delegate logic to controllers.

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd AirBNB
```

Install dependencies:

```bash
npm install
```

Start MongoDB and run the application:

```bash
npm start
```

For development:

```bash
npm run dev
```

Visit:

```text
http://localhost:8080
```

## Key Functionalities

* User Authentication
* Session Management
* Listing CRUD Operations
* Review CRUD Operations
* Ownership Authorization
* Flash Messages
* Joi Validation
* Custom Error Handling
* Responsive Design
* MVC Architecture

## Future Improvements

* Image Uploads with Cloudinary
* Search & Filtering
* Wishlist/Favorites
* Booking System
* Maps Integration
* User Profiles
* Pagination