import React from 'react'
import ComputerCards from '../../components/computercards'
import Physicscard from '../../components/physicscard'
import Sportscard from '../../components/sportscard'
import Datasciencecard from '../../components/Datasciencecard'
import Navbar from '../../components/Navbar'


const page = () => {
return (
    <>
    <div className='w-full bg-[#283048] relative pt-10'> 
        <Navbar className=' top-0 left-0 right-0'/>
    <div className='flex justify-center items-center w-[90%] rounded-[10px] border-2 border-gray-300 bg-[#1488CC] mx-auto mt-20'>
        <div className='w-full sm:w-fit rounded-md'>
        <div className='sm:flex w-full sm:w-fit justify-center items-center gap-3 px-5 py-3 rounded-[15px] sm:border-[1px] m-5'>
            <input className='placeholder:text-black bg-white rounded-md font-[Montserrat] py-3 px-5 shadow-sm focus:outline-none' type="number" placeholder='Enter Game Code' />
            <button className='relative font-[Montserrat] bg-[#171717] rounded-md px-5 py-3 text-white'>Join Game</button>
        </div>
        </div>
    </div>
    <div className='flex justify-between items-center mb-2 w-full px-[15px]  md:px-[75px]  pt-4'>
    <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl '>Computer</h1>
    <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700] sm:text-base sm:px-[12px]'>View More</button>
    </div>
    <div className='flex gap-10'>
    <ComputerCards/>
    </div>
    <div className='flex justify-between items-center mb-2 w-full px-[15px]  md:px-[75px]  pt-4'>
    <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl '>Sports</h1>
    <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700] sm:text-base sm:px-[12px]'>View More</button>
    </div>
    <div className='flex gap-10'>
    <Sportscard/>
    </div>
    <div className='flex justify-between items-center mb-2 w-full px-[15px]  md:px-[75px]  pt-4'>
    <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl '>Physics</h1>
    <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700] sm:text-base sm:px-[12px]'>View More</button>
    </div>
    <div className='flex gap-10'>
    <Physicscard/>
    </div>
    <div className='flex justify-between items-center mb-2 w-full px-[15px]  md:px-[75px]  pt-4'>
    <h1 className='text-[15px] cursor-pointer text-white font-[Montserrat] md:text-3xl '>Data Science</h1>
    <button type='button' className='text-white font-[Montserrat] bg-gray-500 px-5 py-2 rounded-md font-[700] sm:text-base sm:px-[12px]'>View More</button>
    </div>
    <div className='flex gap-10'>
    <Datasciencecard/>
    </div>
    </div>
    </>
)
}

export default page
