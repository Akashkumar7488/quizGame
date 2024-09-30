"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import Navbar from '@/components/Navbar';
import Quiz from '../../image/quiz (1).png';

const PageContent = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div className='bg-[#203A43] pt-16 min-h-screen pb-10 flex flex-col items-center relative'>
      <Navbar className='fixed top-0 left-0 right-0 z-10 bg-[#203A43] shadow-md' />
      <Image src={Quiz} alt='quiz' className='h-[20vh] sm:h-[30vh] pt-4 px-5 relative z-10' />
      <h1 className='text-center px-4 text-xl sm:text-3xl mt-4 sm:mt-8 text-white relative z-10'>Universe Quiz-1</h1>
      <p className='text-center mt-2 sm:mt-5 text-white relative z-10'>Answer these simple questions correctly and earn coins</p>
      
      <div className='text-center mt-2 sm:mt-5 text-white relative z-10'>
        <span className='text-sm sm:text-lg font-[Montserrat]'>Difficulty Level:</span>
        <button className='font-semibold text-[#F37335] text-sm sm:text-lg py-1 px-2 rounded ml-2 bg-white'>MEDIUM</button>
      </div>
      
      <div className='flex justify-center items-center gap-1 my-2 relative z-10'>
        <span className='bg-[#F37335] rounded-full h-4 w-4 text-center font-semibold'>?</span>
        <span className='text-white text-sm sm:text-lg font-[Montserrat]'>10 Questions</span>
      </div>
      
      <div className='flex flex-col gap-4 w-full max-w-lg px-4'>
        <Link href={`/quizGame?category=${encodeURIComponent(category || '')}`}>
          <div className='w-full flex justify-center items-center'>
            <button className='text-white bg-[#2980b9] hover:bg-[#3b7ba6] font-semibold font-[Montserrat] rounded-full py-2 px-4 sm:px-6 w-full sm:w-2/3 lg:w-1/2 mt-4 border-2'>Play</button>
          </div>
        </Link>
        
        <div className='w-full flex justify-center items-center'>
          <button className='text-white bg-[#de6579] hover:bg-[#ca5266] font-semibold font-[Montserrat] rounded-full py-2 px-4 sm:px-6 w-full sm:w-2/3 lg:w-1/2 mt-2 mb-6 border-2'>Play With Friends</button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);

export default Page;
