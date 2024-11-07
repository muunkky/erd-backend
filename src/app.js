// backend/src/app.js
const express = require('express');
const cors = require('./middlewares/cors'); // Custom CORS middleware if any
const errorHandler = require('./middlewares/errorHandler');
const diagramRoutes = require('./routes/diagramRoutes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use(cors);

// Routes
app.use('/api/diagrams', diagramRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app;
