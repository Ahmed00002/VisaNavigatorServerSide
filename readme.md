# Immigro Server

Visa Navigator Server is the backend API for the Visa Navigator project, designed to handle data storage, authentication, and other server-side functionalities.

## Features

- **User Authentication**: Secure user authentication using Firebase.
- **API Endpoints**: Provide RESTful APIs for frontend data interaction.
- **Database Integration**: Firestore for storing user data, application details, and other necessary information.
- **Error Handling**: Centralized error handling for robust API responses.
- **Environment Configuration**: Easy environment variable management for deployment and development.

## Technologies Used

- **Node.js**: Runtime environment.
- **Express.js**: Web framework for creating REST APIs.
- **Firebase Admin SDK**: Integration with Firebase for authentication and Firestore database.
- **CORS**: Enable secure cross-origin requests.

## Installation

Follow these steps to set up the server locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/visa-navigator-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd visa-navigator-server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=5000
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_PRIVATE_KEY=your_firebase_private_key
   FIREBASE_CLIENT_EMAIL=your_firebase_client_email
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. The server will run on `http://localhost:5000` by default.

- **POST /api/register**: Register a new user.

### **Visa Management**

- **GET /api/visas**: Retrieve a list of visa types.
- **POST /api/visa/apply**: Submit a new visa application.

## Contact

For any queries or feedback, please reach out:

- **Email**: ahmednuman.topup@gmail.com
- **GitHub**: [yourusername](https://github.com/yourusername)
