// import { NextResponse } from 'next/server';
// import { connect } from "@/database/dbConnection";
// import Score from '@/modal/scoreModal';

// export async function GET() {
//   try {
//     await connect();

//     const leaderboard = await Score.find()
//       .sort({ score: -1 })
//       .limit(10)
//       .populate('userId', 'name')
//       .lean();

//     return NextResponse.json(leaderboard);
//   } catch (error:any) {
//     console.error('Error submitting score:', error.message);
//     console.error(error.stack);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
  
// }



// pages/api/users/leaderboard.js
import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/database/dbConnection';
import Score from '@/modal/scoreModal'; // Import your score model
import User from '@/modal/userModal'; // Import your user model

export async function GET(request: NextRequest) {
  try {
    await connect();

    // Fetch the leaderboard with populated username
    const leaderboard = await Score.find()
      .populate('userId', 'username') // Fetch 'username' from User model
      .sort({ score: -1 }) // Sort by score in descending order
      // .limit(10); // Limit to top 10 scores

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}



