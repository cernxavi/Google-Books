# MERN Book Search Engine

## Description

This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to search for books using the Google Books API and save their favorite books. The existing RESTful API has been refactored to use GraphQL with Apollo Server for enhanced performance and flexibility.

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Book Search**: Search for books using the Google Books API.
- **Save Books**: Authenticated users can save books to their personal collection.
- **View Saved Books**: Users can view and remove saved books.
- **GraphQL Integration**: API is refactored to use Apollo Server with GraphQL.
- **Deployed on Render**: The application is hosted on Render with MongoDB Atlas as the database.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Installation

### Prerequisites
- Node.js
- MongoDB Atlas account

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd book-search-engine
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGODB_URI=<your-mongodb-atlas-uri>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the development server:
   ```sh
   npm run develop
   ```

## Usage

- Navigate to the application URL.
- Search for books using keywords.
- Sign up or log in to save books.
- View saved books in the "Saved Books" section.
- Remove books from your collection if needed.

## Technologies Used

- **Front End**: React, Apollo Client
- **Back End**: Node.js, Express.js, Apollo Server, GraphQL
- **Database**: MongoDB Atlas
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render

## API Reference

### GraphQL Queries & Mutations

#### Queries
- `me`: Retrieves the authenticated user's data.

#### Mutations
- `login(email, password)`: Authenticates a user.
- `addUser(username, email, password)`: Creates a new user.
- `saveBook(bookInput)`: Saves a book to the user's profile.
- `removeBook(bookId)`: Removes a saved book.

## Deployment

This application is deployed on Render and can be accessed at:

[Live Application URL](https://google-books-zbvj.onrender.com)  
[GitHub Repository](https://github.com/cernxavi/Google-Books.git)

