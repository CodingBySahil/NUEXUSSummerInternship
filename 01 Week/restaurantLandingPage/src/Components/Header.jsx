import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#4d4d4d] w-full z-50 px-4 lg:px-6 py-4 border-b border-gray-200 shadow-lg">
      <nav className="max-w-screen-2xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="src/assets/Logo/bgrlogo.png" className="h-8 sm:h-10 mr-3" alt="Hard Rock Logo" />
          <span className="text-2xl font-bold text-white tracking-wide">Hard Rock</span>
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
          className={`absolute top-0 left-0 h-screen w-full bg-cyan-500 text-white p-4 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <ul className="space-y-6 mt-16">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/product" onClick={() => setMenuOpen(false)}>Product</Link></li>
            <li><Link to="/promo" onClick={() => setMenuOpen(false)}>Promo</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li>
              <Link
                to="/signup"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 items-center">
          <li><Link to="/" className="text-white hover:text-yellow-400 transition duration-300">Home</Link></li>
          <li><Link to="/product" className="text-gray-400 hover:text-white transition duration-300">Product</Link></li>
          <li><Link to="/promo" className="text-gray-400 hover:text-white transition duration-300">Promo</Link></li>
          <li><Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About</Link></li>
          <li><Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</Link></li>
          <li><Link to="/login" className="text-gray-400 hover:text-white transition duration-300">Login</Link></li>
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
