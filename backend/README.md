# StudyLife Backend

Node.js backend API for StudyLife using Express.js and MongoDB.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas cloud)
- npm or yarn

## Setup

1. **Install dependencies**

   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Update `MONGODB_URI` with your MongoDB connection string

   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/studylife
   NODE_ENV=development
   ```

3. **Start MongoDB**
   - **Local MongoDB:** Make sure MongoDB service is running
   - **MongoDB Atlas:** Use your cloud connection string in `.env`

4. **Run the server**
   ```bash
   npm run dev    # Development with nodemon
   npm start      # Production
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

- `GET /api/health` - Health check

## Project Structure

```
backend/
├── src/
│   ├── server.js      # Main server file
│   ├── config.js      # Configuration
│   └── db.js          # Database connection
├── models/            # Mongoose schemas
├── routes/            # API routes
├── controllers/       # Route handlers
├── .env.example       # Environment variables template
└── package.json       # Dependencies
```

## Next Steps

1. Define MongoDB schemas in `models/`
2. Create API routes in `routes/`
3. Implement controllers in `controllers/`
4. Connect routes in `src/server.js`
