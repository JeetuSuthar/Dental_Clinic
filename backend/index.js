const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const AuthRouter = require('./Routes/AuthRouter'); // Keep the AuthRouter for authentication
const Appointment = require('./Models/appointmentCheck'); // Import the appointment model
require('dotenv').config();
require('./Models/db'); // Ensure your database connection is established
const PORT = process.env.PORT || 8080;

// Basic ping route for health checks
const app = express();
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter); // Authentication routes

// Appointment booking route
app.post('/dental-clinic/slot/', async (req, res) => {
    try {
        // Check if the slot is already booked
        const existingSlot = await Appointment.findOne({ // Use the correct model
            date: req.body.date,
            time: req.body.time,
        });

        if (existingSlot) {
            return res.status(401).json({ message: 'This slot is already booked' });
        }

        // Create the new appointment
        const newAppointment = new Appointment({ // Use the correct model
            date: req.body.date,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            time: req.body.time,
        });

        // Save the new appointment
        const savedAppointment = await newAppointment.save();

        if (savedAppointment) {
            console.log(req.body);
            return res.status(201).json({ message: 'Successfully made an appointment' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'An error occurred while processing your request' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
