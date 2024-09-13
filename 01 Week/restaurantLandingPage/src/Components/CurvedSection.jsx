import React from "react";

const CurvedSection = () => {
  return (
    <div className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-no-repeat bg-cover z-0 rotate-180"
        style={{ backgroundImage: 'url("/src/assets/images/m-hero-top.png")' }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Oriental Taste Section */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between py-10">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64">
              <img
                src="/src/assets/images/bestSeller3.jpeg"
                alt="Oriental Dish"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Oriental Taste</h2>
            <p className="text-lg md:text-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg">
              ORDER NOW
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8">Statistics</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>

          <div className="flex flex-wrap justify-center gap-12">
            {/* Statistic 1 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">123</div>
              <p className="text-lg text-white">Outlets</p>
            </div>

            {/* Statistic 2 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">100</div>
              <p className="text-lg text-white">Chef</p>
            </div>

            {/* Statistic 3 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">300</div>
              <p className="text-lg text-white">Menu</p>
            </div>

            {/* Statistic 4 */}
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">30</div>
              <p className="text-lg text-white">Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedSection;
