import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <header className="text-white py-4 bg-[url('/banner-bg.png')]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex flex-wrap items-center space-x-6 md:space-x-8 w-full md:w-auto">
            <a href="#FAQs" className="text-gray-300 hover:text-white pl-4">
              FAQ
            </a>
            <p className="text-gray-300 hover:text-white pl-4">📍 India</p>
            <a
              href="mailto:info@stockmarket.com"
              className="text-gray-300 hover:text-white pl-4"
            >
              📧 info@stockmarket.com
            </a>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 gap-4 mt-4 md:mt-0 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search stocks..."
              className="px-4 py-2 rounded-full bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring focus:ring-blue-500 md:w-full max-w-[200px]"
            />
            <div className="flex space-x-4 w-full md:w-auto">
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white w-full md:w-auto">
                <Link href="/Register" className="text-white">
                  Register
                </Link>
              </button>
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-full w-full md:w-auto">
                <Link href="/Login">Sign In</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
