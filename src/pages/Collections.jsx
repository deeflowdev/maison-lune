// collections.jsx

import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "@remixicon/react";
import ReturnBack from "../components/common/ReturnBack";

const collections = [
  {
    id: 1,
    title: "new arrivals",
    subtitle:
      "timeless silhouettes crafted with refined structure and modern elegance.",
    image:
      "https://plus.unsplash.com/premium_photo-1760466051070-bb7ba235fbc9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "collection",
  },

  {
    id: 2,
    title: "evening edit",
    subtitle:
      "elevated essentials designed for understated sophistication after dark.",
    image:
      "https://images.unsplash.com/photo-1779398646359-eae73ee2a003?w=1200&q=90&auto=format&fit=crop",
    category: "editorial",
  },

  {
    id: 3,
    title: "minimal essentials",
    subtitle:
      "soft tailoring and contemporary staples for effortless everyday dressing.",
    image:
      "https://images.unsplash.com/photo-1726758149977-d73a19e34298?w=1200&q=90&auto=format&fit=crop",
    category: "wardrobe",
  },

  {
    id: 4,
    title: "winter study",
    subtitle:
      "layered textures, sculpted outerwear, and restrained cold-weather dressing.",
    image:
      "https://images.unsplash.com/photo-1610642779504-0bb8a0e5763f?w=1200&q=90&auto=format&fit=crop",
    category: "seasonal",
  },
];

const Collections = () => {
  return (
    <section className="min-h-screen bg-[#fafaf9] px-8 py-20">
      {/* heading */}
      <div className="max-w-6xl mx-auto mb-16">
        <p className="uppercase tracking-[0.25em] text-xs body-font text-[#6b6b6b] mb-4">
          maison lune archive
        </p>

        <h1 className="text-5xl md:text-6xl heading-font text-[#1f1d1b] max-w-3xl capitalize leading-tight">
          curated collections shaped through restraint and elegance
        </h1>

        <p className="mt-6 text-sm leading-relaxed text-[#6b6b6b] max-w-2xl">
          contemporary silhouettes, softened tailoring, and elevated wardrobe
          foundations designed to move beyond seasonal urgency.
        </p>
      </div>

      {/* collections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {collections.map((item) => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-4/5 object-cover group-hover:scale-[1.03] group-hover:brightness-95 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="uppercase tracking-[0.2em] text-[10px] body-font mb-3">
                  {item.category}
                </p>

                <h2 className="text-3xl heading-font capitalize mb-3">
                  {item.title}
                </h2>

                <p className="text-sm leading-relaxed max-w-sm text-white/90">
                  {item.subtitle}
                </p>

                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 uppercase tracking-[0.18em] text-xs mt-6 border-b border-white pb-1 hover:gap-3 transition-all duration-300"
                >
                  explore collection
                  <RiArrowRightUpLine size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReturnBack />
    </section>
  );
};

export default Collections;
