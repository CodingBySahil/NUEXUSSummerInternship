import React from 'react';
import Header from './Header';

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden">
      <nav className="fixed max-w-screen-2xl w-full z-50">
          <Header />
        </nav>
      {children}
    </div>
  );
};

export default Wrapper;
