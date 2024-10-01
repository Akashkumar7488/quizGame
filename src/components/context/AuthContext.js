// src/components/context/AuthContext.js
"use client"
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            setIsAuthenticated(false);
            toast.success("Logout Successfully!!");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
