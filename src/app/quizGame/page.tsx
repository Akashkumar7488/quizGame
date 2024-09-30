// "use client"
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';

// interface Question {
//   question: string;
//   answers: string[];
//   correctAnswer: string;
// }

// // Sample questions
// const sampleQuestions: Question[] = [
//   {
//     question: "What is the capital of France?",
//     answers: ["London", "Berlin", "Paris", "Madrid"],
//     correctAnswer: "Paris"
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answers: ["Mars", "Jupiter", "Venus", "Saturn"],
//     correctAnswer: "Mars"
//   },
//   {
//     question: "What is 2 + 2?",
//     answers: ["3", "4", "5", "6"],
//     correctAnswer: "4"
//   }
// ];

// const QuizPage = () => {
//   const [questions, setQuestions] = useState<Question[]>([]); 
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState<number>(0);
//   const [timer, setTimer] = useState<number>(60);
//   const [quizComplete, setQuizComplete] = useState<boolean>(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Set the sample questions instead of fetching from an API
//     setQuestions(sampleQuestions);
//   }, []);

//   useEffect(() => {
//     if (questions.length > 0 && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0) {
//       handleNextQuestion();
//     }
//   }, [timer, questions]);

//   const handleSelectAnswer = (answer: string) => {
//     if (!questions[currentQuestionIndex]) return;
    
//     setSelectedAnswer(answer);
//     if (answer === questions[currentQuestionIndex].correctAnswer) {
//       setScore((prevScore) => prevScore + 4);
//       toast.success('Correct!');
//     } else {
//       toast.error('Wrong answer!');
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setSelectedAnswer(null);
//       setTimer(60);
//     } else {
//       setQuizComplete(true);
//     }
//   };

//   const handleSubmitQuiz = () => {
//     toast.success(`Quiz completed! Your score: ${score}`);
//     // Here you would typically send the score to a backend
//     // For now, we'll just log it and redirect
//     console.log('Quiz submitted with score:', score);
//     router.push('/'); // Redirect to home page for now
//   };

//   if (questions.length === 0) {
//     return <div className="text-white text-center pt-20">Loading questions...</div>;
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="bg-[#203A43] pt-[70px] min-h-screen pb-[5rem] sm:pb-5 flex flex-col justify-start items-center relative">
//       <h1 className="text-white text-start font-[Montserrat] text-3xl">Start Quiz</h1>
//       <div className="flex justify-center items-center container w-[80vw]">
//         <section className="flex flex-col font-[Montserrat] text-white justify-center items-center mt-4 w-full">
//           <div className='flex justify-between items-center w-full mb-4'>
//             <h1 className="mb-2 text-2xl font-[Montserrat] text-white">Question {currentQuestionIndex + 1}</h1>
//             <p className="text-2xl text-white">Score: {score}</p>
//           </div>
//           <p className="text-xl text-white">Time left: {timer}s</p>
//           <section className='shadow-xl p-4 w-full rounded-lg flex flex-col justify-center items-center'>
//             <h4 className='text-xl font-[Montserrat] text-white text-center'>{currentQuestion.question}</h4>
//             <div className='grid grid-cols-1 justify-center items-center my-20 w-full mt-10 gap-4'>
//               {currentQuestion.answers.map((answer, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleSelectAnswer(answer)}
//                   className={`w-full py-2.5 px-5 mb-2 font-medium text-gray-800 font-[Montserrat] text-xl focus:outline-none bg-white rounded-lg border hover:bg-gray-100
//                     ${selectedAnswer === answer ? (answer === currentQuestion.correctAnswer ? 'border-green-500' : 'border-red-500') : ''}`}>
//                   {answer}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               {quizComplete ? (
//                 <button onClick={handleSubmitQuiz} className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600">Submit Quiz</button>
//               ) : (
//                 <button onClick={handleNextQuestion} className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600">Next Question</button>
//               )}
//             </div>
//           </section>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;



//  "use client"
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import toast from 'react-hot-toast';

// interface Question {
//   _id: string;
//   question: string;
//   answers: string[];
//   correctAnswer: string;
//   category: string;
//   difficulty: string;
// }

// const QuizPage = () => {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [score, setScore] = useState<number>(0);
//   const [timer, setTimer] = useState<number>(60);
//   const [quizComplete, setQuizComplete] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get<Question[]>('/api/users/quiz?category=computer&limit=10&difficulty=medium');
//         setQuestions(response.data);
//       } catch (error) {
//         console.error('Error fetching quiz questions', error);
//         toast.error('Failed to load quiz questions');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   useEffect(() => {
//     if (!loading && questions.length > 0 && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0) {
//       handleNextQuestion();
//     }
//   }, [timer, loading, questions]);

//   const handleSelectAnswer = (answer: string) => {
//     if (!questions[currentQuestionIndex]) return;
    
//     setSelectedAnswer(answer);
//     if (answer === questions[currentQuestionIndex].correctAnswer) {
//       setScore((prevScore) => prevScore + 4);
//       toast.success('Correct!');
//     } else {
//       toast.error('Wrong answer!');
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setSelectedAnswer(null);
//       setTimer(60);
//     } else {
//       setQuizComplete(true);
//     }
//   };

//   const handleSubmitQuiz = async () => {
//     try {
//       const response = await axios.post('/api/quiz/submit', { score });
//       toast.success('Quiz submitted successfully!');
//       router.push('/leaderboard');
//     } catch (error) {
//       console.error('Error submitting quiz', error);
//       toast.error('Failed to submit quiz');
//     }
//   };

//   if (loading) {
//     return <div className="text-white text-center pt-20">Loading...</div>;
//   }

//   if (questions.length === 0) {
//     return <div className="text-white text-center pt-20">No questions available.</div>;
//   }

//   const currentQuestion = questions[currentQuestionIndex];

//   return (
//     <div className="bg-[#203A43] pt-[70px] min-h-screen pb-[5rem] sm:pb-5 flex flex-col justify-start items-center relative">
//       <h1 className="text-white text-start font-[Montserrat] text-3xl">Start Quiz</h1>
//       <div className="flex justify-center items-center container w-[80vw]">
//         <section className="flex flex-col font-[Montserrat] text-white justify-center items-center mt-4 w-full">
//           <div className='flex justify-between items-center w-full mb-4'>
//             <h1 className="mb-2 text-2xl font-[Montserrat] text-white">Question {currentQuestionIndex + 1}</h1>
//             <p className="text-2xl text-white">Score: {score}</p>
//           </div>
//           <p className="text-xl text-white">Time left: {timer}s</p>
//           <section className='shadow-xl p-4 w-full rounded-lg flex flex-col justify-center items-center'>
//             <h4 className='text-xl font-[Montserrat] text-white text-center'>{currentQuestion.question}</h4>
//             <div className='grid grid-cols-1 justify-center items-center my-20 w-full mt-10 gap-4'>
//               {currentQuestion.answers.map((answer, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleSelectAnswer(answer)}
//                   className={`w-full py-2.5 px-5 mb-2 font-medium text-gray-800 font-[Montserrat] text-xl focus:outline-none bg-white rounded-lg border hover:bg-gray-100
//                     ${selectedAnswer === answer ? (answer === currentQuestion.correctAnswer ? 'border-green-500' : 'border-red-500') : ''}`}>
//                   {answer}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               {quizComplete ? (
//                 <button onClick={handleSubmitQuiz} className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600">Submit Quiz</button>
//               ) : (
//                 <button onClick={handleNextQuestion} className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600">Next Question</button>
//               )}
//             </div>
//           </section>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;







"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

interface Question {
  _id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
  difficulty: string;
}

const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [timerActive, setTimerActive] = useState<boolean>(true); // New state to manage timer activity

  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); // Extract category from URL

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        if (category) {
          const response = await axios.get<Question[]>(
            `/api/users/quiz?category=${category}&limit=10&difficulty=medium`
          );
          setQuestions(response.data);
        } else {
          toast.error("No category specified");
        }
      } catch (error) {
        console.error("Error fetching quiz questions", error);
        toast.error("Failed to load quiz questions");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (!loading && questions.length > 0 && timer > 0 && timerActive) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      handleNextQuestion();
    }

    return () => clearInterval(interval);
  }, [timer, loading, questions, timerActive]);

  const handleSelectAnswer = (answer: string) => {
    if (!questions[currentQuestionIndex]) return;

    setSelectedAnswer(answer);
    setTimerActive(false); // Stop the timer when an answer is selected

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 4);
      toast.success("Correct!");
    } else {
      toast.error("Wrong answer!");
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimer(60); // Reset the timer for the next question
      setTimerActive(true); // Reactivate the timer for the next question
    } else {
      setQuizComplete(true);
    }
  };

  const handleSubmitQuiz = async () => {
    try {
      await axios.post("/api/quiz/submit", { score });
      toast.success("Quiz submitted successfully!");
      router.push("/leaderboard");
    } catch (error) {
      console.error("Error submitting quiz", error);
      toast.error("Failed to submit quiz");
    }
  };

  if (loading) {
    return <div className="text-white text-center pt-20">Loading...</div>;
  }

  if (questions.length === 0) {
    return <div className="text-white text-center pt-20">No questions available.</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="bg-[#203A43] pt-[70px] min-h-screen pb-[5rem] sm:pb-5 flex flex-col justify-start items-center relative">
      <h1 className="text-white text-start font-[Montserrat] text-3xl">Start Quiz</h1>
      <div className="flex justify-center items-center container w-[80vw]">
        <section className="flex flex-col font-[Montserrat] text-white justify-center items-center mt-4 w-full">
          <div className="flex justify-between items-center w-full mb-4">
            <h1 className="mb-2 text-2xl font-[Montserrat] text-white">
              Question {currentQuestionIndex + 1}
            </h1>
            <p className="text-2xl text-white">Score: {score}</p>
          </div>
          <p className="text-xl text-white">Time left: {timer}s</p>
          <section className="shadow-xl p-4 w-full rounded-lg flex flex-col justify-center items-center">
            <h4 className="text-xl font-[Montserrat] text-white text-center">
              {currentQuestion.question}
            </h4>
            <div className="grid grid-cols-1 justify-center items-center my-20 w-full mt-10 gap-4">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(answer)}
                  className={`w-full py-2.5 px-5 mb-2 font-medium text-gray-800 font-[Montserrat] text-xl focus:outline-none bg-white rounded-lg border ${
                    selectedAnswer === answer
                      ? answer === currentQuestion.correctAnswer
                        ? "bg-[#6be585] text-white"
                        : "bg-[#dd3e54] text-white"
                      : ""
                  }`}
                >
                  {answer}
                </button>
              ))}
            </div>
            <div className="flex justify-center">
              {quizComplete ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                >
                  Next Question
                </button>
              )}
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default QuizPage;
