import React, { useState } from 'react'
import FeatureCard from '../cards/featurecard.jsx'
import Services from '../constants/services.js'
import {AiFillLeftCircle,AiFillRightCircle} from 'react-icons/ai'
import {RxDotFilled} from 'react-icons/rx'


const Feature = () => {
  const [currIndex,setCurrIndex] = useState(0)

  const prevCard = () => {
    const isFirstCard = currIndex === 0;
    const newIndex = isFirstCard ? Services.length-1 : currIndex-1;
    setCurrIndex(newIndex);
  }

  const nextCard = () => {
    const isLastCard = currIndex === Services.length-1;
    const newIndex = isLastCard ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  }

  const goToCard = (index) => {
    setCurrIndex(index);
  }

  return (
    <div className='font-muli flex flex-col justify-center items-center sm:mt-7 md:mt-[50px] md:pt-[50px]'>
      <div className='flex items-center flex-col justify-center'>
        <h1 className='text-3xl md:text-4xl leading-[56px] font-bold mb-[20px] md:pb-[20px]'>Our services</h1>
        <p className='text-[16px] md:text-[18px] leading-[30px] text-secondary mb-[20px] mx-4 md:mx-56 px-8 md:px-16 text-center'> Provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </div>

      <div className='hidden sm:grid grid-cols-2 md:grid-cols-3 gap-10 my-5'>
        {Services.map((service)=>(
          <FeatureCard data={service} className='duration-300'/>
        ))}
      </div>

      <div className='my-5 relative group md:hidden'>
        <FeatureCard data={Services[currIndex]} className='duration-500'/>
        <div>
          <AiFillLeftCircle size={30} className='absolute top-[40%] -translate-x-0 translate-y-[-50%] left-3 text-button/50 cursor-pointer' onClick={prevCard}/>
        </div>
        <div>
          <AiFillRightCircle size={30} className='absolute top-[40%] -translate-x-0 translate-y-[-50%] right-3 text-button/50 cursor-pointer' onClick={nextCard}/>
        </div>
        <div className='flex top-4 justify-center py-2 md:hidden'>
          {Services.map((service, index) =>(
            <div className='text-2xl'
                  key={index}
                  onClick={()=>goToCard(index)}>
              <RxDotFilled/>
            </div>
          ))}
        </div>
      </div>

      <div className='my-5'>
        <button className='w-[200px] h-[56px] border-button border-[1.45px] rounded-[55px] text-button text-xl leading-[56px] font-bold text-center'>Learn more</button>
      </div>
    </div>
  )
}

export default Feature