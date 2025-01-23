import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cover bg-no-repeat bg-[url('/footer1.jpg')] text-white">
      {/* Footer Content */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 pt-8 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h4 className="text-xl font-semibold mb-3 flex items-center">
              <i className="fas fa-money-bill-wave mr-2"></i> TRIOHUBS
            </h4>
            <p>Your Gateway to Smarter Trading</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul>
              {["About Us", "Feature", "Blog", "Contact Us"].map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={`#${link.replace(/\s+/g, "").toLowerCase()}`} className="flex items-center hover:text-primary">
                    <IoIosArrowForward className="text-white pr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              {["Privacy Policy", "Terms & Conditions", "Support", "FAQ", "Help"].map((support, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="flex items-center hover:text-primary">
                    <IoIosArrowForward className="text-white pr-2" />
                    {support}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul>
              <li className="flex items-center gap-3 mb-3">
                <img src="/pin.png" alt="Location" className="h-5 filter invert brightness-0" />
                Vijay Nagar, Indore
              </li>
              <li className="flex items-center gap-3 mb-3">
                <img src="/email.png" alt="Email" className="h-5 filter invert brightness-0" />
                Triohubs@gmail.com
              </li>
              <li className="flex items-center gap-3 mb-3">
                <img src="/call.png" alt="Phone" className="h-5 filter invert brightness-0" />
                xxx-xxx-xxx
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black bg-opacity-75 py-4">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 text-center md:text-left">
          <p className="mb-2 md:mb-0">
            <FaRegCopyright className="inline-block mr-1" />
            TRIOHUBS, All rights reserved.
          </p>
          <p>
            Designed By{" "}
            <a href="#" className="text-white hover:underline">
              Triohubs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
