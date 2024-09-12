import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-hidden">
      {children}
    </div>
  );
};

export default Wrapper;
