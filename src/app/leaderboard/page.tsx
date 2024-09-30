// "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface LeaderboardUser {
//     username: string;
//     email: string;
//     score: number;
//   }

// const Leaderboard = () => {
//   const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);

//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         const response = await axios.get<LeaderboardUser[]>('/api/users/leaderboard'); // Fetch leaderboard data
//         setLeaderboard(response.data);
//       } catch (error) {
//         console.error('Error fetching leaderboard', error);
//       }
//     };

//     fetchLeaderboard();
//   }, []);

//   return (
//     <div className="bg-[#203A43] min-h-screen pt-[70px] flex flex-col justify-start items-center relative">
//       <h1 className="text-white text-3xl font-[Montserrat] mb-4">Leaderboard</h1>
//       <table className="table-auto w-[80vw] text-white">
//         <thead>
//           <tr className="bg-gray-700">
//             <th className="p-4">Rank</th>
//             <th className="p-4">Username</th>
//             <th className="p-4">Email</th>
//             <th className="p-4">Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaderboard.map((user, index) => (
//             <tr key={index} className="text-center">
//               <td className="p-4">{index + 1}</td>
//               <td className="p-4">{user.username}</td>
//               <td className="p-4">{user.email}</td>
//               <td className="p-4">{user.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Leaderboard;









"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface LeaderboardEntry {
  _id: string;
  userId: {
    _id: string;
    name: string;
  };
  score: number;
  createdAt: string;
}

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get<LeaderboardEntry[]>('/api/leaderboard');
        setLeaderboard(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) {
    return <div>Loading leaderboard...</div>;
  }

  return (
    <div className="bg-[#203A43] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Leaderboard</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leaderboard.map((entry, index) => (
              <tr key={entry._id}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.userId.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{entry.score}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(entry.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardPage;