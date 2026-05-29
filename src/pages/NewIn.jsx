import React from 'react'
import { products } from '../data/products'

const NewIn = () => {

  const newProducts = products.filter((item) => item.isNew)

  return (
    <section className="min-h-screen bg-[#fafaf9] px-8 py-20">
      {/* heading */}
      <div className="max-w-6xl mx-auto mb-14">
        <p className="uppercase tracking-[0.2em] text-xs body-font text-[#6b6b6b] mb-4">
          maison lune
        </p>

        <h1 className="text-5xl heading-font capitalize text-[#3d352f] max-w-2xl leading-tight">
          new arrivals curated for the modern wardrobe
        </h1>

        <p className="mt-6 text-sm text-[#6b6b6b] leading-relaxed max-w-xl">
          timeless silhouettes, restrained tailoring, and elevated essentials
          designed for transitional dressing.
        </p>
      </div>

      {/* product grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {newProducts.map((item) => (
          <div key={item.id}>
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-125 object-cover hover:scale-105 transition-transform duration-500"
              />

              <span className="absolute top-4 left-4 bg-[#1f1d1b] text-white text-[10px] uppercase tracking-[0.2em] px-3 py-1">
                new season
              </span>
            </div>

            <div className="pt-4">
              <h2 className="capitalize text-sm body-font text-[#2a2623]">
                {item.name}
              </h2>

              <p className="text-sm text-[#6b6b6b] pt-1">RS. {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewIn