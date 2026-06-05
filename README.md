# WanderLust

A full-stack Airbnb-inspired listing platform built with Node.js, Express, MongoDB, EJS, and Bootstrap.

## What it does

### Explore Listings

Browse properties with detailed information including images, location, pricing, and descriptions.

### Create & Manage Listings

Add, edit, and delete listings through a simple and responsive interface.

### Reviews & Ratings

Users can submit ratings and reviews for listings, view feedback from other users, and delete reviews when needed.

### Data Validation

Client-side validation using Bootstrap and server-side validation using Joi ensure reliable and secure data handling.

### Error Handling

Custom error classes, centralized error middleware, and async wrappers provide robust error management throughout the application.

## Stack

| Layer      | Tech                      |
| ---------- | ------------------------- |
| Frontend   | EJS, Bootstrap            |
| Backend    | Node.js, Express.js       |
| Database   | MongoDB, Mongoose         |
| Validation | Joi, Bootstrap Validation |
| Templating | EJS-Mate                  |
| Utilities  | Method-Override           |

## Setup

```bash
git clone <repository-url>
cd AirBNB
npm install
```

Run:

```bash
npm run dev
```

Visit:

```text
http://localhost:8080
```

## Features

- Create, edit, view, and delete listings
- Add and manage reviews
- Joi and Bootstrap validation
- Custom error handling
- Responsive design
- MongoDB-powered backend

## Project Structure

```text
models/
views/
public/
utility/

app.js
middleware.js
schema.js
```

## The Problem We're Solving

Most property listing platforms focus only on displaying listings. WanderLust goes beyond that by creating a complete rental discovery experience where users can browse properties, manage listings, and share reviews in one place.

By combining listing management, reviews & ratings, validation, and robust error handling, the platform delivers a reliable and user-friendly experience for both property owners and visitors.
