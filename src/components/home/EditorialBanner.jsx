import React from "react";
import { useNavigate } from "react-router-dom";

const EditorialBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-6 px-6 md:px-12 bg-[#fafaff]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* text side */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#3d352f] leading-[1.1] capitalize">
              a study in quiet elegance
            </h2>

            <div className="w-16 h-px bg-[#d6ccc2]/60"></div>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              maison lune is built on restraint, balance, and quiet expression.
              each piece reflects a slower, more intentional way of dressing.
            </p>

            <p className="text-sm text-[#6b6b6b] leading-relaxed">
              this season explores softened tailoring, muted palettes, and
              silhouettes that move between structure and ease.
            </p>
          </div>

          <button
            onClick={() => navigate("/editorial")}
            className="mt-4 px-6 py-3 bg-[#1f1d1b] text-white text-xs tracking-[0.25em] uppercase hover:bg-[#4c4742] transition-all duration-500 active:scale-95"
          >
            explore edit
          </button>
        </div>

        {/* image side */}
        <div className="relative group overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1710886289695-4a7e2f214aaf?w=1600&q=90&auto=format&fit=crop"
            alt="editorial"
            className="w-full h-125 object-cover brightness-105 contrast-105"
          />

          <div className="absolute inset-0 bg-black/5"></div>
        </div>
      </div>
    </section>
  );
};

export default EditorialBanner;
