"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

interface AnsweredQuestion {
  questionId: string;
  answer: string | null;
  correct: boolean;
}

interface Question {
  _id: string;
  question: string;
  correctAnswer: string;
}

const ReviewPage: React.FC = () => {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);

  // Parse the answered questions from the URL
  const answeredQuestions: AnsweredQuestion[] = JSON.parse(
    decodeURIComponent(searchParams.get('answered') || '[]')
  );

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionIds = answeredQuestions.map(q => q.questionId).join(',');
        const response = await axios.get<Question[]>(`/api/users/question?ids=${questionIds}`);
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    if (answeredQuestions.length > 0) {
      fetchQuestions();
    }
  }, [answeredQuestions]);

  return (
    <div className="p-5 bg-[#203A43]">
      <div className='flex items-center mb-6 mt-20 gap-4'>
      <h1 className="text-2xl font-bold text-yellow-600 font-[Montserrat]">Quiz Review</h1>
      <Link href='/leaderboard'>
      <FaArrowRight className=" cursor-pointer text-yellow-600 text-2xl mr-4" /> 
      </Link>
      </div>
      {answeredQuestions.length === 0 ? (
        <p>No questions answered.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {answeredQuestions.map((item, index) => {
            const question = questions.find(q => q._id === item.questionId);
            return (
              <div className="bg-black text-white p-4 rounded-lg shadow-lg" key={item.questionId}>
                <p><strong>Question {index + 1}:</strong> {question ? question.question : "Unknown Question"}</p>
                <p><strong>Your Answer:</strong> {item.answer}</p>
                <p><strong>Correct Answer:</strong> {question ? question.correctAnswer : "No Correct Answer"}</p>
                <p className={item.correct ? "text-green-500" : "text-red-500"}>
                  {item.correct ? "Correct" : "Incorrect"}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <button
        className="mt-5 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => router.push('/leaderboard')}
      >
        Go to Leaderboard
      </button>
    </div>
  );
};

export default ReviewPage;
