import React from "react";
import { RiCloseLine, RiSearchLine } from "@remixicon/react";

const Search = ({ isSearchOpen, setIsSearchOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-100 transition-all duration-500 ${
        isSearchOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* background image */}
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1768189746346-65ed57b4d214?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="editorial background"
          className="w-full h-full object-cover blur-xxs scale-105"
        />

        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
      </div>

      <button
        onClick={() => setIsSearchOpen(false)}
        className="absolute top-8 right-8 z-20"
      >
        <RiCloseLine
          size={32}
          className="text-white hover:rotate-90 transition-transform duration-300"
        />
      </button>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        <p className="uppercase tracking-[0.3em] text-xs text-white/70 body-font mb-6">
          maison lune archive
        </p>

        <div className="w-full max-w-3xl border-b border-white/70 pb-5 flex items-center gap-4">
          <RiSearchLine size={26} className="text-white" />

          <input
            type="text"
            placeholder="search maison lune"
            className="w-full bg-transparent text-white text-xl outline-none placeholder:text-white/50 body-font"
          />
        </div>

        <div className="pt-12 flex flex-wrap justify-center gap-4 max-w-2xl">
          {[
            "outerwear",
            "cashmere",
            "co-ords",
            "new arrivals",
            "editorial archive",
          ].map((item) => (
            <button
              key={item}
              className="border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
