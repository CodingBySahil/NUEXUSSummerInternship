import React from "react";

const BestSeller = () => {
  const bestSellerProducts = [
    {
      src: "/assets/images/bestSeller1.jpeg",
      title: "Burger of the day",
      price: "$12.99"
    },
    {
      src: "/assets/images/bestSeller2.jpeg",
      title: "Pizza of the day",
      price: "$15.99"
    },
    {
      src: "/assets/images/bestSeller3.jpeg",
      title: "Sandwich of the day",
      price: "$10.99"
    },
    {
      src: "/assets/images/bestSeller2.jpeg",
      title: "Fried Rice of the day",
      price: "$9.99"
    },
    {
      src: "/assets/images/bestSeller1.jpeg",
      title: "Chicken of the day",
      price: "$13.99"
    },
    {
      src: "/assets/images/bestSeller3.jpeg",
      title: "Burger of the day",
      price: "$12.99"
    },
    {
      src: "/assets/images/bestSeller2.jpeg",
      title: "Pizza of the day",
      price: "$15.99"
    },
    {
      src: "/assets/images/bestSeller1.jpeg",
      title: "Sandwich of the day",
      price: "$10.99"
    },
  ];

  return (
    <div>
      <div className="pb-16">
        <div className="bg-gray-100 dark:bg-gray-800 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
          <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
                Best Seller Products
              </p>
            </div>
            <div>
              <p className="text-base leading-normal sm:leading-none text-center text-gray-600 dark:text-white">
                Explore products that are bought most frequently by people
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-between gap-x-6 gap-y-5">
            {/* Mapping the products */}
            {bestSellerProducts.map((product, index) => (
              <div key={index} className="flex flex-col justify-center items-start p-2 bg-white dark:bg-gray-900">
                <div className="relative">
                  <img
                    className="hidden lg:block"
                    src={product.src} // Use product.src
                    alt={product.title} // Use product.title for alt text
                  />
                  <img className="lg:hidden" src={product.src} alt={product.title} />

                  <div className="flex justify-between mt-4">
                    <div>
                      <p className="text-lg font-medium leading-none text-gray-800 dark:text-white">
                        {product.title} {/* Use product.title */}
                      </p>
                    </div>
                    <div>
                      <p className="text-lg leading-none text-right text-gray-600 dark:text-white">
                        {product.price} {/* Use product.price */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
