"use client"
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Registerpage = () => {
    const router = useRouter(); 
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    })
    const [disable, setDisable] = useState(true);

    const submitHandler = async() => {
        // console.log(user)
        try {
            const res = await axios.post("/api/users/signup", user);
                router.push("/login");
                toast.success(res.data.message);
                console.log(res.data.message);
        } catch (error:any) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(()=> {
    if(user.username.length > 0 && user.email.length > 0 && user.password.length > 0) {
        setDisable(false);
    } else {
        setDisable(true);
    }
    },[user])
return (
    <div className='flex bg-[#669bbc] min-h-screen justify-center items-center'>
    <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className='font-bold text-center text-xl'>SignUp</h1>
        <div className='flex flex-col my-4'>
            <label>Username</label>
            <input 
            type="text"
            value={user.username}
            onChange={(e) =>setUser({ ...user, username: e.target.value})}
            className='border-2 outline-none border-gray-500 rounded-md px-2 py-1' required/>
        </div>
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
        <button onClick={submitHandler} className={`${disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-[#3CA55C]"} w-full py-1 my-2 rounded-md`}>SignUp</button>
        <p className='mt-4'>Already have an Account? <Link className='font-bold hover:underline' href='/login'>Login</Link></p>
    </div>
    </div>
)
}

export default Registerpage;
