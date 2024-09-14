import React from 'react';

const Statistics = () => {
  return (
    <>
      <div className="bg-gradient-to-r bg-[#4d4d4d] to-gray-900 w-full">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="pb-1 text-4xl font-extrabold text-white">Welcome to Our Restaurant</h2>
            <p className="mt-3 text-lg text-white">
              At our restaurant, we pride ourselves on providing a luxurious dining experience with an emphasis on comfort and quality service. Our global reach ensures we meet the needs of diverse clientele across various regions.
            </p>
            <p className="mt-2 text-md text-white">
              We have established a standard of excellence that has expanded through several outlets and countries. Here’s a glimpse into the scale of our operations:
            </p>
          </div>

          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
            <div className="flex flex-col items-center">
              <dd className="order-1 text-5xl font-extrabold text-white rounded-full border-4 border-white w-32 h-32 flex items-center justify-center">97</dd>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Employees</dt>
            </div>
            <div className="flex flex-col items-center mt-10 sm:mt-0">
              <dd className="order-1 text-5xl font-extrabold text-white rounded-full border-4 border-white w-32 h-32 flex items-center justify-center">50</dd>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Rooms</dt>
            </div>
            <div className="flex flex-col items-center mt-10 sm:mt-0">
              <dd className="order-1 text-5xl font-extrabold text-white rounded-full border-4 border-white w-32 h-32 flex items-center justify-center">77</dd>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Outlets</dt>
            </div>
            <div className="flex flex-col items-center mt-10 sm:mt-0">
              <dd className="order-1 text-5xl font-extrabold text-white rounded-full border-4 border-white w-32 h-32 flex items-center justify-center">10</dd>
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Countries</dt>
            </div>
          </dl>

          <div className="mt-10 max-w-4xl mx-auto text-center hidden sm:block">
            <p className="mt-2 text-lg text-white">
              Whether you're visiting us in one of our many locations or enjoying our services globally, we strive to make each experience memorable. Join us in savoring the best culinary delights we have to offer.
            </p>
            <p className="mt-2 text-md text-white">
              Stay tuned as we continue to expand and bring our exquisite dining to more locations around the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
