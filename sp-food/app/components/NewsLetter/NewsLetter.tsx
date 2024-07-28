import React from 'react'

const NewsLetter = () => {
  return (
    <div className="pt-[5rem] pb-[5rem]">
      <div className="text-center">
        <h1 className="text-[28px] sm:text-[38px] md:text-[50px] text-black font-bold uppercase">
          join for hot offers
        </h1>
        <p className='text-black text-opacity-70 w-[85%] md:w-[60] mx-auto'>
          lorem ipsum dolor sit amet consectetur adipisicing elit.Accusantium
          iste praesentium sit in autem velit, voluptates ex dolorum ea
          necessitatibus
        </p>
        <div className='flex items-center space-x-2 mt-[3rem] justify-center'>
         <input type='email' placeholder='Email Address' className='px-5 py-4 bg-gray-400 w-[40%]
         outline-none rounded-lg placeholder:text-black' />
         <button className='px-8 py-4 bg-green-700 hover:bg-green-900 transition-all duration-200
         rounded-md text-white font-bold'>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter