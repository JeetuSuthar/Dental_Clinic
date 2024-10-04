// Models/appointmentCheck.js
const mongoose = require("mongoose");

const userAppointment = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

// Model name should be singular and match the schema name
module.exports = mongoose.model("appointment_infos", userAppointment);
