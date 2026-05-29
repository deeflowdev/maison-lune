import React from "react";
import { RiGlobalLine, RiExchangeLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="bg-[#fafaff] min-h-screen px-8 py-16 text-[#5e503f]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl heading-font capitalize mb-8 border-b pb-6 border-[#d6ccc2]">
          shipping information
        </h1>

        <div className="space-y-8 heading-font leading-8 text-medium">
          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiGlobalLine />
              domestic shipping
            </h2>
            <p className="body-font tex-xs md:text-medium">
              all orders across india are processed within 2 — 4 business days.
              estimated delivery time is 4 — 7 business days depending on your
              location.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiGlobalLine />
              international shipping
            </h2>
            <p className="body-font tex-xs md:text-medium">
              maison lune delivers worldwide, including the united states,
              united kingdom, europe, uae, singapore, and australia.
            </p>

            <p className="mt-3 body-font tex-xs md:text-medium">
              international delivery timelines typically range between 7 — 14
              business days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiExchangeLine />
              shipping charges
            </h2>
            <p className="body-font">
              free shipping across india on orders above ₹4,000.
            </p>

            <p className="mt-2 body-font tex-xs md:text-medium">
              international shipping fees are calculated at checkout based on
              destination and package weight.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiExchangeLine />
              customs & duties
            </h2>
            <p className="body-font tex-xs md:text-medium">
              international customers may be required to pay customs duties or
              import taxes upon delivery. maison lune is not responsible for
              additional customs fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
