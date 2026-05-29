import React from 'react'

const TrendingProducts = ({ products }) => {
  return (
    <section className="py-8">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h3 className="text-4xl md:text-5xl font-normal tracking-[0.2em] text-[#3d352f] leading-[1.1] uppercase">
          nothing stays the same here
        </h3>

        <p className="text-xs md:text-sm body-font text-[#6b6b6b] mt-4 mb-8 leading-relaxed max-w-xl mx-auto">
          curated pieces gaining quiet momentum across the season
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-2 m-6">
        {products.map((items) => (
          <div key={items.id}>
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-100 mb-2 object-cover brightness-105 contrast-105"
            />

            <span className="text-xs uppercase bg-[#1a1a1a] tracking-widest text-[#f5f5f5] px-2 py-1 body-font">
              {items.badge}
            </span>

            <h3 className="capitalize pt-1.5 body-font text-sm font-normal cursor-pointer text-[#2a2623] hover:text-[#3a3a3a] transition-colors duration-300">
              {items.name}
            </h3>
            <p className="text-sm text-[#6b6b6b]">{items.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts