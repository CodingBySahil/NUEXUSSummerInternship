import React from 'react';
import Header from './Header';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center h-screen bg-gray-900">
        {/* Left Section: Background Image 1 */}
        <div className="lg:w-1/3 w-full h-96 lg:h-full relative z-10">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: 'url("/src/assets/images/heroSec1img.webp")' }}
          ></div>
        </div>

        {/* Right Section: Content Area */}
        <div className="lg:w-2/3 w-full p-10 relative z-20">
          <div className="text-white w-4/5">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-yellow-400">Title Here</h1>
            <p className="mb-8 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">ORDER NOW</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
