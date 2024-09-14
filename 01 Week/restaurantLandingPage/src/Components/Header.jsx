import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (className) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`bg-[#4d4d4d] w-full z-50 px-4 lg:px-6 py-4 border-b border-gray-200 shadow-lg ${className}`}
    >
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/Logo/bgrlogo.png"
            className="h-8 sm:h-10 mr-3 hover:scale-150"
            alt="Hard Rock Logo"
          />
          <span className="text-2xl hover:text-[1.6rem] duration-200 font-bold text-white tracking-wide  hover:text-yellow-400">
            Hard Rock
          </span>
        </Link>

        {/* Menu Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-gray-500 lg:hidden focus:outline-none z-50"
        >
          {!menuOpen ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 h-screen w-full bg-[#4d4d4d] text-white p-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-6">
            <li>
              <Link
                to="/"
                className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/promo"
                className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Promo
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-medium hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-lg font-medium border-b-2 border-transparent hover:border-yellow-500 hover:text-yellow-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium text-lg hover:bg-yellow-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          <li>
            <Link
              to="/"
              className="text-white hover:text-lg hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="text-gray-200 hover:text-lg hover:text-yellow-400 transition duration-300"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              to="/promo"
              className="text-gray-200 hover:text-lg hover:text-yellow-400 transition duration-300"
            >
              Promo
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-200 hover:text-lg hover:text-yellow-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-200 hover:text-lg hover:text-yellow-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-300 -mr-4"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
