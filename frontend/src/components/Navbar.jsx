import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    // Update links to include 'appointment'
    const links = [
        { id: 1, link: '/Dental_Clinic/', name: 'home' },
        { id: 2, link: '/Dental_Clinic/about-us', name: 'about' },
        { id: 3, link: '/Dental_Clinic/treatment', name: 'treatments' },
        { id: 4, link: '/Dental_Clinic/signup', name: 'register' },
        { id: 5, link: '/Dental_Clinic/contact', name: 'contact' },
        { id: 6, link: '/Dental_Clinic/appointment', name: 'appointment' },
    ];

    return (
        <div className='flex justify-between items-center lg:w-full h-20 text-black'>
            <div className='flex items-center'>
                <img src={logo} alt="Company Logo" className="w-20 h-auto" />
                <h1 className='text-2xl font-semibold tracking-wide'>Dental Clinic</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link, name }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-125 duration-200 hover:text-black'>
                        <Link to={link}>{name}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 hover:text-black hover:scale-110 duration-200 md:hidden'>
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full  bg-white border-b-4 border-black transition-all '>
                    {links.map(({ id, link, name }) => (
                        <li key={id} className='px-4 capitalize cursor-pointer hover:scale-105 hover:text-black text-gray-700 py-5 text-2xl '>
                            <Link to={link}>{name}</Link>
                            <hr className='bg-indigo-700 ' />
                        </li>
                        
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;
