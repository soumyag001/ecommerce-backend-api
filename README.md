# 🛒 E-commerce Backend API

A simple backend for an e-commerce platform built using Node.js, Express.js, and MongoDB. This project provides basic product management functionalities via a RESTful API, tested with Postman.

## 🚀 Features

- Create and retrieve products
- MongoDB integration using Mongoose
- CORS and JSON middleware
- Environment configuration via `.env`

## 🛠️ Technologies Used

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Postman  
- dotenv  

## 📁 Project Structure

/models → Mongoose product schema
/routes → Express routes for API
/controllers → Logic for handling routes (optional structure)
server.js → Entry point of the application
.env → MongoDB connection URI


## 📦 API Endpoints

| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | /api/products    | Fetch all products   |
| POST   | /api/products    | Add a new product    |

## 🧪 How to Run the Project Locally

1. **Clone the repository**
   git clone https://github.com/soumyag001/ecommerce-backend-api.git
   cd ecommerce-backend-api
2.Install dependencies
   npm install
3.MONGO_URI=mongodb://localhost:27017/ecommerce
4.Run the server
  node server.js
5.Test the APIs with Postman
     Example: http://localhost:5000/api/products

🔐 Future Improvements
     Add user authentication (JWT)
     Implement user/admin roles
     Add cart, orders, and payment gateway integration
