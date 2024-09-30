// import { NextRequest, NextResponse } from 'next/server';
// import { connect } from "@/database/dbConnection";
// import Score from '@/modal/scoreModal';

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();
//     const { userId, score } = body as { userId: string; score: number };

//     if (!userId || score === undefined) {
//       return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }

//     await connect();

//     const newScore = new Score({
//       userId,
//       score,
//     });

//     await newScore.save();

//     return NextResponse.json({ message: 'Score submitted successfully' }, { status: 201 });
//   } catch (error) {
//     console.error('Error submitting score:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }





















import { NextRequest, NextResponse } from 'next/server';
import { connect } from "@/database/dbConnection";
import Score from '@/modal/scoreModal';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { score } = body as { score: number };

    // Validate that the score is provided
    if (score === undefined) {
      return NextResponse.json({ error: 'Missing required score' }, { status: 400 });
    }

    await connect();

    // Create a new score entry in the database
    const newScore = new Score({
      score,
    });

    await newScore.save();

    return NextResponse.json({ message: 'Score submitted successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error submitting score:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
