import React, { useState } from 'react';
import LoginSignup from './Components/LoginSignup';
import Quiz from './Components/Quizz';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <Quiz />
      ) : (
        <LoginSignup onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;
