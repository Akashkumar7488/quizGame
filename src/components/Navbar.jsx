// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// const Navbar = ({ className = '' }) => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const handleNav = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <nav className={`fixed w-full h-20 shadow-xl bg-blue-400 ${className}`}>
//             <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
//                 {/* Left Part */}
//                 <Link href='/' className='font-serif text-yellow-400 text-2xl'>𝐐𝐔𝚰𝐙𝐀𝐑𝐃</Link>
                
//                 {/* Right Part */}
//                 <div className='hidden sm:flex'>
//                     <ul className='flex'>
//                         <Link href='/quiz'>
//                             <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Live Quiz</li>
//                         </Link>
//                         <Link href='/default'>
//                             <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Grade</li>
//                         </Link>
//                         <Link href='/login'>
//                             <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Login</li>
//                         </Link>
//                         <Link href='/register'>
//                             <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Register</li>
//                         </Link>
//                     </ul>
//                 </div>
                
//                 {/* Mobile Menu Icon */}
//                 <div onClick={handleNav} className='sm:hidden cursor-pointer'>
//                     <AiOutlineMenu size={35} />
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`fixed left-0 top-0 w-full h-screen bg-[#3a92d6] p-10 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>
//                 <div className='flex w-full items-center justify-end'>
//                     <div onClick={handleNav} className='cursor-pointer'>
//                         <AiOutlineClose size={35} />
//                     </div>
//                 </div>
//                 <div className="flex-col py-4">
//                     <ul>
//                         <Link href='/default'>
//                             <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Default</li>
//                         </Link>
//                         <Link href='/quiz'>
//                             <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Live Quiz</li>
//                         </Link>
//                         <Link href='/login'>
//                             <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Login</li>
//                         </Link>
//                         <Link href='/register'>
//                             <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Register</li>
//                         </Link>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




// src/components/Navbar.js
"use client";
import React from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useAuth } from '@/components/context/AuthContext'; // Ensure this path is correct

const Navbar = ({ className = '' }) => {
    const { isAuthenticated, logout } = useAuth(); // Get authentication state and logout function
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleLogout = async () => {
        await logout(); // Call the logout function from context
        setMenuOpen(false); // Close the menu after logging out
        // Optionally redirect or handle additional logic if needed
    };

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`fixed w-full h-20 shadow-xl bg-blue-400 ${className}`}>
            <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
                {/* Left Part */}
                <Link href='/' className='font-serif text-yellow-400 text-2xl'>𝐐𝐔𝚰𝐙𝐀𝐑𝐃</Link>
                
                {/* Right Part */}
                <div className='hidden sm:flex'>
                    <ul className='flex'>
                        <Link href='/quiz'>
                            <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Live Quiz</li>
                        </Link>
                        <Link href='/default'>
                            <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Grade</li>
                        </Link>
                        {!isAuthenticated ? (
                            <>
                                <Link href='/login'>
                                    <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Login</li>
                                </Link>
                                <Link href='/register'>
                                    <li className='ml-10 text-yellow-400 hover:text-white text-2xl'>Register</li>
                                </Link>
                            </>
                        ) : (
                            <li className='ml-10 text-yellow-400 hover:text-white text-2xl cursor-pointer' onClick={handleLogout}>Logout</li>
                        )}
                    </ul>
                </div>
                
                {/* Mobile Menu Icon */}
                <div onClick={handleNav} className='sm:hidden cursor-pointer'>
                    <AiOutlineMenu size={35} />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed left-0 top-0 w-full h-screen bg-[#3a92d6] p-10 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-[-100%]"}`}>
                <div className='flex w-full items-center justify-end'>
                    <div onClick={handleNav} className='cursor-pointer'>
                        <AiOutlineClose size={35} />
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href='/default'>
                            <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Default</li>
                        </Link>
                        <Link href='/quiz'>
                            <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Live Quiz</li>
                        </Link>
                        {!isAuthenticated ? (
                            <>
                                <Link href='/login'>
                                    <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Login</li>
                                </Link>
                                <Link href='/register'>
                                    <li onClick={() => setMenuOpen(false)} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4'>Register</li>
                                </Link>
                            </>
                        ) : (
                            <li onClick={handleLogout} className='ml-10 text-yellow-400 hover:text-white text-2xl py-4 cursor-pointer'>Logout</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
