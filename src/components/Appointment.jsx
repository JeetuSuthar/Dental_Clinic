import React, { useState } from "react";

const Appointment = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    email: "",
    phone: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // For storing success messages
  const [errorMessage, setErrorMessage] = useState(""); // For storing error messages

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
      // Make an API call to submit the form data here
      // const response = await api.submitAppointment({ ...formData, selectedSlot });

      console.log("Form Data:", formData);
      console.log("Selected Slot:", selectedSlot);
      
      // Set success message
      setSuccessMessage("Appointment booked successfully!");

      // Clear the form and selected slot after successful submission
      setFormData({
        date: "",
        name: "",
        email: "",
        phone: "",
      });
      setSelectedSlot(null);
      setErrorMessage(""); // Clear any error messages
    } catch (error) {
      console.error("Error occurred while submitting the form:", error);
      setErrorMessage("An error occurred while submitting. Please try again.");
    }
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-300 p-6">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg w-full max-w-5xl overflow-hidden">
        {/* Left Side: Time Slots */}
        <div className="flex flex-col w-full md:w-3/5 border-r border-gray-300 p-6">
          <h2 className="text-xl font-bold text-center mb-4">Available Time Slots</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {timeSlots.map((slot) => (
              <div
                key={slot}
                onClick={() => handleSlotClick(slot)}
                className={`cursor-pointer text-center py-3 border-2 rounded-lg 
                  ${selectedSlot === slot ? "bg-green-500 text-white" : "border-green-500 text-green-500"}
                  hover:bg-green-300 hover:text-white transition duration-300`}
              >
                {slot}
              </div>
            ))}
          </div>
          {selectedSlot && (
            <div className="text-center mt-6">
              <button
                onClick={() => console.log("Proceed to form")}
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-green-600"
              >
                Proceed to Form
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Form */}
        <div className="flex flex-col w-full md:w-2/5 p-6">
          <h1 className="text-3xl font-bold mb-4 mx-auto">Dental Clinic</h1>
          <h2 className="text-xl font-bold mb-4">Book Your Appointment</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            {errorMessage && <div className="text-red-500">{errorMessage}</div>} {/* Display error message */}
            <button
              type="submit"
              className="mt-4 py-2 bg-green-500 text-white font-semibold rounded-lg transition duration-300 hover:bg-green-600"
            >
              Submit
            </button>
          </form>
          {successMessage && ( // Display success message as a toast
            <div className="mt-4 p-4 bg-green-200 text-green-800 rounded-md">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
