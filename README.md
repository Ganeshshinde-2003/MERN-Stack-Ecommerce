# MERN Stack Ecommerce Application 🛒

This is a MERN (MongoDB, Express, React, Node.js) stack-based e-commerce web application. It provides a REST API for managing products, users, and orders, and it also includes a client-side interface for users to browse and make purchases.

## Features 🌟

- User authentication and authorization 🔐
- Product catalog with product details and images 📦📷
- Shopping cart functionality 🛒
- Secure payment processing using Braintree 💳
- Order management 📋
- User profile management 👤
- Responsive design for mobile and desktop devices 📱💻

## Installation 🚀

### Prerequisites 📋

You should have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Clone the Repository 🧬

```
git clone https://github.com/Ganeshshinde-2003/MERN-Stack-Ecommerce
cd mernstackecommerce
### Install Dependencies 📦
```
To install the necessary dependencies, run the following commands:

```
# Install server-side dependencies
## Configure Environment Variables ⚙️
```
Create a `.env` file in the root directory of the project and add the following environment variables:

```dotenv
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
BRAINTREE_MERCHANT_ID=your_braintree_merchant_id
BRAINTREE_PUBLIC_KEY=your_braintree_public_key
BRAINTREE_PRIVATE_KEY=your_braintree_private_key
## Start the Application ▶️
```
To run both the server and client concurrently, use the following command:

```
npm run dev
## Start the Application ▶️
```
To run both the server and client concurrently, use the following command:

```
npm run dev
## API Endpoints 🚀
```
Here are the available API endpoints:

- `GET /api/products`: Get a list of all products.
- `GET /api/products/:id`: Get details of a specific product.
- `POST /api/products`: Create a new product (admin only).
- `PUT /api/products/:id`: Update a product (admin only).
- `DELETE /api/products/:id`: Delete a product (admin only).
- `POST /api/users/login`: User login 📝

Feel free to replace placeholders like `yourusername`, `your_mongodb_uri`, `your_secret_key`, `your_braintree_merchant_id`, `your_braintree_public_key`, and `your_braintree_private_key` with your actual values.

You can copy and paste this Markdown text into your README.md file on GitHub.

npm install

# Install client-side dependencies
```
cd client
npm install
```
