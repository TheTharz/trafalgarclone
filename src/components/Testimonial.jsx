import React from 'react'
import TestimonialImage from '../assets/testimonial.png'

const Testimonial = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 m-4 p-4 rounded-xl text-white flex flex-col min-w-md max-w-full w-[300px] md:w-[1000px] mx-auto min-h-[400px] font-muli'>
      <div className='m-2 p-2 flex-1'>
        <p className='text-2xl text-center font-bold'>What our customer are saying</p>
      </div>
      <div className='flex md:flex-row flex-col m-2 p-2 flex-[3] items-center pb-8'>
        <div className='flex-0.5'>
          <img src={TestimonialImage} alt='Testimonial' className='rounded-full m-2 p-2'/>
        </div>
        <div className='m-2 p-2 flex-[0.5]'>
          <p className='text-[22px] font-bold'>Edward Newgate</p>
          <p className='text-[16px]'>Founder Circle</p>  
        </div>
        <div className='flex-1 m-2 p-2'>
          <p className='text-[19px]'>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial