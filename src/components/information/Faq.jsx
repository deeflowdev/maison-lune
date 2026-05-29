import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";


const FAQ = () => {
  return (
    <section className="bg-[#fafaff] min-h-screen px-8 py-16 text-[#5e503f]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl heading-font mb-10 capitalize">
          frequently asked questions
        </h1>

        <div className="space-y-8 body-font text-medium leading-8 border-t border-[#d6ccc2]">
          <div className="mt-8">
            <h2 className="text-lg md:text-xl mb-2 lowercase flex items-center gap-3">
              <Plus size={18} strokeWidth={1.5} />
              do you ship internationally?
            </h2>
            <p className="tex-xs md:text-medium">
              yes. maison lune delivers worldwide.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl mb-2 lowercase flex items-center gap-3">
              <Plus size={18} strokeWidth={1.5} />
              how long will my order take?
            </h2>
            <p className="tex-xs md:text-medium">
              domestic orders usually arrive within 4 — 7 business days.
              international orders may take 7 — 14 business days.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl mb-2 lowercase flex items-center gap-3">
              <Plus size={18} strokeWidth={1.5} />
              how can i track my order?
            </h2>
            <p className="tex-xs md:text-medium">
              once your order is shipped, you will receive a tracking link via
              email and sms.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl mb-2 lowercase flex items-center gap-3">
              <Plus size={18} strokeWidth={1.5} />
              what payment methods do you accept?
            </h2>
            <p className="tex-xs md:text-medium">
              we accept upi, debit cards, credit cards, net banking, paypal, and
              select international payment methods.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl mb-2 lowercase flex items-center gap-3">
              <Plus size={18} strokeWidth={1.5} />
              can i cancel my order?
            </h2>
            <p className="tex-xs md:text-medium">
              orders can only be cancelled before dispatch. once shipped, the
              order cannot be cancelled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
