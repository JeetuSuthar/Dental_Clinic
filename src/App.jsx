import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './pages/AboutUs';
import Treatment from './pages/Treatment';
import Footer from './components/Footer';
import Profile from './pages/Profile'; // Import the Profile component

function App() {
  return (
    <Router>
      <Navbar />
      <hr className='text-black border' />

      {/* Define the sections directly in the main App component */}
      <Routes>
        <Route path="/Dental_Clinic/" element={<LandingPage />} /> {/* Landing Page */}
        <Route path="/Dental_Clinic/about-us" element={<LandingPage />} />
        <Route path="/Dental_Clinic/treatment" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} /> {/* Profile Page */}
      </Routes>
    </Router>
  );
}

// Create a LandingPage component that includes all sections
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

      

      <Footer />
    </>
  );
}

export default App;
