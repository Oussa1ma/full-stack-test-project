# Full Stack Developer Test Project

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL
- Angular CLI (for front-end)
- NestJS CLI (for back-end)

### Back-End
1. Navigate to the `backend` folder:
   cd backend
   
2. Install dependencies:

  npm install
  
3. Set up the database:

  Create a PostgreSQL database named products_db.

  Update the database credentials in src/app.module.ts.

4. Run the back-end server:

  npm run start
  
### Front-End
1. Navigate to the `frontend` folder:
   cd frontend
   
2. Install dependencies:

   npm install
  
3. Run the front-end development server:

   ng serve
   
4. Open your browser and navigate to http://localhost:4200

### Testing the API
Use a tool like Postman to test the API endpoints. Here are the key endpoints:

Register: POST /auth/register

Login: POST /auth/login

Products:

GET /products

GET /products/:id

POST /products (protected)

PUT /products/:id (protected)

DELETE /products/:id (protected)

Include the JWT token in the Authorization header for protected endpoints.

### Notes

The front-end runs on http://localhost:4200

The back-end runs on http://localhost:3000