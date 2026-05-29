import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightUpLine } from "@remixicon/react";
import { products } from "../data/products";
import { collections } from "../data/collections";

const Collections = () => {
  return (
    <section className="min-h-screen bg-[#fafaf9] px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {collections.map((item) => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                className="w-full aspect-4/5 object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-0 p-8 text-white">
                <h2 className="text-3xl capitalize">{item.title}</h2>

                <p className="text-sm mt-2 opacity-90">{item.subtitle}</p>

                <Link
                  to={`/collection/${item.slug}`}
                  className="inline-block mt-5 border-b text-xs uppercase tracking-widest"
                >
                  explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
