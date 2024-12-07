# `/users/register` Endpoint Documentation

## Overview

The `/users/register` endpoint is used for user registration. It validates the input, checks for duplicate users, securely stores passwords, and generates an authentication token upon successful registration.

---

## **Endpoint**

**URL:** `/users/register`  
**Method:** `POST`

---

## **Input Format**

### Request Body

The request body should contain the following JSON payload:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Validation Rules

- **`fullname.firstname`**
  - Must be at least 3 characters long.
- **`email`**
  - Must be a valid email format.
- **`password`**
  - Must be at least 6 characters long.

---

## **Operations**

1. **Validation**  
   The input data is validated using the `express-validator` library. If validation fails, a `400 Bad Request` is returned with error details.

2. **Duplicate Check**  
   The endpoint checks the database to ensure that the email is not already registered. If a duplicate is found, a `400 Bad Request` is returned with a message: `"User already exists"`.

3. **Password Hashing**  
   The password is hashed using `bcrypt` before being stored in the database.

4. **User Creation**  
   The user is saved to the MongoDB database with additional metadata such as `createdAt`.

5. **Token Generation**  
   An authentication token is generated using `jsonwebtoken` and returned along with user details.

6. **Response**  
   On successful registration, the endpoint returns:
   ```json
   {
     "token": "your-auth-token",
     "user": {
       "fullname": {
         "firstname": "John",
         "lastname": "Doe"
       },
       "email": "john.doe@example.com",
       "createdAt": "2024-12-07T12:00:00Z"
     }
   }
   ```

---

## **Files and Their Roles**

### **1. `user.route.js`**

- Defines the `/register` endpoint and applies input validation rules.
- Calls the `registerUser` function from the controller to handle the registration logic.

### **2. `user.controller.js`**

- Handles the main logic for registration:
  - Validates inputs.
  - Checks for existing users.
  - Interacts with `user.service.js` to create a user.
  - Generates the authentication token.

### **3. `user.service.js`**

- Encapsulates the business logic for user creation.
- Interacts with the `user.model.js` to insert user data into the database.

### **4. `user.model.js`**

- Defines the Mongoose schema for the `User` collection in MongoDB.
- Includes methods for:
  - Password hashing (`hashPassword`).
  - Token generation (`generateAuthToken`).
  - Password comparison (`comparePassword`).

### **5. `dbConnect.js`**

- Establishes the connection to the MongoDB database using Mongoose.

---

## **Environment Variables**

- `DB_CONNECT`: MongoDB connection string.
- `JWT_SECRET`: Secret key for token generation.

---

## **Errors and Responses**

### Validation Error

**Status:** `400 Bad Request`  
**Example Response:**

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
```

### Duplicate User

**Status:** `400 Bad Request`  
**Example Response:**

```json
{
  "message": "User already exists"
}
```

---

## **Dependencies**

- `express-validator`: For input validation.
- `bcrypt`: For password hashing.
- `jsonwebtoken`: For token generation.
- `mongoose`: For database operations.

---

## **How to Run**

1. Set up environment variables (`DB_CONNECT`, `JWT_SECRET`).
2. Ensure MongoDB is running and connected.
3. Start the server:
   ```bash
   node server.js
   ```
4. Test the endpoint using tools like Postman or cURL.
