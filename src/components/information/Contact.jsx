import React from "react";
import {
  RiCustomerService2Line,
  RiBuildingLine,
  RiArticleLine, RiShiningLine,
  RiInstagramLine,
  RiPinterestLine,
  RiSparklingLine,
} from "@remixicon/react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-[#fafaff] min-h-screen px-8 py-16 text-[#5e503f]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl heading-font capitalize mb-6 flex items-center gap-4 border-b pb-6 border-[#d6ccc2]">
          <RiSparklingLine className="text-3xl" />
          contact maison lune
        </h1>

        <p className="body-font text-sm md:text-medium leading-8 mb-10">
          for customer care, order enquiries, collaborations, or press requests,
          our client services team is available monday to saturday, 10am — 7pm
          ist.
        </p>

        <div className="space-y-10 body-font text-sm">
          <div>
            <h2 className="text-xl heading-font font-semibold mb-3 lowercase flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
              <RiCustomerService2Line className="text-xl" />
              customer support
            </h2>

            <p>support@maisonlune.in</p>
            <p>+91 98765 43210</p>
          </div>

          <div>
            <h2 className="text-xl heading-font  font-semibold mb-3 lowercase flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
              <RiBuildingLine className="text-xl" />
              head office
            </h2>

            <p>
              maison lune studio <br />
              22 park street <br />
              kolkata, west bengal 700016 <br />
              india
            </p>
          </div>

          <div>
            <h2 className="text-xl heading-font  font-semibold mb-3 lowercase flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
              <RiArticleLine className="text-xl" />
              press & partnerships
            </h2>

            <p>press@maisonlune.in</p>
          </div>

          <div>
            <h2 className="text-xl heading-font  font-semibold mb-3 lowercase flex items-center gap-3 transition-all duration-300 hover:translate-x-1">
              <RiShiningLine className="text-xl" />
              socials
            </h2>

            <div className="space-y-2">
              <p className="flex items-center gap-2">instagram — @maisonlune</p>

              <p className="flex items-center gap-2">
                pinterest — @maisonluneofficial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
