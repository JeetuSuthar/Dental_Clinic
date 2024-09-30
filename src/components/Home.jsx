import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import homepage from "../assets/homepage.png";
import { handleError, handleSuccess } from "../utils"; // Ensure this utility has the correct functions

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState("");
    const navigate = useNavigate();

    // Set the logged-in user's name from localStorage
    useEffect(() => {
        const user = localStorage.getItem("loggedInUser");
        if (!user) {
            navigate("/Dental_Clinic/login"); // Redirect to login if not authenticated
        } else {
            setLoggedInUser(user);
        }
    }, [navigate]);

    // Logout handler function
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        handleSuccess("User logged out");

        setTimeout(() => {
            setLoggedInUser(""); // Clear the user state
            navigate("/Dental_Clinic/login"); // Redirect to /Dental_Clinic/login after logout
        }, 1000); // Delay for 1 second to show the success message before navigating
    };

    return (
        <div className="container w-full lg:w-[80%] mx-auto p-4">
           
          <div className="flex w-full">
          <h1 className="text-4xl font-bold text-red-500 " >Hello {loggedInUser} !!</h1>
    <button
        onClick={handleLogout}
        className="ml-auto bg-red-500 text-white px-4 py-2 rounded"
    >
        Logout
    </button>
</div>

            

            <div className="lg:flex items-center justify-center">
                <div className="lg:w-[45%]">
                    <h1 className="font-bold py-8 lg:py-4 text-5xl lg:text-6xl">
                        We Care For Your <span className="text-blue-400">Smile</span>
                    </h1>
                    <h4 className="text-xl lg:text-3xl">
                        We Believe Everyone should have easy access to a great dental clinic
                    </h4>
                </div>
                <div>
                    <img src={homepage} alt="Homepage" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center gap-4 py-6">
                <div className="flex flex-col items-center h-full w-full justify-center font-serif text-white item p-10 bg-indigo-800 rounded-3xl shadow-md">
                    <h2 className="text-2xl font-bold pb-5">Flexible Schedule</h2>
                    <p className="text-white pb-5">
                        We work on holidays, besides working late on regular days. In case of emergencies we accept bookings.
                    </p>
                    <div className="border text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-white hover:text-black">
                        Chat with Doctor
                    </div>
                </div>

                <div className="flex flex-col items-center h-full w-full justify-center text-white item p-10 bg-indigo-600 rounded-3xl shadow-md">
                    <h2 className="text-2xl font-bold font-serif pb-5">Best Price Guarantee</h2>
                    <p className="text-white pb-5">
                        Our reasonable prices made thousands of people smile with a new, beautiful, irresistible smile, as never before!!
                    </p>
                    <div className="border text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-white hover:text-black">
                        Read More
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center font-serif text-white item p-10 bg-indigo-800 rounded-3xl shadow-md w-full h-full">
                    <h2 className="text-2xl font-bold pb-5">Opening Hours</h2>
                    <p className="text-white pb-5">
                        Monday – Saturday : 10.00 am – 10.00 pm Sunday : 5.00 pm – 10.00 pm
                    </p>
                    <div className="border text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-white hover:text-black">
                        Book An Appointment
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
