"use client";
import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const Navbar = ({className = ''}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
return (
    
    <nav className={`fixed w-full h-20 shadow-xl bg-blue-400 ${className}`}>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            {/* left part */}
            <Link href='/' className='font-serif text-yellow-400 text-2xl'>𝐐𝐔𝚰𝐙𝐀𝐑𝐃</Link>
            {/* right part */}
            <div className='hidden sm:flex'>
                <ul className='hidden sm:flex'>
                    <Link href='/quiz'>
                    <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Live Quiz</li>
                    </Link>
                    <Link href='/default'>
                    <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Grade</li>
                    </Link>
                    <Link href='/login'>
                    <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Login</li>
                    </Link>
                    <Link href='/register'>
                    <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Register</li>
                    </Link>
                </ul>
            </div>
            <div onClick={handleNav} className='sm:hidden cursor-pointer pl-24'><AiOutlineMenu size={35} className='mr-60'/>
            </div>
        </div>
        <div className={
            menuOpen
            ? "fixed left-0 top-0 w-full sm:hidden h-screen bg-[#3a92d6] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
        <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav} className='cursor-pointer'><AiOutlineClose size={35}/>
            </div>
            </div>
            <div className="flex-col py-4">
                <ul>
                <Link href='/default'>
                    <li onClick={() => setMenuOpen(false)} 
                    className='ml-10 text-yellow-400 hover:text-white text-2xl  py-4'>Default</li>
                    </Link>
                    <Link href='/livequiz'>
                    <li onClick={() => setMenuOpen(false)} 
                    className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Live Quiz</li>
                    </Link>
                    <Link href='/login'>
                    <li onClick={() => setMenuOpen(false)} 
                    className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Login</li>
                    </Link>
                    <Link href='/register'>
                    <li onClick={() => setMenuOpen(false)}
                    className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Register</li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
