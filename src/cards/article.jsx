import React from 'react'

const article = ({data}) => {
    const {img,title,description} = data;
  return (
    <div className='w-[300px] sm:w-[350px] sm:h-[512px] h-[450px] flex flex-col rounded-[20px] shadow-lg font-muli text-black'>
        <div>
            <img src={img} alt='article1' className='rounded-t-[20px]'/>
        </div>
        <div className='mx-2 px-2 mt-4 max-w-[75%]'>
            <p className='text-[21px] leading-7 font-bold'>{title}</p>
            <p className='text-[16px] leading-7 text-secondary'>{description}</p>
            <p className='text-[18px] leading-7 text-button cursor-pointer mt-2'>Read more</p>
        </div>
    </div>
  )
}

export default article