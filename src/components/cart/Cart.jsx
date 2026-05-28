import React from "react";
import { RiDeleteBinLine } from "@remixicon/react";
import ReturnBack from "../common/ReturnBack";

const cartItems = [
  {
    id: 1,
    name: "soft blush shirt",
    price: 1499,
    quantity: 1,
    image:
      "https://i.pinimg.com/736x/55/e6/06/55e606c65e5327b5ab7e853d5f6dd692.jpg",
  },

  {
    id: 2,
    name: "sculpted trench coat",
    price: 6299,
    quantity: 1,
    image:
      "https://i.pinimg.com/1200x/1e/7b/e7/1e7be724792b800356697ae83e407ac1.jpg",
  },
];

const Cart = () => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section className="min-h-screen bg-[#fafaf9] px-8 py-20">
      {/* heading */}
      <div className="max-w-6xl mx-auto mb-14">
        <p className="uppercase tracking-[0.2em] text-xs body-font text-[#6b6b6b] mb-4">
          maison lune
        </p>

        <h1 className="text-5xl heading-font capitalize text-[#1f1d1b]">
          shopping cart
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-12">
        {/* cart items */}
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 border-b border-[#d6ccc2] pb-8"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-52 object-cover"
              />

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="capitalize text-lg heading-font text-[#1f1d1b]">
                    {item.name}
                  </h2>

                  <p className="text-sm text-[#6b6b6b] pt-2">
                    RS. {item.price}
                  </p>

                  <p className="text-sm text-[#6b6b6b] pt-1">
                    quantity: {item.quantity}
                  </p>
                </div>

                <button className="flex items-center gap-2 text-sm uppercase tracking-[0.12em] hover:text-[#582f0e] transition-colors duration-300">
                  <RiDeleteBinLine size={18} />
                  remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* summary */}
        <div className="border border-[#d6ccc2] p-8 h-fit">
          <h2 className="text-2xl heading-font capitalize mb-8">
            order summary
          </h2>

          <div className="space-y-4 text-sm body-font">
            <div className="flex justify-between">
              <span>subtotal</span>
              <span>RS. {subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>shipping</span>
              <span>free</span>
            </div>

            <div className="flex justify-between border-t border-[#d6ccc2] pt-4 text-[#1f1d1b] font-medium">
              <span>total</span>
              <span>RS. {subtotal}</span>
            </div>
          </div>

          <button className="w-full mt-10 bg-[#1f1d1b] text-white py-4 uppercase tracking-[0.18em] text-xs hover:bg-[#4c4742] transition-all duration-300">
            proceed to checkout
          </button>
        </div>
      </div>
      <ReturnBack />
    </section>
  );
};

export default Cart;
