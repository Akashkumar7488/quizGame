// "use client";
// import React, {useEffect, useState} from 'react'
// import Link from 'next/link'
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import Logo from '../../image/logo.svg'
// import Navbar from '@/components/Navbar';
// import Image from 'next/image';

// const Loginpage = () => {
//     const router = useRouter();
//     const [user, setUser] = useState({
//         email:"",
//         password:""
//     })
//     const [disable, setDisable] = useState(true);

//     const submitHandler = async() => {
//         // console.log(user)
//         try {
//             const res = await axios.post("/api/users/login", user);
//             router.push("/");
//                 toast.success(res.data.message);
//                 console.log(res.data.message);
//         }
//         catch (error:any) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }

//     useEffect(()=> {
//     if(user.email.length > 0 && user.password.length > 0) {
//         setDisable(false);
//     } else {
//         setDisable(true);
//     }
//     },[user])
// return (
//     <>
//     <Navbar/>
//     <div className='flex bg-[#669bbc] min-h-screen justify-center items-center'>
//     <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
//     <Image src={Logo} alt='logo' className='h-40'/>
//         <h1 className='font-bold text-center text-xl font-[Montserrat]'>LOGIN</h1>
//         <div className='flex flex-col my-4'>
//             <label>Email</label>
//             <input 
//             type="email" 
//             value={user.email}
//             onChange={(e) =>setUser({ ...user, email: e.target.value})}
//             className='border-2 outline-none border-gray-500 rounded-md px-2 py-1' required/>
//         </div>
//         <div className='flex flex-col my-4'>
//             <label>Password</label>
//             <input 
//             type="password" 
//             value={user.password}
//             onChange={(e) =>setUser({ ...user, password: e.target.value})}
//             className='border-2 outline-none border-gray-500 rounded-md px-2 py-1' required/>
//         </div>
//         <button onClick={submitHandler} className={`${disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#3CA55C]"} w-full py-1 my-2 rounded-md`}>Login</button>
//         <p className='mt-4'>Don't have an Account? <Link className='font-bold hover:underline' href='/register'>SignUp</Link></p>
//     </div>
//     </div>
//     </>
// )
// }

// export default Loginpage




"use client";
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Logo from '../../image/logo.svg'
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useAuth } from '@/components/context/AuthContext';

const Loginpage = () => {
    const router = useRouter();
    const { login } = useAuth();
    const [user, setUser] = useState({
        email:"",
        password:""
    })
    const [disable, setDisable] = useState(true);

//     const submitHandler = async () => {
//     try {
//         const res = await axios.post("/api/users/login", user);
        
//         // Log the entire response to check structure
//         console.log("Response:", res.data);

//         const userId = res.data.userId; // Adjust this based on your API response structure
//         localStorage.setItem("userId", userId); // Store user ID in local storage
//         console.log("Stored User ID:", localStorage.getItem("userId")); // Confirm it's stored

//         login(); // Call your login function
//         toast.success(res.data.message);
//         console.log(res.data.message);
//         router.push("/"); // Redirect after successful login
//     } catch (error: any) {
//         console.log(error);
//         toast.error(error.response.data.message);
//     }
// };


const submitHandler = async () => {
    try {
        const res = await axios.post("/api/users/login", user);
        
        // Log the entire response to check structure
        console.log("Response:", res.data);

        if (res.data.success) {
            const userId = res.data.userId; // This is now an object
            const id = userId._id; // Extract the _id
            const username = userId.username; // Extract the username
            const authToken = res.data.token; //extract authToken to verify user login then it send me to gamesection

            // Check if authToken exists
            console.log("Auth Token:", authToken); 

            if (!authToken) {
                console.error("Auth token is missing in the response!");
            }

            // Store the user ID and username in local storage
            
            localStorage.setItem("userId", id);
            localStorage.setItem("username", username);
            localStorage.setItem("authToken", authToken); // Store the auth token

            console.log("Stored User ID:", localStorage.getItem("userId")); // Confirm it's stored
            console.log("Stored Username:", localStorage.getItem("username")); // Confirm it's stored
            console.log("Stored Auth Token:", localStorage.getItem("authToken")); // Confirm it's stored
            

            login(); // Call your login function
            toast.success(res.data.message);
            console.log(res.data.message);
            router.push("/"); // Redirect after successful login
        } else {
            toast.error("Login failed");
        }
    } catch (error: any) {
        console.log(error);
        toast.error(error.response.data.message);
    }
};


    useEffect(()=> {
    if(user.email.length > 0 && user.password.length > 0) {
        setDisable(false);
    } else {
        setDisable(true);
    }
    },[user])

return (
    <>
    <Navbar/>
    <div className='flex bg-[#669bbc] min-h-screen justify-center items-center'>
    <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
    <Image src={Logo} alt='logo' className='h-40'/>
        <h1 className='font-bold text-center text-xl font-[Montserrat]'>LOGIN</h1>
        <div className='flex flex-col my-4'>
            <label>Email</label>
            <input 
            type="email" 
            value={user.email}
            onChange={(e) =>setUser({ ...user, email: e.target.value})}
            className='border-2 outline-none border-gray-500 rounded-md px-2 py-1' required/>
        </div>
        <div className='flex flex-col my-4'>
            <label>Password</label>
            <input 
            type="password" 
            value={user.password}
            onChange={(e) =>setUser({ ...user, password: e.target.value})}
            className='border-2 outline-none border-gray-500 rounded-md px-2 py-1' required/>
        </div>
        <button onClick={submitHandler} className={`${disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#3CA55C]"} w-full py-1 my-2 rounded-md`}>Login</button>
        <p className='mt-4'>Don't have an Account? <Link className='font-bold hover:underline' href='/register'>SignUp</Link></p>
    </div>
    </div>
    </>
)
}

export default Loginpage

