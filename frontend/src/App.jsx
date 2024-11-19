 import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './pages/AboutUs';
import Treatment from './pages/Treatment';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import ClinicInfo from './pages/ClinicInfo';
import Appointment from './components/Appointment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("loggedInUser"));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <hr className='text-black border' />
      <Routes>
        <Route path="/Dental_Clinic/login" element={<Login />} />
        <Route path="/Dental_Clinic/signup" element={<Signup />} />
        <Route path="/Dental_Clinic" element={<LandingPage />} />
        <Route path="/Dental_Clinic/about-us" element={<AboutUs />} />
        <Route path="/Dental_Clinic/treatment" element={<Treatment />} />
        <Route path="/Dental_Clinic/clinicinfo" element={<ClinicInfo />} />
        <Route
          path="/Dental_Clinic/appointment"
          element={isAuthenticated ? <Appointment /> : <Navigate to="/Dental_Clinic/login" />}
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

// LandingPage Component
const LandingPage = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="treatments">
        <Treatment />
      </section>
      <section id="clinic-info">
        <ClinicInfo />
      </section>
      <Footer />
    </>
  );
};

export default App;
