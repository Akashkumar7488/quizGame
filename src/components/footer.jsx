import React from 'react'
import Link from 'next/link';
const Footer = () => {
  return (
    <>
    <footer className='w-full h-20 shadow-xl bg-[#2c3e50] border-t border-white'>
    <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16 '>
    <div className='text-white'>Quizard © Copyright 2024 . All rights reserved.</div>
    <div className='hidden sm:flex'>
                <ul className='hidden sm:flex'>
                    <Link href='/about'>
                    <li className='ml-10 text-white'>About Us</li>
                    </Link>
                    <Link href='/contact'>
                    <li className='ml-10 text-white'>Contact Us</li>
                    </Link>
                    <Link href='/privacy'>
                    <li className='ml-10 text-white'>Privacy & Cookies Policy</li>
                    </Link>
                    <Link href='/terms-condition'>
                    <li className='ml-10 text-white'>Terms and conditions</li>
                    </Link>
                    <Link href='/disclaimer'>
                    <li className='ml-10 text-white'>Disclaimer</li>
                    </Link>
                </ul>
            </div>
    </div>
    </footer>
    </>
  )
}

export default Footer;
