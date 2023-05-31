import React from 'react'

const featurecard = ({data}) => {
  const {img,topic,description} = data;

  return (
    <div className='relative m-1 p-1 font-muli w-[350px] h-[354px] rounded-[20px] overflow-hidden custom-shadow transform transition-transform md:duration-300 md:hover:scale-110'>

      <img src={img} alt='feature' className='absolute top-[54px] md:left-[37px] left-[38%]'/>

      <div className='py-4 absolute top-[150px] md:left-[37px]'>

        <p className='font-[700] text-[24px] leading-[56px] text-center md:text-left'>
          {topic}
        </p>
        <p className='text-[16px] leading-[28px] text-secondary mr-5 text-center md:text-left'>
          {description}
        </p>

      </div>

    </div>
  )
}

export default featurecard