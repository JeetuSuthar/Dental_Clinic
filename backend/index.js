const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter'); // Authentication routes
require('dotenv').config();
require('./Models/db'); // Ensure your database connection is established

const PORT = process.env.PORT || 8080;

// CORS configuration - Add your frontend's GitHub Pages URL here
app.use(cors({
    origin: 'https://jeetusuthar.github.io', // Correct GitHub Pages URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));

// Basic ping route for health checks
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', AuthRouter); // Authentication routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
