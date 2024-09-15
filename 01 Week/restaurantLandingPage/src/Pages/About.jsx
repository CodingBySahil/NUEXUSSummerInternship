import React from "react";

const About = () => {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          {/* Text Section */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12 text-center lg:text-left">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px] leading-tight">
                Exceptional Dining Experience
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Welcome to our restaurant, where we bring passion, flavor, and quality to every dish we serve.
                Our team of expert chefs curates an exquisite menu filled with both traditional and modern cuisines.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Whether you're enjoying a casual meal or celebrating a special event, our staff ensures an unforgettable dining experience.
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
              >
                Reserve a Table
              </a>
            </div>
          </div>

          {/* Images Section */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex flex-wrap items-center justify-center -mx-3 sm:-mx-4">
              <div className="w-1/2 px-3 sm:px-4 lg:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="/assets/images/aboutus1.jpeg"
                    alt="Restaurant Interior"
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="/assets/images/aboutus2.jpeg"
                    alt="Delicious Dish"
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="w-1/2 px-3 sm:px-4 lg:w-1/2">
                <div className="relative z-10 py-3 sm:py-4">
                  <img
                    src="/assets/images/aboutus3.jpeg"
                    alt="Chef in Action"
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
