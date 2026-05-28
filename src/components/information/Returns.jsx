import React from "react";
import { RiArrowGoBackLine  } from "@remixicon/react";
import { Link } from "react-router-dom";

const Returns = () => {
  return (
    <section className="bg-[#fafaff] min-h-screen px-8 py-16 text-[#5e503f]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl heading-font capitalize mb-8 border-b pb-6 border-[#d6ccc2]">
          returns & exchanges
        </h1>

        <div className="space-y-8 heading-font text-medium leading-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              return policy
            </h2>
            <p className="body-font">
              returns can be requested within 7 days of delivery for eligible
              products.
            </p>

            <p className="mt-2 body-font">
              items must remain unworn, unused, and in their original packaging
              with all tags attached.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              non-returnable items
            </h2>
            <p className="body-font">
              sale items, jewellery, accessories, and customised orders are not
              eligible for return or exchange.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              refund timeline
            </h2>
            <p className="body-font">
              approved refunds are processed within 5 — 7 business days to the
              original payment method.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 lowercase flex items-center gap-4 transition-all duration-300 hover:translate-x-1">
              <RiArrowGoBackLine />
              exchange requests
            </h2>
            <p className="body-font">
              size exchanges are subject to product availability. to request an
              exchange, contact our support team at support@maisonlune.in.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <Link
          to="/"
          className="relative text-xs uppercase text-[#1f1d1b] transition-colors duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-px after:w-0 after:bg-[#432818]
        after:transition-all after:duration-300 hover:after:w-full hover:text-[#432818]"
        >
          return home
        </Link>
      </div>
    </section>
  );
};

export default Returns;
