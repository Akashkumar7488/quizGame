// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import axios from "axios";
// import toast from "react-hot-toast";

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
//   const [timerActive, setTimerActive] = useState<boolean>(true); // New state to manage timer activity

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const category = searchParams.get("category"); // Extract category from URL

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         setLoading(true);
//         if (category) {
//           const response = await axios.get<Question[]>(
//             `/api/users/quiz?category=${category}&limit=10&difficulty=medium`
//           );
//           setQuestions(response.data);
//         } else {
//           toast.error("No category specified");
//         }
//       } catch (error) {
//         console.error("Error fetching quiz questions", error);
//         toast.error("Failed to load quiz questions");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [category]);

//   useEffect(() => {
//     let interval: NodeJS.Timeout | undefined;
//     if (!loading && questions.length > 0 && timer > 0 && timerActive) {
//       interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       handleNextQuestion();
//     }

//     return () => clearInterval(interval);
//   }, [timer, loading, questions, timerActive]);

//   const handleSelectAnswer = (answer: string) => {
//     if (!questions[currentQuestionIndex]) return;
  
//     // Only allow selection if no answer has been selected yet
//     if (selectedAnswer) return;
  
//     setSelectedAnswer(answer);
//     setTimerActive(false); // Stop the timer when an answer is selected
  
//     if (answer === questions[currentQuestionIndex].correctAnswer) {
//       setScore((prevScore) => prevScore + 4);
//       toast.success("Correct!");
//     } else {
//       toast.error("Wrong answer!");
//     }
//   };
  

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setSelectedAnswer(null);
//       setTimer(60); // Reset the timer for the next question
//       setTimerActive(true); // Reactivate the timer for the next question
//     } else {
//       setQuizComplete(true);
//     }
//   };

//   const handleSubmitQuiz = async () => {
//     try {
//       await axios.post("/api/quiz/submit", { score });
//       toast.success("Quiz submitted successfully!");
//       router.push("/leaderboard");
//     } catch (error) {
//       console.error("Error submitting quiz", error);
//       toast.error("Failed to submit quiz");
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
//           <div className="flex justify-between items-center w-full mb-4">
//             <h1 className="mb-2 text-2xl font-[Montserrat] text-white">
//               Question {currentQuestionIndex + 1}
//             </h1>
//             <p className="text-2xl text-white">Score: {score}</p>
//           </div>
//           <p className="text-xl text-white">Time left: {timer}s</p>
//           <section className="shadow-xl p-4 w-full rounded-lg flex flex-col justify-center items-center">
//             <h4 className="text-xl font-[Montserrat] text-white text-center">
//               {currentQuestion.question}
//             </h4>
//             <div className="grid grid-cols-1 justify-center items-center my-20 w-full mt-10 gap-4">
//             {currentQuestion.answers.map((answer, index) => (
//             <button
//             key={index}
//             onClick={() => handleSelectAnswer(answer)}
//             disabled={!!selectedAnswer} // Disable if an answer has been selected
//              className={`w-full py-2.5 px-5 mb-2 font-medium text-gray-800 font-[Montserrat] text-xl focus:outline-none bg-white rounded-lg border ${
//              selectedAnswer === answer
//             ? answer === currentQuestion.correctAnswer
//             ? "bg-[#61f381] text-white"
//             : "bg-[#f14e64] text-white"
//           : ""
//       }`}
//     >
//       {answer}
//     </button>
//   ))}
// </div>

//             <div className="flex justify-center">
//               {quizComplete ? (
//                 <button
//                   onClick={handleSubmitQuiz}
//                   className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600"
//                 >
//                   Submit Quiz
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleNextQuestion}
//                   className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600"
//                 >
//                   Next Question
//                 </button>
//               )}
//             </div>
//           </section>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;



























// "use client";
// import React, { useEffect, useState, Suspense } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axios from "axios";
// import toast from "react-hot-toast";

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
//   const [timerActive, setTimerActive] = useState<boolean>(true);
  
//   // Replace with actual logic to retrieve user ID
//   const userId = "someUserId"; // Ensure this is fetched correctly from your auth context or user state

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const category = searchParams.get("category");

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         setLoading(true);
//         if (category) {
//           const response = await axios.get<Question[]>(`/api/users/quiz?category=${category}&limit=10&difficulty=medium`);
//           setQuestions(response.data);
//         } else {
//           toast.error("No category specified");
//         }
//       } catch (error) {
//         console.error("Error fetching quiz questions", error);
//         toast.error("Failed to load quiz questions");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [category]);

//   useEffect(() => {
//     let interval: NodeJS.Timeout | undefined;
//     if (!loading && questions.length > 0 && timer > 0 && timerActive) {
//       interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     } else if (timer === 0) {
//       handleNextQuestion();
//     }

//     return () => clearInterval(interval);
//   }, [timer, loading, questions, timerActive]);

//   const handleSelectAnswer = (answer: string) => {
//     if (!questions[currentQuestionIndex]) return;
//     if (selectedAnswer) return;

//     setSelectedAnswer(answer);
//     setTimerActive(false);

//     if (answer === questions[currentQuestionIndex].correctAnswer) {
//       setScore((prevScore) => prevScore + 4);
//       toast.success("Correct!");
//     } else {
//       toast.error("Wrong answer!");
//     }
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//       setSelectedAnswer(null);
//       setTimer(60);
//       setTimerActive(true);
//     } else {
//       setQuizComplete(true);
//       handleSubmitQuiz();
//     }
//   };

//   const handleSubmitQuiz = async () => {
//     try {
//       const userId =  localStorage.getItem("userId"); // or sessionStorage
//       console.log("User ID:", userId);
//       console.log("Score:", score); // Log the score to check its value
  
//       if (!userId) {
//         toast.error("User ID is missing!");
//         return;
//       }
  
//       await axios.post("/api/users/submit", { score, userId });
//       toast.success("Quiz submitted successfully!");
//       router.push("/leaderboard");
//     } catch (error: any) {
//       console.error("Error submitting quiz:", error.response?.data || error.message);
//       toast.error("Failed to submit quiz");
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
//           <div className="flex justify-between items-center w-full mb-4">
//             <h1 className="mb-2 text-2xl font-[Montserrat] text-white">
//               Question {currentQuestionIndex + 1}
//             </h1>
//             <p className="text-2xl text-white">Score: {score}</p>
//           </div>
//           <p className="text-xl text-white">Time left: {timer}s</p>
//           <section className="shadow-xl p-4 w-full rounded-lg flex flex-col justify-center items-center">
//             <h4 className="text-xl font-[Montserrat] text-white text-center">
//               {currentQuestion.question}
//             </h4>
//             <div className="grid grid-cols-1 justify-center items-center my-20 w-full mt-10 gap-4">
//               {currentQuestion.answers.map((answer, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleSelectAnswer(answer)}
//                   disabled={!!selectedAnswer}
//                   className={`w-full py-2.5 px-5 mb-2 font-medium text-gray-800 font-[Montserrat] text-xl focus:outline-none bg-white rounded-lg border ${
//                     selectedAnswer === answer
//                       ? answer === currentQuestion.correctAnswer
//                         ? "bg-[#56f077] text-white"
//                         : "bg-[#dd4055] text-white"
//                       : ""
//                   }`}
//                 >
//                   {answer}
//                 </button>
//               ))}
//             </div>
//             <div className="flex justify-center">
//               {quizComplete ? (
//                 <button
//                   onClick={handleSubmitQuiz}
//                   className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600"
//                 >
//                   Submit Quiz
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleNextQuestion}
//                   className="bg-yellow-500 font-[Montserrat] text-white px-4 py-2 rounded-md hover:bg-yellow-600"
//                 >
//                   Next Question
//                 </button>
//               )}
//             </div>
//           </section>
//         </section>
//       </div>
//     </div>
//   );
// };

// // Wrapper component with Suspense
// const QuizGameWrapper = () => (
//   <Suspense fallback={<div>Loading quiz...</div>}>
//     <QuizPage />
//   </Suspense>
// );

// export default QuizGameWrapper;



"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import local from "next/font/local";

interface Question {
  _id: string;
  question: string;
  answers: string[];
  correctAnswer: string;
  category: string;
  difficulty: string;
}

interface DecodedToken {
  id: string;
  username: string;
  email: string;
  iat: number;
  exp: number;
}

const QuizPage = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [timer, setTimer] = useState<number>(60);
  const [quizComplete, setQuizComplete] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");



  // Function to get userId from JWT token
  const getUserIdFromToken = (): string | null => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (token) {
      const jwt = token.split('=')[1];
      if (!jwt) {
        console.error("JWT token is empty");
        return null;
      }
      try {
        const decoded = jwtDecode<DecodedToken>(jwt);
        return decoded.id || null; // Ensure that id is correctly returned
      } catch (error) {
        console.error("Error decoding token:", error);
        return null;
      }
    }
    console.error("Token not found in cookies");
    return null;
  };



  
  

  useEffect(() => {
    // Log userId when the component mounts
    const userId = getUserIdFromToken();
    console.log("Retrieved User ID:", userId);

    // Fetch questions
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        if (category) {
          const response = await axios.get<Question[]>(`/api/users/quiz?category=${category}&limit=10&difficulty=medium`);
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
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    setTimerActive(false);

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
      setTimer(60);
      setTimerActive(true);
    } else {
      setQuizComplete(true);
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = async () => {
    try {
      // const userId = getUserIdFromToken();
      const userId = localStorage.getItem('userId')
      console.log("Retrieved User ID:", userId);
      console.log("User ID:", userId);
      console.log("Score:", score);


      if (!userId) {
        toast.error("User ID is missing!");
        return;
      }

      await axios.post("/api/users/submit", { score, userId });
      toast.success("Quiz submitted successfully!");
      router.push("/leaderboard");
    } catch (error: any) {
      console.error("Error submitting quiz:", error.response?.data || error.message);
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
                  disabled={!!selectedAnswer}
                  className={`w-full py-2.5 px-5 mb-2 font-medium text-gray-800 font-[Montserrat] text-xl focus:outline-none bg-white rounded-lg border ${
                    selectedAnswer === answer
                      ? answer === currentQuestion.correctAnswer
                        ? "bg-[#5cf47d] text-white"
                        : "bg-[#ea4359] text-white"
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

// Wrapper component with Suspense
const QuizGameWrapper = () => (
  <Suspense fallback={<div>Loading quiz...</div>}>
    <QuizPage />
  </Suspense>
);

export default QuizGameWrapper;
