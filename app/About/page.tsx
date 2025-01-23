"use client";

import React from "react";
import Carousel from "../Components/Carousel";

const About = () => {
  return (
    <>
      <div className="container mx-auto py-6">
        <div className="hero   bg-cover  container mx-auto">
          <div className="flex justify-between">
            <div className="md:w-1/2 text-center md:text-left items-center gap-10 lg:ml-24 mt-14 sm:ml-20 ">
              <h1 className="md:text-4xl sm:text-2xl font-bold text-primary leading-snug lg:text-[3.5rem]  ">
                About US
              </h1>
              <p className="mt-7 lg:text-lg sm:text-sm text-primary font-serif font-semibold">
                A Indian trading website for investors to buy shares to invest
                in a highly valuable company, where stock prices fluctuate based
                on demand and supply, and market investors can profit through
                long-term equity or short-term debt investments
              </p>
              <div className="py-8 sm:w-[300px] lg:w-[500px]">
              <Carousel/>
              </div>
            </div>
            <div className="  sm:pl-6">
                <img src="/aboutUS2.jpg" alt="a about icon"  ></img>
            </div>
          
          </div>
        </div>

        {/* Second Part */}
        <section
  className="about-section bg-white text-black  relative overflow-hidden container mx-auto"
  id="about"
>
  <video
    className="absolute inset-0 object-cover z-0 rounded-full lg:h-[800px] lg:w-[800px] md:h-[500px] md:w-[500px] sm:h-[400px] sm:w-full sm:max-h-full h-full w-full"
    src="/video.mp4"
    autoPlay
    loop
    muted
    playsInline
  ></video>
  <div className="relative z-10 container mx-auto px-4 md:px-14 lg:px-20">
    <div className="flex flex-wrap items-center lg:gap-10">
      {/* Left Content */}
      <div className="w-full max-w-7xl mx-auto" data-wow-delay="0.2s">
        <h3 className="md:text-primary text-white text-xl font-semibold my-2 text-center lg:mb-16 sm:ml-10 py-10">
          Who we are?
        </h3>
        <h2 className="md:text-3xl lg:text-5xl text-xl font-bold mb-9 text-white">
          Meet our company, don’t <br /> miss the opportunity
        </h2>
        <p className="mb-6 text-gray-200 lg:text-lg">
          At TrioHubs, we believe that success in trading is built on the right tools,
          knowledge <br /> information. Join us today and discover the smarter way to trade!
        </p>
        <div className="gap-6 pt-3 sm:gap-3">
          <div className="flex items-start gap-4">
            <img
              src="/clarification.png"
              className="lg:h-[100px] h-[50px] filter invert brightness-0"
            />
            <div>
              <h4 className="text-lg font-bold text-white">
                Business Consulting
              </h4>
              <p className="text-gray-200">
                TrioHubs provides expert business consulting to help companies.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pt-7">
            <img
              src="/employee.png"
              className="lg:h-[100px] h-[50px] filter invert brightness-0"
            />
            <div className="pt-7">
              <h4 className="text-lg font-bold text-white">
                Years of Expertise
              </h4>
              <p className="text-gray-200">
                Our goal is to empower businesses to optimize trading strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full lg:w-5/12 lg:max-w-4xl sm:max-w-lg sm:py-6 sm:items-center mx-auto" data-wow-delay="0.5s">
        <div className="relative rounded-2xl overflow-hidden animate2_fadeInUp">
          <img
            src="/footer.jpg"
            alt="TradeOxi Trading"
            className="w-full h-72 object-cover rounded-lg shadow-lg border-spacing-2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6 py-8">
            <h3 className="text-2xl font-bold">
              Trade Smarter, Not Harder
            </h3>
            <p className="mt-2 text-gray-200">
              Maximize your trading success with real-time data and expert analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




       {/* Third Part */}
       <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary">Introduction</h2>
            <p className="mt-4 text-lg text-sky-600 mb-6 py-4 font-serif">
              At TrioHubs, we believe in making stock market data accessible...
            </p>
          </div>

          {/* Mission Section */}
          <div className="mt-12 text-center border-4 border-sky-500 rounded-full w-full sm:w-[600px] mx-auto bg-[url('/stock2.jpg')] px-10">
            <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-left py-8 text-semibold">
              Our mission is to democratize the stock market by providing investors with comprehensive insights...
            </p>
          </div>

          {/* Vision Section */}
          <div className="mt-12 text-center border-4 border-sky-400 rounded-full w-full sm:w-[600px] mx-auto bg-[url('/stock1.jpg')] bg-opacity-40 px-10">
            <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto py-8 text-semibold">
              We aim to be the most trusted and innovative stock market platform...
            </p>
          </div>

          {/* Values Section */}
          <div className="mt-12 text-center px-10">
            <h3 className="text-3xl font-semibold text-primary">Our Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8">
              <div className="text-white bg-sky-500 border-2 border-gray-100 rounded-full py-6">
                <h4 className="font-bold text-xl">Integrity</h4>
                <p className="mt-2 font-semibold">We operate with honesty and transparency...</p>
              </div>
              <div className="text-white bg-sky-500 border-2 border-gray-100 rounded-full py-6">
                <h4 className="font-bold text-xl">Innovation</h4>
                <p className="mt-2 font-semibold">We are committed to staying ahead of market trends...</p>
              </div>
              <div className="text-white border-2 border-gray-100 bg-sky-500 rounded-full py-6">
                <h4 className="font-bold text-xl">Empowerment</h4>
                <p className="mt-2 font-semibold">We empower our users with the tools and insights...</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default About;
