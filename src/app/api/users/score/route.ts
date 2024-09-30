import { NextRequest, NextResponse } from "next/server";
import User from "@/modal/userModal";
import Score from "@/modal/scoreModal"; // Model to store scores

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { score, userId } = body;

    // Save the score for the user
    const userScore = await Score.create({ userId, score });
    return NextResponse.json({ message: "Quiz submitted successfully", score: userScore });
  } catch (error) {
    return NextResponse.json({ message: "Failed to submit quiz" }, { status: 500 });
  }
}
