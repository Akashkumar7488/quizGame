// import { NextRequest, NextResponse } from "next/server";
// import Question from "@/modal/questionModal"; // Assuming you have a Question model
// import { connect } from "@/database/dbConnection";

// connect();

// export async function GET() {
//   try {
//     const questions = await Question.find(); // Fetch all quiz questions from the database
//     return NextResponse.json(questions);
//   } catch (error) {
//     return NextResponse.json({ message: "Failed to fetch questions" }, { status: 500 });
//   }
// }



// route.ts (in api/users/quiz)
// import { NextRequest, NextResponse } from "next/server";
// import Question from "@/modal/questionModal";
// import { connect } from "@/database/dbConnection";

// connect();

// export async function GET(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const category = searchParams.get('category');
//     const difficulty = searchParams.get('difficulty');
//     const limit = parseInt(searchParams.get('limit') || '10');

//     let query: any = {};
//     if (category) query.category = category;
//     if (difficulty) query.difficulty = difficulty;

//     const questions = await Question.aggregate([
//       { $match: query },
//       { $sample: { size: limit } }
//     ]);

//     return NextResponse.json(questions);
//   } catch (error) {
//     console.error('Failed to fetch questions:', error);
//     return NextResponse.json({ message: "Failed to fetch questions" }, { status: 500 });
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import Question from "@/modal/questionModal";
import { connect } from "@/database/dbConnection";

connect();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const limit = parseInt(searchParams.get('limit') || '10', 10); // Provide a default value as a string

    // Define the type for the query
    let query: { category?: string; difficulty?: string } = {};
    
    if (category) query.category = category; // TypeScript knows category is a string if it exists
    if (difficulty) query.difficulty = difficulty;

    const questions = await Question.aggregate([
      { $match: query },
      { $sample: { size: limit } }
    ]);

    return NextResponse.json(questions);
  } catch (error) {
    console.error('Failed to fetch questions:', error);
    return NextResponse.json({ message: "Failed to fetch questions" }, { status: 500 });
  }
}
