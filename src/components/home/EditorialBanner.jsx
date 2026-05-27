import React from "react";

const EditorialBanner = () => {
  return (
    <section className="relative py-18 px-6 border-t border-[#d6ccc2]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* text side */}
        <div>
          <h2 className="text-5xl font-medium heading-font tracking-tight text-[#1f1d1b] leading-tight">
            A study in quiet elegance
          </h2>

          <p className="text-sm text-[#6b6b6b] mt-5 leading-relaxed max-w-md">
            Maison Lune is built on restraint, balance, and quiet expression.
            each piece is selected to reflect a slower, more intentional way of
            dressing.
          </p>

          <p className="text-sm text-[#6b6b6b] mt-4 leading-relaxed max-w-md">
            This season explores softened tailoring, muted palettes, and
            silhouettes that move effortlessly between structure and ease.
          </p>

          <button className="mt-8 px-5 py-3 bg-[#1f1d1b] text-white text-sm hover:bg-[#2a2623] transition-colors duration-300 uppercase body-font">
            explore edit
          </button>
        </div>

        {/* image side */}
        <div className="overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1737471896090-fd3dd09be399?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="editorial"
            className="w-full object-cover "/>
        </div>
      </div>
    </section>
  );
};

export default EditorialBanner;
