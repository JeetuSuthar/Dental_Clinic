import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-scroll";
import logo from '../assets/logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'treatments' },
    { id: 4, link: 'register' },
    { id: 5, link: 'contact' },
    { id: 6, link: 'appointment' },
  ];

  return (
    // NAVBAR START
    <div className=' flex justify-between items-center w-full h-20  text-black  '>
      <div className='flex items-center  ' >
        <img src={logo} alt="Company Logo" className="w-20 h-auto  " />
        <h1 className='text-2xl font-semibold   tracking-wide'>Dental Clinic</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({ id, link }) => (
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 hover:text-black'>
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 hover:text-black hover:scale-110 duration-200 md:hidden'>
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gray-600   '>
          {links.map(({ id, link }) => (
            <li key={id} className='px-4 capitalize cursor-pointer hover:scale-105 hover:text-black text-white py-5 text-2xl '>
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
        
      )}
    </div>
    
    // NAVBAR END
  );
}

export default Navbar;
