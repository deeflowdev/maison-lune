import React from "react";
import { RiArrowGoBackLine  } from "@remixicon/react";
import { Link } from "react-router-dom";

const Returns = () => {
  return (
    <section className="bg-[#fafaff] min-h-screen px-8 py-16 text-[#5e503f]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl heading-font capitalize mb-8 border-b pb-6 border-[#d6ccc2]">
          returns & exchanges
        </h1>

        <div className="space-y-8 heading-font text-medium leading-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              return policy
            </h2>
            <p className="body-font text-sm md:text-medium">
              returns can be requested within 7 days of delivery for eligible
              products.
            </p>

            <p className="mt-2 body-font text-sm md:text-medium">
              items must remain unworn, unused, and in their original packaging
              with all tags attached.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              non-returnable items
            </h2>
            <p className="body-font text-sm md:text-medium">
              sale items, jewellery, accessories, and customised orders are not
              eligible for return or exchange.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              refund timeline
            </h2>
            <p className="body-font text-sm md:text-medium">
              approved refunds are processed within 5 — 7 business days to the
              original payment method.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              exchange requests
            </h2>
            <p className="body-font text-sm md:text-medium">
              size exchanges are subject to product availability. to request an
              exchange, contact our support team at support@maisonlune.in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Returns;
