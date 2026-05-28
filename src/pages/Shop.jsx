import React, { useState } from 'react'
import { products } from '../data/products'
import Button from '../components/common/ReturnBack';
import { RiHeartLine, RiHeartFill } from "@remixicon/react";
import ReturnBack from '../components/common/ReturnBack';

const Shop = () => {

  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="min-h-screen bg-[#fafaff] px-8 py-20">
      <div className="max-w-6xl mx-auto mb-12">
        <p className="body-font uppercase tracking-[0.25rem] text-sm text-[#6b6b6b] mb-4 font-medium">
          Maison Lune Archive
        </p>

        <h1 className="text-5xl md:text-6xl heading-font text-[#1f1d1b] leading-tight max-w-3xl capitalize">
          Refined essentials shaped through restraint and performance
        </h1>

        <p className="mt-6 text-sm text-[#6b6b6b] leading-relaxed max-w-2xl">
          A curated selection of contemporary silhouettes, softened tailoring,
          and elevated wardrobe foundations designed to exist beyond seasonal
          urgency.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 mb-14 uppercase text-xs tracking-[0.18em]">
        <button className="border border-[#d6ccc2] px-5 py-2 hover:border-[#1f1d1b] transition-colors duration-300">
          all{" "}
        </button>
        <button className="border border-[#d6ccc2] px-5 py-2 hover:border-[#1f1d1b] transition-colors duration-300">
          outerwear
        </button>
        <button className="border border-[#d6ccc2] px-5 py-2 hover:border-[#1f1d1b] transition-colors duration-300">
          dresses
        </button>
        <button className="border border-[#d6ccc2] px-5 py-2 hover:border-[#1f1d1b] transition-colors duration-300">
          knitwear
        </button>
        <button className="border border-[#d6ccc2] px-5 py-2 hover:border-[#1f1d1b] transition-colors duration-300">
          accessories
        </button>
      </div>

      {/* product grid */}

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {products.map((items) => (
          <div key={items.id}>
            <div className="relative overflow-hidden">
              <img
                src={items.image}
                alt={items.name}
                className="w-full aspect-3/4 object-cover"
              />

              <span className="absolute top-4 left-4 text-[10px] uppercase bg-[#1a1a1a] tracking-[0.18em] text-[#f5f5f5] px-3 py-1 body-font">
                {items.badge}
              </span>

              {wishlist.includes(items.id) ? (
                <RiHeartFill
                  size={26}
                  onClick={() => toggleWishlist(items.id)}
                  className="absolute top-4 right-4 text-[#d90429] bg-white/80 backdrop-blur-sm rounded-full p-1 cursor-pointer hover:scale-110 transition-all duration-300"
                />
              ) : (
                <RiHeartLine
                  size={26}
                  onClick={() => toggleWishlist(items.id)}
                  className="absolute top-4 right-4 text-black bg-white/80 backdrop-blur-sm rounded-full p-1 cursor-pointer hover:scale-110 transition-all duration-300"
                />
              )}
            </div>

            <h3 className="capitalize pt-1.5 body-font text-sm font-normal cursor-pointer text-[#2a2623] hover:text-[#3a3a3a] transition-colors duration-300">
              {items.name}
            </h3>
            <p className="text-sm text-[#6b6b6b]">Rs.{items.price}</p>
          </div>
        ))}
      </div>

      <ReturnBack />
    </section>
  );
}

export default Shop 