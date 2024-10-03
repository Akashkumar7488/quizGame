// // src/components/context/AuthContext.js
// "use client"
// import React, { createContext, useContext, useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const login = () => setIsAuthenticated(true);
    
//     const logout = async () => {
//         try {
//             await axios.get("/api/users/logout");
//             setIsAuthenticated(false);
//             toast.success("Logout Successfully!!");
//         } catch (error) {
//             toast.error(error.message);
//         }
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);








// src/components/context/AuthContext.js
"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if there's an auth token in localStorage on component mount
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = () => setIsAuthenticated(true);
    
    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            setIsAuthenticated(false);
            
            // Clear localStorage
            localStorage.removeItem('authToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('username');
            
            toast.success("Logout Successfully!!");
        } catch (error) {
            console.error("Logout error:", error);
            toast.error(error.message || "An error occurred during logout");
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);