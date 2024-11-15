"use client"; // Add this line at the top

import React, { useState } from 'react';
import Link from 'next/link';
import { FaUser, FaChevronDown, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#181818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="flex-shrink-0 mx-16">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-5xl font-bold">V</span>
                  <div className="flex flex-col items-start">
                    <span className="text-2xl font-bold">YB</span>
                    <span className="text-[10px] font-bold">STORE</span>
                  </div>
                </Link>
              </div>

              {/* Search Bar */}
              <div className="flex items-center bg-white rounded-full overflow-hidden mx-16">
                <button className="bg-white text-black p-2 rounded-l-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M13.78 12.22a8 8 0 111.41-1.41l4.35 4.35a1 1 0 01-1.42 1.42l-4.34-4.35zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Search Creator/Product"
                  className="p-2 pl-4 pr-2 w-56 text-black bg-transparent border-none focus:outline-none"
                />
              </div>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="flex items-center md:hidden">
              <button onClick={toggleMenu} className="text-white">
                <FaBars />
              </button>
            </div>

            {/* Navbar Links */}
            <div className={`md:flex items-center space-x-4 ${isMenuOpen ? 'flex' : 'hidden'} md:block`}>
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1 font-semibold">
                Fav Creators
              </Link>
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1 font-semibold">
                Merchandise
              </Link>
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1 font-semibold">
                Brand
              </Link>
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1 font-semibold">
                Digital
              </Link>
            </div>

            {/* Profile Dropdown for Desktop */}
            <div className="hidden md:flex items-center space-x-2 mr-[4.5rem]">
              <button className="flex items-center bg-white text-black px-5  py-2 rounded-full">
                <FaUser className="mr-2" />
                <FaChevronDown className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu (conditionally render based on profile dropdown state) */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 mt-4">
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1">
                Fav Creators
              </Link>
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1">
                Merchandise
              </Link>
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1">
                Brand
              </Link>
              <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg px-2 py-1">
                Digital
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
