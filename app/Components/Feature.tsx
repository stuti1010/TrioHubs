import React from "react";
import { TextAnimate } from "@/components/ui/text-animate";

const Features = () => {
  const features = [
    {
      title: "Global Management",
      description:
        "With 24/7 customer support and innovative features like AI-powered insights, trading websites are redefining how individuals engage with financial markets.",
      bgImage: "url('/global-management.jpg')", 
    },
    {
      title: "Corporate Banking",
      description:
        "Corporate Banking at TradeOxi offers tailored financial solutions for businesses, including liquidity management, investment strategies, and secure transaction services.",
      bgImage: "url('/corporate-banking.jpg')",
    },
    {
      title: "Asset Management",
      description:
        "TradeOxi’s asset management offers expert portfolio diversification and secure investments, maximizing returns while ensuring optimal risk management.",
      bgImage: "url('/asset-management.jpg')",
    },
    {
      title: "Investment Bank",
      description:
        "Users benefit from advanced trading tools, customizable dashboards, and portfolio management solutions to optimize investments efficiently and effectively.",
      bgImage: "url('/financial-banking.jpg')", 
    },
  ];

  return (
    <>
      {/* Features Start */}
      <div  className="bg-white container mx-auto py-28 " id='feature'>
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mx-auto pb-10 max-w-4xl">
            <h3 className="text-primary text-lg font-semibold mb-6">
              Things We’re Good At
            </h3>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Connecting businesses, ideas, and people for greater impact.
            </h1>
            <p className="text-gray-700">
              A modern trading website is designed to provide an intuitive and
              seamless experience for users, catering to both beginners and
              seasoned traders. One of the standout features is real-time
              market data, offering live updates on stock prices, charts, and
              trends to ensure informed decision-making.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl text-center transform transition hover:scale-105 shadow-lg bg-cover bg-center"
                style={{
                  backgroundImage: feature.bgImage,
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
                <div className="relative text-white font-semibold">
                  <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                  <TextAnimate animation="blurInUp" by="character">
                    {feature.description}
               </TextAnimate>
            <p className="mb-6"></p>
                  <a
                    className="inline-block bg-primary text-white font-semibold py-2 px-4 rounded-full hover:bg-secondary transition"
                    href="#"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Features End */}
    </>
  );
};

export default Features;
