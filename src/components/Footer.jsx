import React from 'react'
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='w-full'>
      <div className=' bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 flex flex-col md:grid md:grid-cols-4 mt-5 justify-center md:items-center md:h-[400px] md:gap-16 text-white font-muli p-16'>
        <div className='flex flex-col text-[18px] leading-7 mr-16 m-4'>
          <div className=''>
            <img src={Logo} alt='logo'/>
          </div>
          <p className='mb-4'>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div className='text-[18px] leading-7 m-4'>
          <p className='font-bold p-1'>Company</p>
          <p className='p-1'>About</p>
          <p className='p-1'>Testimonials</p>
          <p className='p-1'>Find a doctor</p>
          <p className='p-1'>Apps</p>
        </div>
        <div className='text-[18px] leading-7 m-4'>
          <p className='p-1 font-bold'>Region</p>
          <p className='p-1'>Indonesia</p>
          <p className='p-1'>Singapore</p>
          <p className='p-1'>HongKong</p>
          <p className='p-1'>Canada</p>
        </div>
        <div className='text-[18px] leading-7 m-4'>
          <p className='p-1 font-bold'>Help</p>
          <p className='p-1'>Help Center</p>
          <p className='p-1'>Contact support</p>
          <p className='p-1'>Instructions</p>
          <p className='p-1'>How it works</p>
        </div>
        </div>
    </div>
  )
}

export default Footer