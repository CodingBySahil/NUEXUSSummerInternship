import React, { useState, useEffect } from 'react';
import correctSoundFile from '../audio/correct.mp3';
import incorrectSoundFile from '../audio/incorrect.mp3';
import questionsData from '../data/questions.json';

const Quizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState('Easy');
  const [quizStarted, setQuizStarted] = useState(false);
  const [timer, setTimer] = useState(30);
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (!quizStarted) {
      setQuestions(questionsData[difficulty]);
    }
  }, [difficulty, quizStarted]);

  useEffect(() => {
    const storedLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setLeaderboard(storedLeaderboard);
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (quizStarted && !showScore) {
      const timerRef = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);
      return () => clearInterval(timerRef);
    }
  }, [quizStarted, showScore]);

  useEffect(() => {
    if (timer === 0) {
      handleAnswerOptionClick(false);
    }
  }, [timer]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
      new Audio(correctSoundFile).play();
    } else {
      new Audio(incorrectSoundFile).play();
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(30);
    } else {
      setShowScore(true);
    }
  };

  const startQuiz = () => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      const name = prompt('Enter your name:');
      setUsername(name);
      localStorage.setItem('username', name);
    }
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(30);
  };

  const handleSubmitScore = () => {
    const newEntry = { name: username, score, difficulty };
    const updatedLeaderboard = [...leaderboard, newEntry]
      .filter(entry => entry.difficulty === difficulty)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Keep only top 10 scores

    setLeaderboard(updatedLeaderboard);
    localStorage.setItem('leaderboard', JSON.stringify(updatedLeaderboard));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredLeaderboard = leaderboard.filter((entry) => entry.difficulty === difficulty);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition duration-300">
      <div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-8 transition duration-300">
        <div className="flex justify-between items-center">
          <button
            onClick={toggleDarkMode}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-transform duration-200"
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            disabled={quizStarted}
            className="p-2 border rounded focus:outline-none dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {showScore ? (
          <div className="text-center space-y-4">
            <p className="text-2xl font-semibold">
              Well done {username}, you scored {score} out of {questions.length}!
            </p>
            <button onClick={resetQuiz} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Restart Quiz
            </button>
            <button onClick={handleSubmitScore} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Submit Score
            </button>

            <h3 className="mt-6 text-lg font-semibold">Leaderboard ({difficulty})</h3>
            <ul>
              {filteredLeaderboard.map((entry, index) => (
                <li key={index} className="p-2 bg-gray-100 dark:bg-gray-700 rounded mb-2">
                  {entry.name}: {entry.score}
                </li>
              ))}
            </ul>
          </div>
        ) : quizStarted ? (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div className="text-lg font-medium">
                Question {currentQuestion + 1}/{questions.length}
              </div>
              <div className="text-lg font-medium">Time: {timer}s</div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-4 bg-gray-200 dark:bg-gray-700 rounded">
              <div
                className="absolute h-full bg-blue-500 rounded transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <div className="text-xl font-semibold">
              {questions.length > 0 ? questions[currentQuestion].questionText : 'Loading...'}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none transition-all transform hover:scale-105"
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={startQuiz}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all transform hover:scale-105"
          >
            Start Quiz
          </button>
        )}

        
      </div>
    </div>
  );
};

export default Quizz;
