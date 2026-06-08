# WanderLust

A full-stack Airbnb-inspired web application built with Node.js, Express.js, MongoDB, EJS, Bootstrap, and Passport.js.

## What it does

### Explore Listings

Browse rental properties with images, descriptions, locations, and pricing details.

### Manage Listings

Authenticated users can create, edit, and delete their own listings through an intuitive interface.

### Reviews & Ratings

Users can leave ratings and reviews on listings, view feedback from others, and remove reviews when required.

### Authentication & Authorization

Secure user registration, login, logout, session management, and route protection using Passport.js.

### Validation & Error Handling

Both client-side and server-side validation ensure reliable data entry while centralized error handling improves application stability.

---

## Tech Stack

| Layer | Technology |
|---------|------------|
| Frontend | EJS, Bootstrap |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | Passport.js, Passport-Local |
| Validation | Joi |
| Sessions | Express-Session |
| Flash Messages | Connect-Flash |
| Templating | EJS-Mate |

---

## Features

- User Signup, Login & Logout
- Authentication using Passport.js
- Create, Read, Update & Delete Listings
- Add and Delete Reviews
- Listing-Review Relationships
- Route Authorization & Protected Actions
- Joi Validation
- Flash Messages
- Custom Error Handling
- Responsive UI with Bootstrap

---

## Installation

Clone the repository:

```bash
git clone https://github.com/ishban2006/AirBNB.git
cd AirBNB
```

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

or

```bash
node app.js
```

Visit:

```text
http://localhost:8080
```

---

## Project Structure

```text
AirBNB/
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
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listing/
│   └── user/
│
├── public/
├── utility/
├── init/
│
├── app.js
├── middleware.js
├── schema.js
├── package.json
└── README.md
```

---

## The Problem We're Solving

Finding, managing, and reviewing rental properties should be simple.

WanderLust provides a clean and intuitive platform where users can:

- Discover unique rental listings
- Share experiences through reviews and ratings
- Manage property information securely
- Access personalized features through authentication

The goal is to create a seamless property discovery experience while maintaining data integrity, security, and usability.

---

Built by **Ishaan Bansal**