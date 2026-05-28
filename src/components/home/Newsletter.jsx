import React from "react";

const NewsLetter = () => {
  return (
    <section className="border-t border-[#d6ccc2] pt-10 mt-10">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-medium heading-font text-[#5e503f] tracking-tight">
          Join the maison-lune circle
        </h2>

        <p className="text-sm text-[#6b6b6b] mt-4 leading-relaxed">
          Be the first to receive curated drops, quiet restocks, and seasonal
          edits.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="enter your email"
            className="px-4 py-3 border border-[#d6ccc2] bg-transparent text-sm w-full sm:w-auto focus:outline-none focus:border-[#626160]"
          />

          <button className="px-6 py-3 bg-[#1f1d1b] text-white text-sm hover:bg-[#4c4742] transition-colors duration-300 uppercase">
            subscribe
          </button>
        </div>

        <p className="text-[11px] text-[#8a8a8a] mt-4">
          No spam. Only curated updates.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
