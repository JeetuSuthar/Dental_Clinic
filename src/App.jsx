import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './pages/AboutUs';
import Card from './components/Card'
import Treatment from './pages/Treatment';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <hr className=' text-black border ' />
      <Home />
      <AboutUs />
      <Treatment/>


      <Footer/> 
      
    </>
  )
}

export default App
