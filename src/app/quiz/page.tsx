// import Footer from '@/components/footer'
// import Navbar from '@/components/Navbar'
// import React from 'react'
// import Image from 'next/image'
// import Quiz from '../../image/quiz (1).png'
// import Link from 'next/link'

// const page = () => {
// return (
//     <div className='bg-[#203A43] pt-[70px] min-h-screen pb-[5rem] sm:pb-5 flex flex-col justify-start items-center relative'>
//     <Navbar className='-mt-20 bg-[#203A43]'/>
//     <Image src={Quiz} alt='quiz' className='h-[15vh] sm:h-[30vh] pt-4 sm:px-5 relative z-10'/>
//     <h1 className='text-center px-1 text-2xl font-[Montserrat] sm:text-3xl mt-[20px] sm:mt-8 text-white relative z-10'>Universe Quiz-1</h1>
//     <p className='text-center mt-[10px] font-[Montserrat] sm:mt-5 text-white relative z-10'>Answer these simple questions correctly and earn coins</p>
//     <div className='text-center mt-[10px] sm:mt-5 text-white relative z-10 '>
//         <span className='text-[15px] sm:text-lg font-[Montserrat]'>Diffuculty Level:</span>
//         <span><button className='font-semibold text-[#F37335] text-[15px] font-[Montserrat] sm:text-lg py-1 px-2 rounded ml-2 relative z-10 bg-white'>MEDIUM</button></span>
//     </div>
//     <div className='flex justify-center items-center gap-2 my-2 relative z-10'>
//         <span className='bg-[#F37335] rounded-full h-5 w-5 text-center font-semibold'>?</span>
//         <span className='text-white text-[15px] font-[Montserrat]'>10 Questions</span>
//     </div>
//     <div className='flex flex-col gap-4 w-full'>
//     <Link href='/quizGame'>
//     <div className='w-[100%] flex justify-center items-center text-[15px] relative z-10'>
//     <button className='text-white bg-[#2980b9] hover:bg-[#3b7ba6] font-semibold font-[Montserrat] rounded-[50px] py-1 sm:py-2 px-6 w-[20%] sm:w-[10%] lg:w-[15%] flex items-center justify-center mt-4 border-[2px]'>Play</button>
//     </div>
//     <div className='w-[100%] flex justify-center items-center text-[15px] relative z-10'>
//     <button className='text-white bg-[#de6579] hover:bg-[#ca5266] font-semibold font-[Montserrat] rounded-[50px] py-1 sm:py-2 px-6 w-[20%] sm:w-[10%] lg:w-[15%] flex items-center justify-center mt-2 mb-6 border-[2px]'>Play With Friends</button>
//     </div>
//     </Link>
//     </div>
//     <Footer/>
//     </div>
// )
// }

// export default page








"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import Quiz from '../../image/quiz (1).png';

const page = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className='bg-[#203A43] pt-[70px] min-h-screen pb-[5rem] sm:pb-5 flex flex-col justify-start items-center relative'>
      <Navbar className='-mt-20 bg-[#203A43]'/>
      <Image src={Quiz} alt='quiz' className='h-[15vh] sm:h-[30vh] pt-4 sm:px-5 relative z-10'/>
      <h1 className='text-center px-1 text-2xl font-[Montserrat] sm:text-3xl mt-[20px] sm:mt-8 text-white relative z-10'>Universe Quiz-1</h1>
      <p className='text-center mt-[10px] font-[Montserrat] sm:mt-5 text-white relative z-10'>Answer these simple questions correctly and earn coins</p>
      <div className='text-center mt-[10px] sm:mt-5 text-white relative z-10 '>
        <span className='text-[15px] sm:text-lg font-[Montserrat]'>Diffuculty Level:</span>
        <span><button className='font-semibold text-[#F37335] text-[15px] font-[Montserrat] sm:text-lg py-1 px-2 rounded ml-2 relative z-10 bg-white'>MEDIUM</button></span>
      </div>
      <div className='flex justify-center items-center gap-2 my-2 relative z-10'>
        <span className='bg-[#F37335] rounded-full h-5 w-5 text-center font-semibold'>?</span>
        <span className='text-white text-[15px] font-[Montserrat]'>10 Questions</span>
      </div>
      <div className='flex flex-col gap-4 w-full'>
        <Link href={`/quizGame?category=${encodeURIComponent(category || '')}`}>
          <div className='w-[100%] flex justify-center items-center text-[15px] relative z-10'>
            <button className='text-white bg-[#2980b9] hover:bg-[#3b7ba6] font-semibold font-[Montserrat] rounded-[50px] py-1 sm:py-2 px-6 w-[20%] sm:w-[10%] lg:w-[15%] flex items-center justify-center mt-4 border-[2px]'>Play</button>
          </div>
        </Link>
        <div className='w-[100%] flex justify-center items-center text-[15px] relative z-10'>
          <button className='text-white bg-[#de6579] hover:bg-[#ca5266] font-semibold font-[Montserrat] rounded-[50px] py-1 sm:py-2 px-6 w-[20%] sm:w-[10%] lg:w-[15%] flex items-center justify-center mt-2 mb-6 border-[2px]'>Play With Friends</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default page;