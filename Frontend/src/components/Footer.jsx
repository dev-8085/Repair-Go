import React from 'react'
import { assets } from '../assets/assets'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-10 my-10 text-sm'>
        
        {/* Left Side */}
        <div className='flex flex-col items-start'>
          <img className='mb-5 w-40' src={assets.logo} alt="RepairGo Logo" />
          <p className='text-gray-600 leading-6'>
            Mobile repair solutions at your doorstep. Our expert technicians visit your home to fix your device with convenience and efficiency. 
            Book online today for fast, reliable service!
          </p>
        </div>

        {/* Center Side */}
        <div>
          <p className='text-xl font-medium mb-4'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='hover:text-blue-600 transition-colors cursor-pointer'>Home</li>
            <li className='hover:text-blue-600 transition-colors cursor-pointer'>About Us</li>
            <li className='hover:text-blue-600 transition-colors cursor-pointer'>Contact Us</li>
            <li className='hover:text-blue-600 transition-colors cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <p className='text-xl font-medium mb-4'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='flex items-center gap-2'>
              <FaPhoneAlt className='text-gray-600' />
              <span>+91 8085805950</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaEnvelope className='text-gray-600' />
              <span>Repairgo@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
        <hr className='border-gray-300' />
        <p className='py-5 text-sm text-center text-gray-600'>
          &copy; 2024 RepairGo - All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer;
