# User Authentication API Documentation

This document provides a detailed explanation of the `/users/register`, `/users/login`, `/users/profile`, and `/users/logout` API endpoints. These endpoints are part of the user authentication system.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Endpoints Overview](#endpoints-overview)
  - [/users/register](#usersregister)
  - [/users/login](#userslogin)
  - [/users/profile](#usersprofile)
  - [/users/logout](#userslogout)
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

### `/users/profile`

**Method:** GET  
**Description:** Retrieves the profile information of the currently authenticated user.

#### Input

- No request body is required.
- Requires an authentication token to be provided in the request headers or cookies.

**Headers:**

- `Authorization: Bearer <access_token>`

#### Output

- **Success (200):**  
  Returns the user's profile information.

  ```json
  {
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
  Unauthorized access due to a missing or invalid token.

---

### `/users/logout`

**Method:** GET  
**Description:** Logs out the currently authenticated user by invalidating their session token.

#### Input

- No request body is required.
- Requires an authentication token to be provided in the request headers or cookies.

**Headers:**

- `Authorization: Bearer <access_token>`

#### Output

- **Success (200):**  
  Confirms that the user has been successfully logged out.

  ```json
  {
    "message": "Logged <user_email> out successfully!"
  }
  ```

- **Error (401):**  
  Unauthorized access due to a missing or invalid token.

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
  - `getUserProfile(req, res)`: Retrieves the user's profile information.
  - `logoutUser(req, res)`: Logs out the user.

- **user.route.js**  
  Defines the API routes and applies validation for `/users/register`, `/users/login`, `/users/profile`, and `/users/logout`.

---

**Author:**  
Generated with ❤️ by Sanket Mishra
