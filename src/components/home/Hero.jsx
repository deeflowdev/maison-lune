import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#fafaff] relative h-screen w-full">
      <img
        src="https://plus.unsplash.com/premium_photo-1768189747523-d322c3f0b68d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="hero"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%] sm:object-center"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 text-[#f9f0e8]">
        <h1 className="heading-font capitalize text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          the art of dressing well
        </h1>

        <p className="body-font pt-4 md:pt-6 text-xs sm:text-sm md:text-base tracking-wide text-[#EDE0D4] max-w-xl md:max-w-2xl leading-relaxed">
          timeless silhouettes, refined tailoring, and editorial essentials
          designed for the modern wardrobe — balancing quiet luxury, effortless
          sophistication, and contemporary elegance.
        </p>
      </div>
    </section>
  );
};

export default Hero;
