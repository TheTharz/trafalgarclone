import React from 'react'
import Article from '../cards/article'
import blogPosts from '../constants/articles'

const Blog = () => {
  return (
    <div className='mx-8 sm:mx-16 p-8 sm:p-16 font-muli flex flex-col items-center'>
      <div className='text-xl sm:text-4xl font-bold mb-8 sm:mb-12'>
        <p className='text-center'>Check out our latest article</p>
      </div>
      <div className='flex gap-4 flex-col md:flex-row'>
        {blogPosts.map((article) =>(
          <Article data={article}/>
        ))}
      </div>
      <div>
        <button className='sm:w-[200px] w-[150px] sm:h-[56px] h-[40px] border-button border-[1.45px] rounded-[55px] text-button text-[16px] sm:text-[18px] font-bold text-center mt-8'>View all</button>
      </div>
    </div>
  )
}

export default Blog