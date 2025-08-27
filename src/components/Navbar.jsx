import React, { useState } from 'react';
import LaslesLogo from '../assets/Navbar/Vector.svg'; // Perbaikan di sini

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-6 shadow-sm fixed top-0 left-0 right-0 z-90">
      <div className="container mx-auto px-4 flex justify-between items-center">

        <div className="flex items-center">
          <img src={LaslesLogo} alt="LaslesVPN Logo" className="h-8 w-auto" />
          <span className="ml-2 text-2xl font-bold text-gray-800">LaslesVPN</span>
        </div>

        <div className="hidden lg:flex items-center space-x-8 text-gray-600 font-semibold">
          <a href="/about" className="hover:text-red-500 transition-colors">About</a>
          <a href="/features" className="hover:text-red-500 transition-colors">Features</a>
          <a href="/pricing" className="hover:text-red-500 transition-colors">Pricing</a>
          <a href="/testimonials" className="hover:text-red-500 transition-colors">Testimonials</a>
          <a href="/help" className="hover:text-red-500 transition-colors">Help</a>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <a href="/signin" className="text-gray-800 font-semibold hover:text-red-500 transition-colors">
            Sign In
          </a>
          <a
            href="/signup"
            className="px-6 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-colors"
          >
            Sign Up
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 mx-4">
          <div className="flex flex-col space-y-4 text-gray-600 font-semibold">
            <a href="/about" className="py-2 hover:text-red-500 transition-colors text-center border-b">About</a>
            <a href="/features" className="py-2 hover:text-red-500 transition-colors text-center border-b">Features</a>
            <a href="/pricing" className="py-2 hover:text-red-500 transition-colors text-center border-b">Pricing</a>
            <a href="/testimonials" className="py-2 hover:text-red-500 transition-colors text-center border-b">Testimonials</a>
            <a href="/help" className="py-2 hover:text-red-500 transition-colors text-center border-b">Help</a>
            <a href="/signin" className="py-2 text-gray-800 font-semibold text-center border-b">Sign In</a>
            <a href="/signup" className="py-2 text-center">
              <span className="px-6 py-2 border-2 border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-500 hover:text-white transition-colors block">
                Sign Up
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;