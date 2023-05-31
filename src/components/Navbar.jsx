import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

  const [nav,setNav] = useState(true);

  return (
    <div className='flex flex-row md:m-3 m-2 p-2 justify-between items-center text-textcolor lg:m-5 lg:ml-8 lg:px-8'>
      <div className='ml-2 md:ml-3 lg:ml-4'>
        <img src={Logo} alt='logo' className='cursor-pointer' />
      </div>

      {/* display only for above md */}
      <nav className='hidden md:flex justify-end items-center font-muli lg:text-lg md:text-base text-sm lg:mr-8 md:mr-2 leading-6'>
        <a href='#home' className='lg:m-2 m-1 lg:px-4 px-2 cursor-pointer'>Home</a>
        <a href='#find' className='lg:m-2 m-1 lg:px-4 px-2 cursor-pointer opacity-50'>Find a doctor</a>
        <a href='#apps' className='lg:m-2 m-1 lg:px-4 px-2 cursor-pointer opacity-50'>Apps</a>
        <a href='#testimonials' className='lg:m-2 m-1 lg:px-4 px-2 cursor-pointer opacity-50'>Testimonials</a>
        <a href='#about' className='lg:m-2 m-1 lg:px-4 px-2 cursor-pointer opacity-50'>About us</a>
      </nav>

      {/* display only for below md */}

      <div className='sm:flex md:hidden justify-end items-center'>
        {nav?
          <RiMenu3Line size={24} className='cursor-pointer mr-4' onClick={()=>setNav(!nav)}/>
          :
          <div className='z-10 absolute top-3 right-3 h-screen'>
            <AiOutlineClose size={24} onClick={()=>setNav(!nav)} className='cursor-pointer absolute top-4 right-4'/>
            <nav>
              <ul className='flex flex-col p-4'>  
                <a href='#home' className='m-1 px-2 cursor-pointer py-2'>Home</a>
                <a href='#find' className='m-1 px-2 cursor-pointer py-2'>Find a doctor</a>
                <a href='#apps' className='m-1 px-2 cursor-pointer py-2'>Apps</a>
                <a href='#testimonials' className='m-1 px-2 cursor-pointer py-2'>Testimonials</a>
                <a href='#about' className='m-1 px-2 cursor-pointer py-2'>About us</a>
              </ul>
            </nav>
          </div>
        }

      </div>
    </div>
  )
}

export default Navbar