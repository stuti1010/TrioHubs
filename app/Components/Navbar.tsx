'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <nav className="shadow-md sticky top-0 z-50 bg-[url('/banner-bg.png')]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Triohubs</div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="text-white text-2xl lg:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
            <li>
              <Link href="/">
                <h3 className="text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300 rounded-full px-4 py-2">
                  Home
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <h3 className="text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300 rounded-full px-4 py-2">
                  About
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/#feature">
                <h3 className="text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300 rounded-full px-4 py-2">
                  Features
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/#offers">
                <h3 className="text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300 rounded-full px-4 py-2">
                  Offers
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/Services">
                <h3 className="text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300 rounded-full px-4 py-2">
                  Services
                </h3>
              </Link>
            </li>
            <li>
              <Link href="/#testimonials">
                <h3 className="text-white font-bold hover:bg-white hover:text-blue-500 transition duration-300 rounded-full px-4 py-2">
                  Testimonials
                </h3>
              </Link>
            </li>

            {/* Pages Dropdown */}
            <li className="relative">
              <button
                className="text-white font-bold flex items-center hover:bg-white hover:text-blue-500 transition duration-300 rounded-full px-4 py-2"
                onClick={toggleDropdown}
              >
                Pages
                <FaChevronDown
                  className={`ml-2 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {/* Dropdown Menu */}
              {isOpen && (
                <ul className="absolute left-0 mt-2 bg-blue-500 text-white rounded-lg shadow-lg  py-2">
                  <li>
                    <Link href="#FAQs">
                      <h3 className="block px-4 py-2 hover:bg-gray-700">
                        FAQs
                      </h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="#contactUS">
                      <h3 className="block px-4 py-2 hover:bg-gray-700">
                        Contact Us
                      </h3>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Terms&Condition">
                      <h3 className="block px-4 py-2 hover:bg-gray-700">
                        Terms & Conditions
                      </h3>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
