import React from "react";
import { Link } from "react-router-dom";
import NewsLetter from "../home/Newsletter";

const Footer = () => {
  return (
    <footer className="bg-[#EDE0D4] px-10 py-12 text-[#5e503f] border-t border-[#d6ccc2]">
      <div className="grid grid-cols-3 gap-10">
        {/* brand */}
        <div>
          <h2 className="heading-font text-3xl mb-4">Maison Lune</h2>

          <p className="text-sm leading-6 max-w-xs">
            Timeless silhouettes crafted for modern femininity and quiet luxury.
          </p>
        </div>

        {/* shop */}
        <div>
          <h3 className="uppercase tracking-[0.2em] text-sm mb-4">Shop</h3>

          <div className="flex flex-col gap-2 text-sm capitalize">
            <Link to="/new-in">new arrivals</Link>
            <Link to="">best sellers</Link>
            <Link to="">dresses</Link>
            <Link to="">accessories</Link>
          </div>
        </div>

        {/* customer care */}
        <div>
          <h3 className="uppercase tracking-[0.2em] text-sm mb-4">
            Customer Care
          </h3>

          <div className="flex flex-col gap-2 text-sm capitalize pb-5">
            <Link to="/contact">contact us</Link>
            <Link to="/shipping">shipping</Link>
            <Link to="/return">returns</Link>
            <Link to="/faq">faq</Link>
          </div>
        </div>
      </div>

      {/* newsletter */}
      <div className="pt-2">
        <NewsLetter />
      </div>

      {/* bottom section */}
      <div className="border-t border-[#d6ccc2] mt-12 pt-6 flex justify-between text-xs uppercase tracking-[0.15em]">
        <p>© 2026 maison-lune</p>

        <div className="flex gap-6 capitalize">
          <Link>instagram</Link>
          <Link>pinterest</Link>
          <Link>tiktok</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
