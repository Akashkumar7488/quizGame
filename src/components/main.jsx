import React from 'react'
import Image from 'next/image';
import kid from '../image/kid.png'

const Main = () => {
  return (
    <main className='w-full bg-[#1488CC] min-h-[calc(100vh-100px)]'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
          {/* left part */}
          <Image
          src={kid}
          alt='kid'
          height='300'
          className='cursor-pointer mt-40 hidden sm:flex ml-40'
          priority='true'
          />
          {/* right part */}
          <div className='text-center px-5 pb-10  mt-40 mr-40'>
            <h1 className='text-white font-[Montserrat] text-4xl sm:text-5xl lg:text-6xl mb-4'>Play Quiz</h1>
            <p className='text-base text-white font-medium font-[Montserrat] sm:mt-6 sm:text-lg lg:text-xl leading-relaxed max-w-96 mx-auto text-start'>
            Welcome to Quizard, where knowledge meets fun! Unleash your intellect with our captivating quizzes spanning various topics. Challenge yourself, compete with friends, and embark on a journey of discovery. Engage in brain-teasing trivia that entertains and educates. Quizard - Where every question unlocks a world of possibilities!
            </p>
            <a href="/livequiz">
            <button className='mt-6 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded px-6 py-3 text-lg font-[Montserrat] transition-all duration-300'>
            Start Quiz
            </button>
            </a>
          </div>

        </div>
    </main>
  )
}

export default Main;
