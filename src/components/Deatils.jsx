import React from 'react'
import Leading from '../assets/detailsleading.png'
import Download from '../assets/download.png'
const Deatils = () => {
  return (
    <div className='font-muli flex flex-col sm:mx-16 sm:px-16 justify-center'>
      <div className='flex w-full sm:m-8 p-4 sm:gap-8 flex-col sm:flex-row'>
        <div className='flex-1 p-4 sm:min-w-[400px] min-w-[200px]'>
          <img src={Leading} alt='leading'/>
        </div>
        <div className='flex-1 mt-4 sm:py-10 p-8'>
          <p className='text-4xl leading-[56px] font-bold py-4 max-w-[65%]'>
            Leading healthcare providers
          </p>
          <p className='text-[18px] leading-7 text-secondary max-w-[65%]'>
            Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver
          </p>
          <button className='w-[200px] h-[56px] border-button border-[1.45px] rounded-[55px] text-button text-[18px] font-bold text-center mt-8'>Learn more</button>
        </div>
      </div>

      <div className='flex w-full sm:m-16 p-4 sm:flex-row-reverse flex-col'>

        <div className='flex-1 p-4 sm:min-w-[400px] min-w-[200px] sm:mr-32'>
          <img src={Download} alt='download'/>
        </div>
        <div className='flex-1 mt-4 sm:py-10 sm:ml-8 p-8 sm:gap-8'>
          <p className='text-4xl leading-[56px] font-bold py-4 max-w-[65%]'>
            Download our mobile apps
          </p>
          <p className='text-[18px] leading-7 text-secondary max-w-[65%]'>
            Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely          </p>
          <button className='w-[200px] h-[56px] border-button border-[1.45px] rounded-[55px] text-button text-[18px] font-bold text-center mt-8'>Learn more</button>
        </div>
        
      </div>
    </div>
  )
}

export default Deatils