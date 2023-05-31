import React from 'react'
import hero from '../assets/hero.png'

const Header = () => {
  return (
    <div className='flex justify-center m-4 p-4 items-center font-muli flex-col md:flex-row md:justify-between mt-[80px]'>
      <div className='p-4 ml-8 mr-8 px-8 sm:items-center'>
        <p className='text-4xl leading-[40px] lg:text-5xl lg:leading-[56px] font-bold text-textcolor lg:mb-[25px] mb-[20px]'>Virtual healthcare <br/>for you</p>
        <p className='text-[16px] leading-6 lg:text-xl lg:leading-8 text-secondary mb-[45px]'>
          Trafalgar provides progressive, and affordable <br/> healthcare, accessible on mobile and <br/> online for everyone
        </p>
        <button type="button" className='w-[150px] h-[48px] rounded-[24px] bg-button text-white font-bold lg:text-[18px] text-[14px] md:w-[200px] md:h-[56px] md:rounded-[28px]'>Consult today</button>
      </div>
      <div className='lg:mr-16 px-8 min-w-[400px]'>
        <img src={hero} alt='hero' className='mx-auto'/>
      </div>
    </div>
  )
}

export default Header