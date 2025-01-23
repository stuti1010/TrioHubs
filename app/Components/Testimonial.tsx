"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    role: "Trader",
    message: "TrioHub transformed my trading experience. It's intuitive and powerful!",
    image: "/testimonial-1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Investor",
    message: "The features and insights provided by TrioHub are second to none.",
    image: "/testimonial-2.jpg",
  },
  {
    name: "Michael Lee",
    role: "Financial Analyst",
    message: "I highly recommend TrioHub for anyone serious about trading.",
    image: "/testimonial-3.jpg",
  },
  {
    name: "Emily Davis",
    role: "Entrepreneur",
    message: "TrioHub has made trading smarter and more accessible for me.",
    image: "/testimonial-2.jpg",
  },
];

const Testimonial = () => {
  return (
    
      <div className="container mx-auto px-6 lg:px-12 text-center py-12 " id="testimonials">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary py-4">What Our Users Say</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="mySwiper "
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500  rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-500"
                />
                <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                <p className="text-sm text-blue-700 mb-2 font-semibold">{testimonial.role}</p>
                <p className="text-gray-700 italic">{testimonial.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
  );
};

export default Testimonial;
