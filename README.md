# Recipes App

A complete CRUD application for managing recipes using Node.js, Express.js, and Mongoose.

## Features

- Create new recipes
- Get all recipes
- Get single recipe by ID
- Update existing recipes
- Delete recipes

## Technologies Used

- Node.js
- Express.js
- Mongoose (MongoDB)
- Postman for API documentation

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB URI
4. Start the server: `npm run dev`

## API Endpoints

- POST `/api/recipes` - Create a new recipe
- GET `/api/recipes` - Get all recipes
- GET `/api/recipes/:id` - Get single recipe by ID
- PUT `/api/recipes/:id` - Update recipe by ID
- DELETE `/api/recipes/:id` - Delete recipe by ID

See Postman documentation for detailed request/response examples.