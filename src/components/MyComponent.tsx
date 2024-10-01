import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import { decode } from 'punycode';


interface DecodedToken {
  id: string;
  username: string;
  email: string;
  iat: number;
  exp: number;
}

const MyComponent: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const getUserIdFromToken = (): string | null => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUsername(decoded.username);
        setUserId(decoded.id);
        console.log(userId);
        return decoded.id || null;
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }
    return null;
  };

  useEffect(() => {
    const retrievedUserId = getUserIdFromToken();
    setUserId(retrievedUserId);
  }, []);

  return (
    <div>
      {userId ? `Welcome back ${username}` : "User not found"}
    </div>
  );
};

export default MyComponent;
