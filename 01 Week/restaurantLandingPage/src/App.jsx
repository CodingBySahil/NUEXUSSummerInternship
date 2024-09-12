import React from "react";
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Router>
      <Wrapper>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        {/* This is where the content from pages will be rendered */}
      </Wrapper>
    </Router>
  );
};

export default App;
