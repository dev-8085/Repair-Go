import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2x1 pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Repair Go We provide expert mobile repair services at your doorstep. From screen replacements to battery issues, our skilled technicians ensure fast, reliable, and affordable solutions—saving you time and hassle. </p>
          <p>Repair Go offers expert mobile repair services at your doorstep. From screen replacements to battery issues, our skilled technicians provide fast, reliable, and affordable solutions—saving you time and hassle. </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our Vision At Repair Go, our vision is to revolutionize mobile repair services by making them convenient, fast, and hassle-free. We aim to build a trusted and reliable doorstep repair solution, ensuring that no one has to waste time visiting a repair shop. </p>
        </div>
      </div>
      <div className='text-xl my-4'>
        WHY <span className='text-gray-700 font-semivold'>CHOOSE US</span>
        </div>
    </div>
  )
}

export default About