const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter'); // Keep the AuthRouter for authentication
require('dotenv').config();
require('./Models/db'); // Ensure your database connection is established
const PORT = process.env.PORT || 8080;

// Basic ping route for health checks
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter); // Authentication routes
// Removed the product routes since you don't want them
// app.use('/products', ProductRouter); // This line has been removed

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
