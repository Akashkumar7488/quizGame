// Example API route in Next.js (pages/api/questions.js)
import { NextRequest, NextResponse } from 'next/server';
import { connect } from "@/database/dbConnection";
import Question from '@/modal/questionModal'; // Adjust the import according to your structure

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams.get('ids');

  if (!ids) {
    return NextResponse.json({ error: 'No question IDs provided' }, { status: 400 });
  }

  const idArray = ids.split(',');

  try {
    await connect();
    const questions = await Question.find({ _id: { $in: idArray } });
    return NextResponse.json(questions);
  } catch (error:any) {
    console.error('Error fetching questions:', error.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
