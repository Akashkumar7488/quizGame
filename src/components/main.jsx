// import React from 'react';
// import Image from 'next/image';
// import kid from '../image/kid.png';

// const Main = () => {
//     return (
//         <main className='w-full bg-[#1488CC] min-h-[calc(100vh-100px)] flex flex-col justify-center'>
//             <div className='flex flex-col-reverse sm:flex-row justify-between items-center h-full w-full px-4 2xl:px-16'>
//                 {/* Left Part */}
//                 <Image
//                     src={kid}
//                     alt='kid'
//                     height='300'
//                     className='cursor-pointer mt-10 sm:mt-0 sm:ml-20'
//                     priority='true'
//                 />
//                 {/* Right Part */}
//                 <div className='text-center sm:text-left px-5 pb-10 mt-10 sm:mt-0 sm:w-1/2'>
//                     <h1 className='text-white font-[Montserrat] text-4xl sm:text-5xl lg:text-6xl mb-4 mt-10'>Play Quiz</h1>
//                     <p className='text-base text-white font-medium font-[Montserrat] sm:mt-6 sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto sm:max-w-none text-start'>
//                         Welcome to Quizard, where knowledge meets fun! Unleash your intellect with our captivating quizzes spanning various topics. Challenge yourself, compete with friends, and embark on a journey of discovery. Engage in brain-teasing trivia that entertains and educates. Quizard - Where every question unlocks a world of possibilities!
//                     </p>
//                     <a href="/gamesection">
//                         <button className='mt-6 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded px-6 py-3 text-lg font-[Montserrat] transition-all duration-300'>
//                             Start Quiz
//                         </button>
//                     </a>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default Main;



// "use client";

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import kid from '../image/kid.png';

// const Main = () => {
//     const router = useRouter();
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const checkAuthStatus = () => {
//             // Check for a token in localStorage
//             const token = localStorage.getItem('authToken');
//             if (token) {
//                 setIsLoggedIn(true);
//             } else {
//                 setIsLoggedIn(false);
//             }
//         };

//         checkAuthStatus();

//         // Set up an event listener for storage changes
//         window.addEventListener('storage', checkAuthStatus);

//         // Clean up the event listener
//         return () => {
//             window.removeEventListener('storage', checkAuthStatus);
//         };
//     }, []);

//     const handleStartQuiz = () => {
//         if (isLoggedIn) {
//             router.push('/gamesection');
//         } else {
//             // Store the intended destination
//             localStorage.setItem('intendedDestination', '/gamesection');
//             router.push('/login');
//         }
//     };

//     return (
//         <main className='w-full bg-[#1488CC] min-h-[calc(100vh-100px)] flex flex-col justify-center'>
//             <div className='flex flex-col-reverse sm:flex-row justify-between items-center h-full w-full px-4 2xl:px-16'>
//                 {/* Left Part */}
//                 <Image
//                     src={kid}
//                     alt='kid'
//                     height='300'
//                     className='cursor-pointer mt-10 sm:mt-0 sm:ml-20'
//                     priority={true}
//                 />
//                 {/* Right Part */}
//                 <div className='text-center sm:text-left px-5 pb-10 mt-10 sm:mt-0 sm:w-1/2'>
//                     <h1 className='text-white font-[Montserrat] text-4xl sm:text-5xl lg:text-6xl mb-4 mt-10'>Play Quiz</h1>
//                     <p className='text-base text-white font-medium font-[Montserrat] sm:mt-6 sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto sm:max-w-none text-start'>
//                         Welcome to Quizard, where knowledge meets fun! Unleash your intellect with our captivating quizzes spanning various topics. Challenge yourself, compete with friends, and embark on a journey of discovery. Engage in brain-teasing trivia that entertains and educates. Quizard - Where every question unlocks a world of possibilities!
//                     </p>
//                     <button 
//                         onClick={handleStartQuiz}
//                         className='mt-6 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded px-6 py-3 text-lg font-[Montserrat] transition-all duration-300'
//                     >
//                         Start Quiz
//                     </button>
//                 </div>
//             </div>
//         </main>
//     );
// }

// export default Main;



"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import kid from '../image/kid.png';

const Main = () => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to check if the user is authenticated
    const checkAuthStatus = () => {
        const token = localStorage.getItem('authToken');
        return !!token; // returns true if the token exists
    };

    useEffect(() => {
        // Set initial login state on component mount
        const loggedIn = checkAuthStatus();
        setIsLoggedIn(loggedIn);
    }, []); // Runs only once on mount

    const handleStartQuiz = () => {
        // Recheck login status when button is clicked
        const loggedIn = checkAuthStatus();
        if (loggedIn) {
            // Redirect to game section if logged in
            router.push('/gamesection');
        } else {
            // Store the intended destination and redirect to login if not logged in
            localStorage.setItem('intendedDestination', '/gamesection');
            router.push('/login');
        }
    };

    return (
        <main className="w-full bg-[#1488CC] min-h-[calc(100vh-100px)] flex flex-col justify-center">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center h-full w-full px-4 2xl:px-16">
                {/* Left Part */}
                <Image
                    src={kid}
                    alt="kid"
                    height="300"
                    className="cursor-pointer mt-10 sm:mt-0 sm:ml-20"
                    priority={true}
                />
                {/* Right Part */}
                <div className="text-center sm:text-left px-5 pb-10 mt-10 sm:mt-0 sm:w-1/2">
                    <h1 className="text-white font-[Montserrat] text-4xl sm:text-5xl lg:text-6xl mb-4 mt-10">
                        Play Quiz
                    </h1>
                    <p className="text-base text-white font-medium font-[Montserrat] sm:mt-6 sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto sm:max-w-none text-start">
                        Welcome to Quizard, where knowledge meets fun! Unleash your intellect with our captivating quizzes spanning various topics. Challenge yourself, compete with friends, and embark on a journey of discovery. Engage in brain-teasing trivia that entertains and educates. Quizard - Where every question unlocks a world of possibilities!
                    </p>
                    <button
                        onClick={handleStartQuiz}
                        className="mt-6 bg-yellow-400 text-gray-900 hover:bg-yellow-500 rounded px-6 py-3 text-lg font-[Montserrat] transition-all duration-300"
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Main;
