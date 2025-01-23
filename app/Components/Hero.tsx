import React from 'react';
import BoxReveal from '@/components/ui/box-reveal';
import InteractiveHoverButton from '@/components/ui/interactive-hover-button';


const Hero = () => {
  return (
    <div className="hero bg-[url('/banner-bg.png')] bg-cover bg-center container mx-auto px-3">
      <section className="container mx-auto md:flex max-w-7xl  justify-between ">
        <div className="md:w-1/2 text-center md:text-left  flex flex-col justify-center  gap-5  ">
        <BoxReveal boxColor={"#FFFFFF"} duration={0.5} >
          <h1 className="md:text-5xl text-3xl font-bold text-white leading-snug  ">
            Welcome to the Trading Platform of the Future!
          </h1>
          </BoxReveal>
          <BoxReveal boxColor={"#FFFFFF"} duration={0.5}>
          <p className="mt-2 md:text-lg text-sm text-white">
            Track live stock prices, get market insights, and make informed
            investment decisions with our platform.
          </p>
          </BoxReveal>
          <BoxReveal boxColor={"#FFFFF"} duration={0.5}>
          <InteractiveHoverButton className="mt-2 bg-blue-600 text-white p-2 text-center font-semibold rounded-full overflow-hidden cursor-pointer shadow-md hover:bg-blue-300">
            Explore Now
          </InteractiveHoverButton>
          </BoxReveal>
        </div>
        <div className="image-banner mt-4">
        <img src="/susti final.png" alt="An Image" className=' md:h-[600px]  md:w-[600px] object-fill' />
      </div>
      </section>
     
    </div>
  );
};

export default Hero;
