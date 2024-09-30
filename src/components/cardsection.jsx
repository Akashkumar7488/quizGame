import React from 'react'
import ComputerCards from './computercards'
import Physicscard from '../components/physicscard'
import Sportscard from '../components/sportscard'
import Datasciencecard from '../components/Datasciencecard'

const Cardsection = () => {
  return (
    <div className='w-full bg-[#283048] relative pt-10'> 
      <div className='flex justify-center items-center w-[90%] rounded-[10px] border-2 border-gray-300 bg-[#1488CC] mx-auto '>
        <div className='w-full sm:w-fit rounded-md '>
          <div className='sm:flex w-full sm:w-fit justify-center items-center gap-3 px-5 py-3 rounded-[15px] sm:border-[1px] m-5'>
            <input className='placeholder:text-black bg-white rounded-md font-[Montserrat] py-3 px-5 shadow-sm focus:outline-none' type="number" placeholder='Enter Game Code' />
            <button className='relative font-[Montserrat] bg-[#171717] rounded-md px-5 py-3 text-white '>Join Game</button>
          </div>
        </div>
      </div>
      
      {/* Computer Section */}
      <div className='flex justify-between items-center mb-2 w-full px-5 sm:px-20 pt-4'>
        <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl'>Computer</h1>
        <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700]'>View More</button>
      </div>
      <div className='flex justify-center gap-10 flex-wrap'>
        <ComputerCards />
      </div>
      
      {/* Repeat for Sports, Physics, and Data Science */}
      <div className='flex justify-between items-center mb-2 w-full px-5 sm:px-20 pt-4'>
        <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl'>Sports</h1>
        <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700]'>View More</button>
      </div>
      <div className='flex justify-center gap-10 flex-wrap'>
        <Sportscard />
      </div>

      {/* Physics Section */}
      <div className='flex justify-between items-center mb-2 w-full px-5 sm:px-20 pt-4'>
        <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl'>Physics</h1>
        <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700]'>View More</button>
      </div>
      <div className='flex justify-center gap-10 flex-wrap'>
        <Physicscard />
      </div>

      {/* Data Science Section */}
      <div className='flex justify-between items-center mb-2 w-full px-5 sm:px-20 pt-4'>
        <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl'>Data Science</h1>
        <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700]'>View More</button>
      </div>
      <div className='flex justify-center gap-10 flex-wrap'>
        <Datasciencecard />
      </div>
    </div>
  )
}

export default Cardsection
