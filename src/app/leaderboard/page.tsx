import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface LeaderboardUser {
    username: string;
    email: string;
    score: number;
  }

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get<LeaderboardUser[]>('/api/users/leaderboard'); // Fetch leaderboard data
        setLeaderboard(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard', error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="bg-[#203A43] min-h-screen pt-[70px] flex flex-col justify-start items-center relative">
      <h1 className="text-white text-3xl font-[Montserrat] mb-4">Leaderboard</h1>
      <table className="table-auto w-[80vw] text-white">
        <thead>
          <tr className="bg-gray-700">
            <th className="p-4">Rank</th>
            <th className="p-4">Username</th>
            <th className="p-4">Email</th>
            <th className="p-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index} className="text-center">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{user.username}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
