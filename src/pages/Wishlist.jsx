import React from "react";
import { RiHeartFill, RiShoppingBag3Line } from "@remixicon/react";
import ReturnBack from "../components/common/ReturnBack";

const wishlistItems = [
  {
    id: 1,
    name: "sorbet wave co-ord",
    price: 3299,
    image:
      "https://images.unsplash.com/photo-1779153617249-c1f0d10de485?w=1200&q=90&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "muted silk dress",
    price: 4499,
    image:
      "https://images.unsplash.com/photo-1679848086122-47d8650c0e6d?w=1200&q=90&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "structured jacket",
    price: 3999,
    image:
      "https://i.pinimg.com/736x/c0/5c/cc/c05ccc7ed13a2c9adba6a400f329a611.jpg",
  },
];

const Wishlist = () => {
  return (
    <section className="min-h-screen bg-[#fafaf9] px-8 py-20">
      <div className="max-w-6xl mx-auto mb-14">
        <p className="uppercase tracking-[0.2em] text-xs body-font text-[#6b6b6b] mb-4">
          maison lune
        </p>

        <h1 className="text-5xl heading-font capitalize text-[#1f1d1b]">
          your wishlist
        </h1>
      </div>

      {/* wishlist grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {wishlistItems.map((item) => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full aspect-3/4 object-cover group-hover:scale-[1.03] transition-all duration-700"
              />

              <RiHeartFill
                size={24}
                className="absolute top-4 right-4 text-[#d90429] bg-white/80 backdrop-blur-sm rounded-full p-1"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div>
                <h2 className="capitalize text-sm body-font text-[#1f1d1b]">
                  {item.name}
                </h2>

                <p className="text-sm text-[#6b6b6b] pt-1">RS. {item.price}</p>
              </div>

              <button className="border border-[#d6ccc2] px-4 py-2 text-xs uppercase tracking-[0.15em] hover:bg-[#1f1d1b] hover:text-white transition-all duration-300">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <ReturnBack />
    </section>
  );
};

export default Wishlist;
