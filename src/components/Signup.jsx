import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;

        // Basic validation
        if (!name || !email || !password) {
            return handleError('Name, email, and password are required');
        }

        try {
            const url = "http://localhost:8080/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password }) // Send name, email, and password
            });

            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                handleSuccess(message);
                // Redirecting after success
                setTimeout(() => {
                    navigate('/login');
                }, 1000);  // 1-second delay to display success message
            } else if (error && error.details) {
                const details = error.details[0]?.message || "An error occurred during signup.";
                handleError(details);
            } else {
                handleError(message || "Signup failed. Please try again.");
            }

            console.log(result);  // For debugging API response

        } catch (err) {
            handleError("An unexpected error occurred. Please try again later.");
            console.error(err);  // For debugging
        }
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-6 rounded-lg shadow-md w-96'>
                <h1 className='text-2xl font-semibold text-center mb-4'>Signup</h1>
                <form onSubmit={handleSignup}>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700'>Name</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='name'
                            placeholder='Enter your name...'
                            value={signupInfo.name}
                            className='mt-1 block w-full p-2 border border-gray-300 rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700'>Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder='Enter your email...'
                            value={signupInfo.email}
                            className='mt-1 block w-full p-2 border border-gray-300 rounded'
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-gray-700'>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='Enter your password...'
                            value={signupInfo.password}
                            className='mt-1 block w-full p-2 border border-gray-300 rounded'
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
                    >
                        Signup
                    </button>
                    <p className='mt-4 text-center'>
                        Already have an account? 
                        <Link to="/Dental_Clinic/login" className='text-blue-500 underline'> Login</Link>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Signup;
