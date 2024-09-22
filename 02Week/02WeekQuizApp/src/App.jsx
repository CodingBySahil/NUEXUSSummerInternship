import React, { useState } from 'react';
import LoginSignup from './Components/LoginSignUp';
import Quizz from './Components/Quizz';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <Quizz />
      ) : (
        <LoginSignup onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;
