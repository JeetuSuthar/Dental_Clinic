const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Appointment = require('./Models/appointmentCheck');
const AuthRouter = require('./Routes/AuthRouter'); // Make sure this router is set up correctly
require('dotenv').config();
require('./Models/db'); // Database connection

const PORT = process.env.PORT || 8080;
const app = express();

// Apply CORS middleware with the correct frontend origin
app.use(cors({
  origin: 'http://localhost:5173', // Correct origin for your frontend
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
  credentials: true // Enable credentials if needed
}));

app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Use the AuthRouter for authentication-related routes
app.use('/auth', AuthRouter);

// Route for making appointments
app.post('/Dental_Clinic/appointment/', async (req, res) => {
  try {
    const { date, time, name, email, phone } = req.body;

    const existingSlot = await Appointment.findOne({ date, time });
    if (existingSlot) {
      return res.status(401).json({ message: 'This slot is already booked' });
    }

    const newAppointment = new Appointment({ date, name, email, phone, time });
    const savedAppointment = await newAppointment.save();

    if (savedAppointment) {
      return res.status(201).json({ message: 'Successfully made an appointment' });
    } else {
      return res.status(500).json({ message: 'Failed to save appointment' });
    }
  } catch (err) {
    console.error('Error saving appointment:', err);
    return res.status(500).json({ message: 'An error occurred while processing your request' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
