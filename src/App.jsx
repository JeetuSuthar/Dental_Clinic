import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './pages/AboutUs';
import Treatment from './pages/Treatment';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Login from './components/Login';
import Signup from './components/Signup'; // Import your Signup component
import ClinicInfo from './pages/ClinicInfo';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("loggedInUser"));

  // Update authentication state when the localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem("loggedInUser"));
    };

    // Add event listener to window for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Navbar />
      <hr className='text-black border' />
      <Routes>
        <Route
          path="/Dental_Clinic/login"
          element={!isAuthenticated ? <Login setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/Dental_Clinic/" />}
        />
        <Route
          path="/Dental_Clinic/signup"
          element={!isAuthenticated ? <Signup setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/Dental_Clinic/" />}
        />
        <Route
          path="/Dental_Clinic/"
          element={isAuthenticated ? <LandingPage /> : <Navigate to="/Dental_Clinic/login" />}
        />
        <Route
          path="/Dental_Clinic/about-us"
          element={isAuthenticated ? <AboutUs /> : <Navigate to="/Dental_Clinic/login" />}
        />
        <Route
          path="/Dental_Clinic/treatment"
          element={isAuthenticated ? <Treatment /> : <Navigate to="/Dental_Clinic/login" />}
        />
        <Route
          path="/Dental_Clinic/clinicinfo"
          element={isAuthenticated ? <ClinicInfo/> : <Navigate to="/Dental_Clinic/clinicInfo" />}
        />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/Dental_Clinic/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

// LandingPage component
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
      <section id="treatments">
        <ClinicInfo />
      </section>
    </>
  );
}

export default App;
