import React from "react";

const HeroSection = () => {
  return (
    <>
        
    <div>
      <div className="relative border h-[90vh]">
        <div className="bg-black/35 w-full h-full absolute z-10"></div>
        {/* Navbar */}
        <img
          src="/assets/images/hero-left-dish.webp"
          alt="heroSectionImg"
          className="absolute left-0 inline w-[60vw] h-full object-cover object-center opacity-55"
        />
        <img
          src="/assets/images/hero-right.png"
          alt="heroSectionImg"
          className="absolute right-0 inline w-[80vw] h-full object-cover object-center"
        />
      </div>
      
      {/* Centered Text */}
      <div className="absolute top-0 left-0 h-full w-full p-6 md:p-10 flex items-center justify-center bg-transparent">
        <div className="text-white w-full md:w-2/3 lg:w-1/2 text-center z-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-yellow-400 leading-tight">
            Hard Rock
          </h1>
          <p className="mb-6 md:mb-8 text-xl md:text-2xl lg:text-3xl w-full  mx-auto leading-relaxed">
          Welcome to <span className="font-extrabold text-yellow-400"> HARD ROCK </span>
          At our restaurant, we pride ourselves on providing a luxurious dining experience with an emphasis on comfort and quality service.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl text-lg md:text-xl">
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  </>
  
  );
};

export default HeroSection;
