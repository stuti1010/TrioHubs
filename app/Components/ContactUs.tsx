'use client';

import { useState } from 'react';

const ContactWithCharacter = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleCharacterClick = () => {
    setShowContactForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-primary container mx-auto " id='contactUS'>
      {/* Animated Character */}
      {!showContactForm && (
        <div
          className="relative cursor-pointer hover:scale-110 transition-transform duration-500"
          onClick={handleCharacterClick}
        >
        
          <img
            src="/call.jpg"
            alt="Animated character holding a phone"
            className="w-[300px] h-[300px] rounded-full border-4 border-gray-200 shadow-lg animate-pulse"
          />
          <p className="text-center mt-4 text-lg font-semibold ">
            Tap to be the part be triohub community !
          </p>
        </div>
      )}

      {/* Contact Form */}
      {showContactForm && (
        <div className=" text-primary py-10 ">
        {/* Contact Section */}
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center pb-10">
            <h3 className="text-primary text-xl font-semibold">Contact Us</h3>
            <h1 className="text-4xl font-bold text-gray-700 mt-4">
              Connecting businesses, ideas, and people for greater impact.
            </h1>
          </div>
  
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}
            <div className="lg:w-1/2 space-y-8">
              <div className="bg-gray-200 rounded-lg p-8">
                <h4 className="text-primary text-2xl mb-6 font-bold">Get in Touch</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <i className="fas fa-map-marker-alt text-2xl text-primary"></i>
                    <div>
                      <h5 className="text-lg font-bold">Address</h5>
                      <p className="text-sm">Vijay Nagar, Indore (M.P.)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-envelope text-2xl text-primary"></i>
                    <div>
                      <h5 className="text-lg font-bold">Mail Us</h5>
                      <p className="text-sm">Triohubs@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="fas fa-phone-alt text-2xl text-primary"></i>
                    <div>
                      <h5 className="text-lg font-bold">Telephone</h5>
                      <p className="text-sm">xxx-xxx-xxx</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className=" rounded-lg p-8">
                <h4 className="text-primary text-2xl mb-6 font-bold">Send Your Message</h4>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 bg-gray-700 rounded text-sm placeholder-gray-400"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 bg-gray-700 rounded text-sm placeholder-gray-400"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-2 bg-gray-700 rounded text-sm placeholder-gray-400"
                    />
                    <input
                      type="text"
                      placeholder="Your Project"
                      className="w-full px-4 py-2 bg-gray-700 rounded text-sm placeholder-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 bg-gray-700 rounded text-sm placeholder-gray-400"
                  />
                  <textarea
                    rows={5}
                    placeholder="Leave a message here"
                    className="w-full px-4 py-2 bg-gray-700 rounded text-sm placeholder-gray-400"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-primary text-gray-100 w-full py-2 rounded font-semibold hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
  
            {/* Right Section */}
            <div className="lg:w-1/2">
              <iframe
                className="rounded-lg w-full h-[800px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1234567890!2d75.87654321!3d22.12345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3456789abcd%3A0x1234567890abcdef!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>  
      )}
    
    </div>
  );
};

export default ContactWithCharacter;
