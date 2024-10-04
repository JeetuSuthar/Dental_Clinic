const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Appointment = require('./Models/appointmentCheck');
require('dotenv').config();
require('./Models/db'); // Database connection

const PORT = process.env.PORT || 8080;
const app = express();

// Apply CORS middleware with the correct frontend origin
const corsOptions = {
  origin: 'http://localhost:5173', // Your React app URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

// Routes
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

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
