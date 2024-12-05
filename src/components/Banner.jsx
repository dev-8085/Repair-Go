import React from 'react';
import { assets } from '../assets/assets';

const Banner = () => {
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
      {/*--------------Left Side---------------*/}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white space-y-2">
          <p>Book Appointment</p>
          <p>With 100+ Trusted Technicians</p>
        </div>
        <button className="mt-6 px-6 py-3 bg-white text-primary font-medium rounded-md shadow-md transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105 hover:shadow-lg">
  Create Account
</button>

      </div>

      {/*--------------Right Side---------------*/}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="Appointment Illustration"
        />
      </div>
    </div>
  );
};

export default Banner;
