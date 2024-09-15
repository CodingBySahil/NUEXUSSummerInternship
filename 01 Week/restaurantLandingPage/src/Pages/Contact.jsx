import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section
        className="relative z-10 pt-20  bg-cover bg-center bg-no-repeat py-10 lg:py-20 dark:bg-dark min-h-[100vh]"
        style={{ backgroundImage: `url('/assets/images/loginImg.jpg')` }}
      >
        <div className="container mx-auto px-4 min-h-screen flex justify-center items-center">
          {/* Wrap the content in a flex container with equal width and height */}
          <div className="flex flex-col lg:flex-row w-full lg:w-10/12 xl:w-8/12 min-h-[500px]  shadow-lg ">
            {/* Left Side (Contact Information) */}
            <div className="w-full lg:w-1/2 mr-8 mb-8 sm:mb-0 flex flex-col justify-center items-center bg-white/70 p-8 rounded-l-lg backdrop-blur-md">
              <div className="flex-1 flex flex-col justify-center w-full max-w-[500px]">
                <span className="mb-4 block text-base font-semibold text-primary">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[24px] lg:text-[32px] xl:text-[40px] font-bold uppercase text-dark dark:text-white">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Welcome to our restaurant! If you have any questions or need
                  assistance, feel free to reach out to us using the contact
                  form below. We look forward to hearing from you and serving
                  you soon!
                </p>

                <div className="mb-8 flex w-full">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
                    <FaMapMarkerAlt size={32} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      99 S.t Jomblo Park Pekanbaru 28292, Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
                    <FaPhoneAlt size={32} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full">
                  <div className="mr-4 flex h-[60px] w-[60px] items-center justify-center rounded bg-primary/5 text-primary">
                    <FaEnvelope size={32} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color dark:text-dark-6">
                      info@yourdomain.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side (Contact Form) */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center mt-4 sm:mt-6 md:mt-8 lg:m-0 items-center bg-white p-8 rounded-r-lg dark:bg-dark-2 flex-1 shadow-lg">
              <form className="w-full max-w-[500px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="mb-4 w-full rounded border border-gray-300 p-3 text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="mb-4 w-full rounded border border-gray-300 p-3 text-base"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  className="mb-4 w-full rounded border border-gray-300 p-3 text-base"
                />
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  name="details"
                  className="mb-4 w-full rounded border border-gray-300 p-3 text-base"
                />
                <div>
                  <button
                    type="submit"
                    className="w-full rounded border border-yellow-500 bg-yellow-500 p-3 text-white transition hover:bg-yellow-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
