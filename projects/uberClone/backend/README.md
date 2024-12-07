---

```sh
# Navigate to the backend directory of the uberClone project
cd /Users/sanketmishra/Desktop/Desktop/code/node/uberClone/backend

# Create the README.md file and open it in VS Code for editing
cat <<EOL > README.md
# `/users/register` and `/users/login` Endpoint Documentation

## Introduction

The \`/users/register\` endpoint allows new users to create an account in the UberClone application. The \`/users/login\` endpoint allows existing users to log in to the application. These endpoints handle user registration and authentication by validating input data, creating a new user in the database, and generating an authentication token.

## Endpoint Description

### \`/users/register\`

- **URL:** \`/users/register\`
- **Method:** \`POST\`
- **Purpose:** Registers a new user with the provided credentials.

### \`/users/login\`

- **URL:** \`/users/login\`
- **Method:** \`POST\`
- **Purpose:** Authenticates an existing user with the provided credentials.

## Inputs

### \`/users/register\`

The endpoint expects the following JSON payload in the request body:

- \`fullname\`:
  - \`firstname\` (String, required): User's first name. Must be at least 3 characters long.
  - \`lastname\` (String, optional): User's last name.
- \`email\` (String, required): User's email address. Must be a valid email format and unique.
- \`password\` (String, required): User's password. Must be at least 6 characters long.

### Example Request Body for \`/users/register\`

\`\`\`json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
\`\`\`

### \`/users/login\`

The endpoint expects the following JSON payload in the request body:

- \`email\` (String, required): User's email address. Must be a valid email format.
- \`password\` (String, required): User's password. Must be at least 6 characters long.

### Example Request Body for \`/users/login\`

\`\`\`json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
\`\`\`

## Operations

### \`/users/register\`

1. **Validation**
   - Defined in [\`backend/routes/user.route.js\`](backend/routes/user.route.js).
   - Utilizes \`express-validator\` to ensure all required fields are provided and meet the specified criteria.
   - If validation fails, a \`400 Bad Request\` response is returned with error details.

2. **Check Existing User**
   - Handled in [\`backend/controllers/user.controller.js\`](backend/controllers/user.controller.js).
   - Checks if a user with the provided email already exists in the database using the \`userModel\`.

3. **Password Hashing**
   - Performed in [\`backend/models/user.model.js\`](backend/models/user.model.js).
   - Uses the \`hashPassword\` method to securely hash the user's password before storage.

4. **User Creation**
   - Managed by [\`backend/services/user.service.js\`](backend/services/user.service.js).
   - Creates a new user with the provided credentials and hashed password.
   - Records the creation time.

5. **Token Generation**
   - Executed in [\`backend/controllers/user.controller.js\`](backend/controllers/user.controller.js).
   - Generates an authentication token using the \`generateAuthToken\` method from the \`userModel\`.

6. **Response**
   - Upon successful registration, a \`201 Created\` response is sent back with the generated token and user information.

### \`/users/login\`

1. **Validation**
   - Defined in [\`backend/routes/user.route.js\`](backend/routes/user.route.js).
   - Utilizes \`express-validator\` to ensure all required fields are provided and meet the specified criteria.
   - If validation fails, a \`400 Bad Request\` response is returned with error details.

2. **Check User Credentials**
   - Handled in [\`backend/controllers/user.controller.js\`](backend/controllers/user.controller.js).
   - Checks if a user with the provided email exists in the database using the \`userModel\`.
   - If the user does not exist, a \`401 Unauthorized\` response is returned with a message: "Invalid email or password".

3. **Password Comparison**
   - Compares the provided password with the stored hashed password using the \`comparePassword\` method in the \`userModel\`.
   - If the passwords do not match, a \`401 Unauthorized\` response is returned with a message: "Invalid email or password".

4. **Token Generation**
   - Generates an authentication token using the \`generateAuthToken\` method from the \`userModel\`.

5. **Response**
   - Upon successful authentication, a \`200 OK\` response is sent back with the generated token and user information.

## Role of Each File

- **\`backend/routes/user.route.js\`:**
  - Defines the \`/register\` and \`/login\` routes.
  - Applies validation middleware to incoming requests.

- **\`backend/controllers/user.controller.js\`:**
  - Handles the logic for registering and logging in a user.
  - Validates input data.
  - Checks for existing users.
  - Calls the \`userService\` to create a new user.
  - Generates the authentication token.

- **\`backend/services/user.service.js\`:**
  - Contains the \`createUser\` function that handles user creation in the database.
  - Validates user credentials and records the creation time.

- **\`backend/models/user.model.js\`:**
  - Defines the \`User\` schema and model using Mongoose.
  - Includes methods for hashing passwords (\`hashPassword\`) and generating authentication tokens (\`generateAuthToken\`).

- **\`backend/dbConnect.js\`:**
  - Manages the connection to the MongoDB database using Mongoose.
  - Ensures the application is connected to the database before handling requests.

## Environment Variables

The application uses a \`.env\` file to manage environment-specific settings. Ensure that a \`.env\` file is present in the \`backend\` directory with the following variables:

- \`PORT\`: The port number on which the server runs.
- \`DB_CONNECT\`: MongoDB connection string.
- \`JWT_SECRET\`: Secret key for token generation.

### Example \`.env\` File

\`\`\`properties
PORT=3001
DB_CONNECT=mongodb://127.0.0.1:27017/uberClone
JWT_SECRET=uber-project
\`\`\`

## Errors and Responses

### Validation Error

**Status:** \`400 Bad Request\`
**Example Response:**

\`\`\`json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email"
    }
  ]
}
\`\`\`

### Duplicate User

**Status:** \`400 Bad Request\`
**Example Response:**

\`\`\`json
{
  "message": "User already exists"
}
\`\`\`

### Invalid Credentials

**Status:** \`401 Unauthorized\`
**Example Response:**

\`\`\`json
{
  "message": "Invalid email or password"
}
\`\`\`

## Dependencies

- \`express-validator\`: For input validation.
- \`bcrypt\`: For password hashing.
- \`jsonwebtoken\`: For token generation.
- \`mongoose\`: For database operations.

## How to Run

1. **Create the Environment Variables File**

   Ensure that a \`.env\` file exists in the \`backend\` directory with the following content:

   \`\`\`properties
   PORT=3001
   DB_CONNECT=mongodb://127.0.0.1:27017/uberClone
   JWT_SECRET=uber-project
   \`\`\`

2. **Install Dependencies**

   Navigate to the \`backend\` directory and install the necessary dependencies:

   \`\`\`bash
   cd /Users/sanketmishra/Desktop/Desktop/code/node/uberClone/backend
   npm install
   \`\`\`

3. **Start the Server**

   Start the server using the following command:

   \`\`\`bash
   node server.js
   \`\`\`

4. **Test the Endpoints**

   Use tools like Postman or cURL to test the \`/users/register\` and \`/users/login\` endpoints.
EOL
```
