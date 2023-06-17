import React, { useEffect, useState } from 'react';
import Start from './Start';
import Quiz from './Quiz';
import TimeUp from './TimeUp'
import Result from './Result';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const TestInfo = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const level = searchParams.get('level');
    const category = searchParams.get('category');
    
    // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
    const [quizs, setQuizs] = useState([]);
    const [question, setQuesion] = useState({});
    const [questionIndex, setQuestionIndex] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [marks, setMarks] = useState(0);

    // Display Controlling States
    const [showStart, setShowStart] = useState(true);
    const [showQuiz, setShowQuiz] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showTimeup, setshowTimeUp] = useState(false);
    const [time, setTime] = useState(false);

  

    useEffect(() => {
        console.log(level)

        fetch(`/get-random-questions?category=${category}&level=${level}`)
        .then(response => response.json())
        .then(data => {
          // Handle the received questions data
          console.log(data);
          setQuizs(data)})
        
        .catch(error => {
          // Handle the error
          console.error('Error fetching questions:', error);
        });
    
      
      
      
      
      
      




      }, []);

   
    useEffect(() => {
        if (quizs.length > questionIndex) {
            setQuesion(quizs[questionIndex]);
        }
    }, [quizs, questionIndex])

    // Start Quiz
    const startQuiz = () => {
        setShowStart(false);
        setShowQuiz(true);
        setshowTimeUp(false)
        startTimer();

        // Set the duration of the timer (in seconds)
        // 1000 milliseconds = 1 second
    }

    const startTimer = ()=>{
        var duration = 60; // Change this value as needed

        // Start the timer
        const timer = setInterval(() => {
            // Update the timer display (assuming you have a DOM element with id "timer-display")
            //   const timerDisplay = document.getElementById("timer-display");
            if (duration > 0) {
                setTime(duration)
                // timerDisplay.textContent = `Time remaining: ${duration} seconds`;
                duration--;
            } else {
                showTheResult ();
                clearInterval(timer);
                // timerDisplay.textContent = "Time's up!";
                // Call any function or perform any action when the timer ends
                // For example, you can automatically submit the quiz here
            }
        }, 1000);
    }


    // Check Answer
    const checkAnswer = (event, selected) => {
        if (!selectedAnswer) {
            setCorrectAnswer(question.answer);
            setSelectedAnswer(selected);

            if (selected === question.answer) {
                event.target.classList.add('bg-success');
                setMarks(marks + 10);
            } else {
                event.target.classList.add('bg-danger');
            }
        }
    }

    // Next Quesion
    const nextQuestion = () => {
        setCorrectAnswer('');
        setSelectedAnswer('');
        const wrongBtn = document.querySelector('button.bg-danger');
        wrongBtn?.classList.remove('bg-danger');
        const rightBtn = document.querySelector('button.bg-success');
        rightBtn?.classList.remove('bg-success');
        setQuestionIndex(questionIndex + 1);
    }

    // Show Result

    const showTimeUp=()=>{
        setshowTimeUp(true)
        setShowStart(false);
        setShowQuiz(false);
       
    }
    const showTheResult = () => {
        setShowResult(true);
        setShowStart(false);
        setShowQuiz(false);
    }

    // Start Over
    const startOver = () => {

        window.location.href = '/all-courses';

        // startTimer();
        // setShowStart(false);
        // setShowResult(false);
        // setshowTimeUp(false);
        // setShowQuiz(true);
        // setCorrectAnswer('');
        // setSelectedAnswer('');
        // setQuestionIndex(0);
        // setMarks(0);
        // const wrongBtn = document.querySelector('button.bg-danger');
        // wrongBtn?.classList.remove('bg-danger');
        // const rightBtn = document.querySelector('button.bg-success');
        // rightBtn?.classList.remove('bg-success');
    }

    return (
        <>
            {/* Welcome Page */}
            <Start
                startQuiz={startQuiz}
                showStart={showStart}
            />
            


            {/* Quiz Page */}
            <Quiz
              time = {time}
                showQuiz={showQuiz}
                question={question}
                quizs={quizs}
                checkAnswer={checkAnswer}
                correctAnswer={correctAnswer}
                selectedAnswer={selectedAnswer}
                questionIndex={questionIndex}
                nextQuestion={nextQuestion}
                showTheResult={showTheResult}
            />

            {/* Result Page */}
            <Result
               level ={level}
               category = {category}
                showResult={showResult}
                quizs={quizs}
                marks={marks}
                startOver={startOver} />



        </>
    );
}

export default TestInfo;
