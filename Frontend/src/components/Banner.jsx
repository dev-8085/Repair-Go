import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa'; // Added user icon to button

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 relative overflow-hidden">
      {/*--------------Left Side---------------*/}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 space-y-6">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white space-y-2">
          <p className="animate__animated animate__fadeIn animate__delay-1s">Book Appointment</p>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-yellow-300">With 100+ Trusted Technicians</p>
        </div>
        <button 
          onClick={() => {navigate('/login'); window.scrollTo(0, 0)}} 
          className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-md shadow-lg transform transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-xl"
        >
          <FaUserPlus /> Create Account
        </button>
      </div>

      {/*--------------Right Side---------------*/}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative overflow-hidden">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md transition-transform transform hover:scale-110 hover:rotate-6"
          src={assets.appointment_img}
          alt="Appointment Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
