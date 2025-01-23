// components/Carousel.js
import { useState } from 'react';

const Carousel = () => {
  const images = [
    "/about1.webp",
    "/slider.jpg",
    "/slider1.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto align-bottom object-right-bottom ">
      <div className="relative h-84 sm:h-80 overflow-hidden rounded-3xl">
        <img src={images[currentIndex]} alt="carousel" className="w-full h-full object-cover transition-all duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6 py-8">
                    <h3 className="text-2xl font-bold">
                      Triohubs-Transfer of Wealth
                    </h3>
                    <p className="mt-2 text-gray-200">
                      Maximize your trading success with real-time data and
                      expert analysis.
                    </p>
                  </div>
      </div>

      <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
