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
npx nodemon app.js
```

Visit:

```text
http://localhost:8080
```

## Features

* Create, Read, Update, Delete (CRUD) listings
* Add and manage reviews & ratings
* Client-side form validation
* Server-side Joi validation
* Custom error handling
* Async error wrappers
* Responsive Bootstrap UI
* MongoDB database integration
* Review-listing relationship using Mongoose references

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

Built by Ishaan Bansal
