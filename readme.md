# Coffee Shop Backend

This project is the backend for a coffee shop application, built using Fastify, TypeScript, Prisma, and other modern web development technologies. This README will guide you through the setup process, explaining the dependencies and how to run the code.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)

## Technologies Used

- **Fastify**: A fast and low-overhead web framework for Node.js.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Prisma**: An ORM for working with databases in Node.js and TypeScript.
- **Zod**: A schema declaration and validation library.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## Installation

Before running the application, ensure you have Node.js, npm (or yarn), and Docker installed. Then, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/coffee-shop-back.git
   cd coffee-shop-back
   ```

2. Install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the Docker containers:

   ```sh
   docker-compose up -d
   ```

4. Set up the database:
   ```sh
   npx prisma migrate dev --name init
   ```

## Running the Application

You can run the application in development mode using the following command:

### Development Mode

To start the development server with hot reloading, run:

```sh
npm run dev
# or
yarn dev
```

## Project Structure

The project structure is as follows:

```
coffee-shop-back/
├── node_modules/
├── prisma/
│   ├── schema.prisma
│   └── ...
├── src/
│   ├── http/
│   │   ├── server.ts
│   │   └── ...
│   ├── repositories/
│   ├── services/
│   ├── utils/
│   ├── index.ts
│   └── ...
├── .gitignore
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── ...
```

## Scripts

- **dev**: Starts the development server with TypeScript support and hot reloading.

## Dependencies

### Runtime Dependencies

- **@fastify/cors**: CORS plugin for Fastify.
- **@fastify/multipart**: Multipart/form-data plugin for Fastify.
- **@fastify/static**: Plugin for serving static files in Fastify.
- **@prisma/client**: Prisma client for database access.
- **fastify**: Web framework for Node.js.
- **fastify-multer**: Middleware for handling multipart/form-data in Fastify.
- **flatted**: Library for safely stringifying and parsing circular JSON.
- **multer**: Middleware for handling multipart/form-data.
- **zod**: Library for schema declaration and validation.

### Development Dependencies

- **@types/fastify-cors**: TypeScript definitions for fastify-cors.
- **@types/multer**: TypeScript definitions for multer.
- **@types/node**: TypeScript definitions for Node.js.
- **fastify-cors**: CORS plugin for Fastify.
- **prisma**: Prisma ORM CLI.
- **tsx**: TSX runner for TypeScript projects.
- **typescript**: Superset of JavaScript that adds types.

### Docker

- **Docker**: Ensure Docker is installed to run the application in containers.
- **docker-compose**: Used to manage multi-container Docker applications.

Feel free to explore the code and make any modifications as needed. If you encounter any issues, please open an issue on the repository.

Happy coding!
