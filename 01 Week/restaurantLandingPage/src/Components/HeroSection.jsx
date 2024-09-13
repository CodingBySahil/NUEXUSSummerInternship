import React from "react";
import Header from "./Header";

const HeroSection = () => {
  return (
    <>
      <div>
        <div className="relative border h-[90vh]">
          {/* Navbar */}
          <nav className="fixed max-w-screen-2xl w-full z-50">
            <Header />
          </nav>
          <img
            src="/src/assets/images/hero-left-dish.webp"
            alt="heroSectionImg"
            className="absolute left-0 inline w-[60vw] h-full"
          />
          <img
            src="/src/assets/images/hero-right.png"
            alt="heroSectionImg"
            className="absolute right-0 inline w-[80vw] h-full "
          />
          {/* </div> */}
        </div>
        <div className="absolute top-0 right-3 h-full w-full p-6 md:p-10 flex items-center bg-transparent">
          <div className="text-white w-full md:w-2/3 lg:w-1/2 ml-auto text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-yellow-400 leading-tight">
              Hard Rock
            </h1>
            <p className="mb-6 md:mb-8 text-xl md:text-3xl lg:text-4xl w-full md:w-3/4 lg:w-2/3 mx-auto md:mx-0 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum.
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
