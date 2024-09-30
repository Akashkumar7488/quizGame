import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='w-full h-20 bg-[#2c3e50] border-t border-white flex justify-between items-center px-4 2xl:px-16 mt-auto'>
            <div className='text-white'>Quizard © Copyright 2024. All rights reserved.</div>
            <div className='hidden sm:flex'>
                <ul className='flex space-x-10'>
                    <Link href='/about'>
                        <li className='text-white hover:text-gray-400 cursor-pointer'>About Us</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='text-white hover:text-gray-400 cursor-pointer'>Contact Us</li>
                    </Link>
                    <Link href='/privacy'>
                        <li className='text-white hover:text-gray-400 cursor-pointer'>Privacy & Cookies Policy</li>
                    </Link>
                    <Link href='/terms-condition'>
                        <li className='text-white hover:text-gray-400 cursor-pointer'>Terms and Conditions</li>
                    </Link>
                    <Link href='/disclaimer'>
                        <li className='text-white hover:text-gray-400 cursor-pointer'>Disclaimer</li>
                    </Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
