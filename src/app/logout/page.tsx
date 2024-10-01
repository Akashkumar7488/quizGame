"use client";
import React from 'react'

import { useRouter } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '@/components/context/AuthContext';

const Logoutpage = () => {
    const router = useRouter();
    const { logout } = useAuth();
    const logoutHandler = async () => {
        try {
            const response = await axios.get("/api/users/logout");
            logout();
            router.push("/login")
            toast.success(response.data.message);
        } catch (error:any) {
            toast.error(error.message.data.message);
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Logoutpage;
