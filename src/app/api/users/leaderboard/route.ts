import { NextResponse } from 'next/server';
import { connect } from "@/database/dbConnection";
import Score from '@/modal/scoreModal';

export async function GET() {
  try {
    await connect();

    const leaderboard = await Score.find()
      .sort({ score: -1 })
      .limit(10)
      .populate('userId', 'name')
      .lean();

    return NextResponse.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}