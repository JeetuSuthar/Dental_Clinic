import React, { useState } from "react";

const Appointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    email: "",
    phone: "",
  });
  const [appointments, setAppointments] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      setErrorMessage("Please select a time slot.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/Dental_Clinic/appointment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          ...formData, 
          time: selectedSlot 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const result = await response.json();
      setSuccessMessage(result.message);
      setAppointments([...appointments, { ...formData, time: selectedSlot }]);
      setFormData({
        date: "",
        name: "",
        email: "",
        phone: "",
      });
      setSelectedSlot(null);
      setErrorMessage("");
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
      setErrorMessage("An error occurred while submitting. Please try again.");
    }
  };

  const handleDeleteAppointment = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  const timeSlots = [
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM",
    "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:15 PM",
    "03:30 PM", "03:45 PM", "04:00 PM", "04:15 PM", "04:30 PM",
    "04:45 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:15 PM",
    "06:30 PM", "06:45 PM", "07:00 PM", "07:15 PM", "07:30 PM",
    "07:45 PM", "08:00 PM", "08:15 PM", "08:30 PM", "08:45 PM",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-300 p-4 sm:p-6">
      {/* Top: Appointment Form */}
      <div className="flex flex-col w-full max-w-5xl bg-white shadow-lg rounded-lg p-4 sm:p-6 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 mx-auto">Dental Clinic</h1>
        <h2 className="text-lg sm:text-xl font-bold mb-4">Book Your Appointment</h2>
        <div className="flex gap-4">
          {/* Left Side: Time Slots */}
          <div className="flex flex-col w-full md:w-2/3 border-b md:border-b-0 md:border-r border-gray-300 p-4 sm:p-6">
            <h2 className="text-xl font-bold text-center mb-4">Available Time Slots</h2>
            <div className="grid grid-cols-5 gap-2">
              {timeSlots.map((slot) => (
                <div
                  key={slot}
                  onClick={() => handleSlotClick(slot)}
                  className={`cursor-pointer text-center py-2 sm:py-3 border-2 rounded-lg 
                    ${selectedSlot === slot ? "bg-green-500 text-white" : "border-green-500 text-green-500"}
                    hover:bg-green-300 hover:text-white transition duration-300`}
                >
                  {slot}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/3 gap-4 p-4 sm:p-6"
            style={{ height: "500px", overflowY: "auto" }} // Fixed height with overflow
          >
            <div className="flex flex-col">
              <label className="text-gray-700">Choose Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                required
                className="p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Email Id</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email"
                required
                className="p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700">Your Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone No"
                required
                className="p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {errorMessage && <div className="text-red-500">{errorMessage}</div>}
            <button
              type="submit"
              className="mt-4 py-2 bg-green-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
        {successMessage && (
          <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-md">
            {successMessage}
          </div>
        )}
      </div>

      {/* Bottom: Appointments List */}
      <div className="w-full max-w-5xl">
        <h2 className="text-xl font-bold text-center mb-4">Your Appointments</h2>
        {appointments.length === 0 ? (
          <div className="text-gray-500 text-center">No appointments booked yet.</div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-4">
            {appointments.map((appointment, index) => (
              <div key={index} className="flex justify-between items-center border-b p-2">
                <div className="flex-1">
                  <p className="font-semibold">{appointment.date} - {appointment.time}</p>
                  <p>{appointment.name}</p>
                  <p>{appointment.email}</p>
                  <p>{appointment.phone}</p>
                </div>
                <button
                  onClick={() => handleDeleteAppointment(index)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointment;
