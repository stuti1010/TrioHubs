"use client";

import Image from "next/image";
import React, { useState } from "react";

const Offer = () => {


  interface Offer {
    id: string;
    title: string;
    description: string;
    image: string;
  }

  // const offers: Offer[] = [
  //   { id: '1', title: 'Offer 1', description: 'Description 1', image: 'image1.jpg' },
  //   { id: '2', title: 'Offer 2', description: 'Description 2', image: 'image2.jpg' },
  // ];

  const offers:Offer[] = [
    {
      id: "collapseOne",
      title: "Sign-Up Bonus & Cashback on Trades",
      description:
        "Unlock Exclusive Rewards with Our Sign-Up Bonus and Cashback on Trades! Joining our platform has never been more rewarding! As a new user, you’re eligible for an exciting Sign-Up Bonus that gets credited directly to your account upon registration. Start trading right away with this extra boost! Plus, enjoy Cashback on every trade you make—earn while you trade, maximizing your profit potential. Whether you're a beginner or a seasoned trader, these exclusive offers are designed to make your experience more rewarding. Don’t miss out on these limited-time benefits—sign up today and start trading smarter!",
      image: "/offer-1.jpg",
    },
    {
      id: "collapseTwo",
      title: "Lending money for investment of your new projects",
      description:
        "Lending money for investment in new projects can be a strategic way to fuel growth, innovation, and expansion. By securing funds through loans or investments, businesses and individuals can access the capital needed to bring their ideas to life, whether it's launching a startup, expanding operations, or developing groundbreaking products. However, it's crucial to approach borrowing with a clear plan, ensuring that the projected returns outweigh the cost of the loan, including interest and fees. Proper financial planning, risk assessment, and a well-structured repayment strategy are essential to leverage borrowed funds effectively without jeopardizing financial stability. When done wisely, borrowing for investment can unlock new opportunities and set the foundation for long-term success.",
      image: "/offer-2.jpg",
    },
    {
      id: "collapseThree",
      title:
        "Mobile payment is more flexible and easy for all investors",
      description:
        "Mobile payment has revolutionized the way investors manage their financial transactions, offering unmatched flexibility and convenience. With mobile payment platforms, investors can seamlessly transfer funds, make investments, and monitor their portfolios from anywhere, at any time. This ease of access removes traditional barriers, such as the need for physical bank visits or complex paperwork, allowing for quick and efficient decision-making. Furthermore, mobile payment systems offer various payment options, such as digital wallets, bank transfers, and credit/debit card integration, making it easier for investors to diversify their investment strategies. The added security features and real-time transaction updates enhance trust, making mobile payments a preferred choice for modern investors seeking to stay agile and responsive in a fast-paced financial world.",
      image: "/offer-3.jpg",
    },
    {
      id: "collapseFour",
      title: "All transactions are free for pro trader members",
      description:
        "For Pro Trader members, all transactions are offered completely free of charge, providing a significant advantage in the world of trading. This benefit allows members to execute trades without incurring additional costs, such as commissions or fees, which can otherwise eat into profits. By eliminating these transaction fees, Pro Trader members can maximize their returns, making it easier to implement more frequent trades, diversify their portfolios, and take advantage of market opportunities without the concern of extra financial burden. This feature not only enhances profitability but also promotes greater flexibility and freedom in trading strategies, ultimately offering a competitive edge for experienced traders looking to optimize their investment strategies.",
      image: "/offer-4.jpg",
    },
  ];

  const [activeOffer, setActiveOffer] = useState(offers[0]);

  const handleOfferClick = (offer:Offer) => {
    setActiveOffer(offer);
  };

  return (
    <div className="container mx-auto py-1" id='offers'>
      {/* Heading */}
      <div className="text-center mx-auto pb-10 max-w-4xl my-8">
        <h3 className="text-primary text-5xl font-semibold mb-6">Our Offers</h3>
        <p className="text-gray-700 font-bold">
          Start trading with no commission fees for your initial transaction.
          Access live stock prices, updates, and insights. Benefit from
          high-level encryption for safe trading.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Navigation */}
        <div className="lg:w-1/3 ">
          <div className="bg-gray-100 rounded-lg p-6 space-y-4 h-[450px]">
            {offers.map((offer) => (
              <button
                key={offer.id}
                onClick={() => handleOfferClick(offer)}
                className={`block p-4 w-full text-left rounded-lg shadow-sm transition ${
                  activeOffer.id === offer.id
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-primary hover:text-white"
                }`}
              >
                <h5 className="text-lg font-semibold">{offer.title}</h5>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-2/3">
          <div className="flex flex-col md:flex-row items-center  rounded-lg shadow-lg p-6 gap-6 ">
            {/* Image */}
            <div className="w-full md:w-1/2 transition-all hover:border-spacing-4 border-b-gray-700 ">
              <Image 
                src={activeOffer.image}
                alt={activeOffer.title}
                className="rounded-lg"
                width={500}
                height={300}
              />
            </div>
            {/* Text Content */}
            <div className="w-full">
              <h2 className="text-3xl font-bold text-primary pb-8 ">
                {activeOffer.title}
              </h2>
              <p className="text-gray-700 mb-4">{activeOffer.description}</p>
              <a
                href="#"
                className="inline-block bg-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-secondary transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
