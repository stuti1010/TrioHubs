"use client";

import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdAnalytics } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";
import { MdTipsAndUpdates } from "react-icons/md";
import { SiQuicktype } from "react-icons/si";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ServicePage = () => {

    // const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  
    // const toggleDescription = () => {
    //   setDescriptionVisible(!isDescriptionVisible);
    // };

  return (
    <div className="container mx-auto bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300  " id="services">

{/*first part  */}
<div className=" flex flex-col items-center p-4 lg:p-10">
      {/* Heading */}
      <h1 className="text-2xl lg:text-4xl font-bold text-white mb-6 text-center">
        Welcome to TrioHub Services
      </h1>

      {/* Introduction Section */}
      <p className="text-lg lg:text-xl text-blue-700 text-center max-w-4xl mb-12 font-semibold font-serif">
        TrioHub is your trusted partner in stock market analysis, portfolio
        management, and financial planning. Our cutting-edge tools and
        real-time data empower you to make smarter investment decisions. With a
        focus on transparency, reliability, and innovation, TrioHub provides
        insights and strategies that keep you ahead of the competition.
      </p>

      {/* Carousel Section */}
      <div className="w-full lg:w-2/3 bg-blue-500 rounded-lg shadow-lg p-6">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          dynamicHeight={true}
        >
          <div className="text-center p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Real-Time Market Data
            </h3>
            <p className="text-gray-200">
              Access live stock data and up-to-the-minute insights to make
              informed investment choices.
            </p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Advanced Analytics
            </h3>
            <p className="text-gray-200">
              Leverage powerful predictive tools to analyze market trends and
              identify trading opportunities.
            </p>
          </div>
          <div className="text-center p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Personalized Portfolio Management
            </h3>
            <p className="text-gray-200">
              Tailored strategies and actionable insights to optimize your
              investment portfolio.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
      {/* second  Part */}
      <div className="text-center text-primary mt-2 py-8">
        <h1 className="text-5xl font-extrabold mb-8">Our Services</h1>
        <p className="text-xl mb-16 opacity-80 text-gray-700 font-bold">
          Unlock the power of the Indian stock market with our expert services tailored to boost your trading success.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 ">
          {/* Service 1 */}
          <div className="transform hover:scale-105 transition-all duration-500 shadow-xl bg-sky-500 text-gray-800 p-8 rounded-xl mx-10">
            <div className="text-6xl mb-4 filter invert brightness-0">
              <IoMdAnalytics />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Market Analysis</h3>
            <p className="text-lg opacity-80">
              Real-time market analysis to help you stay ahead in the fast-paced stock market.
            </p>
          </div>

          {/* Service 2 */}
          <div className="transform hover:scale-105 transition-all duration-500 shadow-xl bg-sky-500 text-gray-800 p-8 rounded-xl mx-10">
            <div className="text-6xl mb-4 filter invert brightness-0">
              <MdManageAccounts />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Portfolio Management</h3>
            <p className="text-lg opacity-80">
              Let our experts manage your portfolio and grow your wealth with tailored strategies.
            </p>
          </div>

          {/* Service 3 */}
          <div className="transform hover:scale-105 transition-all duration-500 shadow-xl bg-sky-500 text-gray-800 p-8 rounded-xl mx-10">
            <div className="text-6xl mb-4 filter invert brightness-0">
              <MdTipsAndUpdates />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Investment Tips</h3>
            <p className="text-lg opacity-80">
              Receive expert tips and recommendations to enhance your trading strategy.
            </p>
          </div>

          {/* Service 4 */}
          <div className="transform hover:scale-105 transition-all duration-500 shadow-xl bg-sky-500 text-gray-800 p-8 rounded-xl mx-10">
            <div className="text-6xl mb-4 filter invert brightness-0 ">
              <RiCustomerService2Fill />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Customer Support</h3>
            <p className="text-lg opacity-80">
              Get 24/7 support from our dedicated team for any questions or issues you may have.
            </p>
          </div>

          {/* Service 5 */}
          <div className="transform hover:scale-105 transition-all duration-500 shadow-xl bg-sky-500 text-gray-800 p-8 rounded-xl mx-10">
            <div className="text-6xl mb-4 filter invert brightness-0">
              <TbReportAnalytics />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Market Insights</h3>
            <p className="text-lg opacity-80">
              Gain valuable insights on market trends, news, and updates to stay ahead of the curve.
            </p>
          </div>

          {/* Service 6 */}
          <div className="transform hover:scale-105 transition-all duration-500 shadow-xl bg-sky-500 text-gray-800 p-8 rounded-xl mx-10">
            <div className="text-6xl mb-4 filter invert brightness-0">
              <SiQuicktype />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Quick Trades</h3>
            <p className="text-lg opacity-80">
              Execute trades instantly with our easy-to-use platform, designed for speed and accuracy.
            </p>
          </div>
        </div>
      </div>

      
          
          </div>

  );
};

export default ServicePage;
