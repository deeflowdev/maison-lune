import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#f8f8f8] relative h-screen w-full">
      <img
        src="https://plus.unsplash.com/premium_photo-1768189747523-d322c3f0b68d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#f9f0e8]">
        <h1 className="heading-font capitalize text-7xl">
          the art of dressing well
        </h1>

        <p className="body-font pt-5 text-sm tracking-wide text-[#EDE0D4] max-w-2xl leading-relaxed">
          timeless silhouettes, refined tailoring, and editorial essentials
          designed for the modern wardrobe — balancing quiet luxury, effortless
          sophistication, and contemporary elegance.
        </p>
      </div>
    </section>
  );
}

export default Hero