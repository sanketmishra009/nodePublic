# User Authentication API Documentation

This document provides a detailed explanation of the `/users/register` and `/users/login` API endpoints. These endpoints are part of the user authentication system.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Endpoints Overview](#endpoints-overview)
  - [/users/register](#usersregister)
  - [/users/login](#userslogin)
- [File Structure](#file-structure)

---

## Prerequisites

Ensure the following environment variables are set up in your `.env` file:

- `DB_CONNECT`: Connection string for the MongoDB database.
- `JWT_SECRET`: Secret key for generating JSON Web Tokens.

Run the server after installing the dependencies:

```bash
npm install
npm start
```

---

## Endpoints Overview

### `/users/register`

**Method:** POST  
**Description:** This endpoint registers a new user by accepting their personal details and credentials.

#### Input

The request body must include the following JSON structure:

```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string"
}
```

**Validation Rules:**

- `email`: Must be a valid email address.
- `fullname.firstname`: Must have a minimum length of 3 characters.
- `password`: Must have a minimum length of 6 characters.

#### Output

- **Success (201):**  
  Returns the user's information and a generated authentication token.
  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "createdAt": "string"
    }
  }
  ```
- **Error (400):**
  - Missing or invalid fields.
  - User already exists.

---

### `/users/login`

**Method:** POST  
**Description:** This endpoint authenticates an existing user with their credentials.

#### Input

The request body must include the following JSON structure:

```json
{
  "email": "string",
  "password": "string"
}
```

**Validation Rules:**

- `email`: Must be a valid email address.
- `password`: Must have a minimum length of 6 characters.

#### Output

- **Success (200):**  
  Returns the user's information and a generated authentication token.
  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "createdAt": "string"
    }
  }
  ```
- **Error (401):**
  - Invalid email or password.

---

## File Structure

- **dbConnect.js**  
  Establishes the connection to the MongoDB database.  
  **Key Method:** `connectTodb()`

- **user.model.js**  
  Defines the schema for the `User` model, including methods for password hashing and token generation.  
  **Key Methods:**

  - `hashPassword(password)`: Hashes the user's password.
  - `comparePassword(password)`: Compares hashed passwords.
  - `generateAuthToken()`: Generates a JWT token.

- **user.service.js**  
  Contains business logic for creating new users.  
  **Key Method:** `createUser(userCredentials)`

- **user.controller.js**  
  Handles requests and responses for user-related operations.  
  **Key Methods:**

  - `registerUser(req, res)`: Handles user registration.
  - `loginUser(req, res)`: Handles user login.

- **user.route.js**  
  Defines the API routes and applies validation for `/users/register` and `/users/login`.

---

**Author:**  
Generated with ❤️ by Sanket Mishra
