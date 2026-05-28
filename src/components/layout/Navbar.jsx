import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import Hero from "../home/Hero";
import { RiHeartLine, RiSearchLine, RiShoppingBagLine, RiUserLine } from "@remixicon/react";
import Search from "../../pages/Search";

const Navbar = () => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "shop", path: "/shop" },
    { name: "collections", path: "/collections" },
    { name: "new in", path: "/new-in" },
    { name: "editorial", path: "/editorialbanner" },
    { name: "about", path: "/about" },
  ];

  const linksTwo = [
    {
      name: <RiSearchLine size={18} onClick={() => setIsSearchOpen(true)} />,
      isButton: true,
    },

    { name: <RiHeartLine size={18} />, path: "/wishlist" },
    { name: <RiShoppingBagLine size={18} />, path: "/cart" },
    { name: <RiUserLine size={18} />, path: "/account" },
  ];

  return (
    <div>
      <AnnouncementBar />

      <nav className="sticky top-0 z-50 bg-[#EDE0D4] w-full flex justify-between py-5 px-8 items-center body-font">
        {/* logo */}
        <h2 className="text-2xl heading-font tracking-[0.18em] uppercase text-[#3d352f] cursor-pointer">
          {" "}
          <Link to="/">Maison Lune</Link>
        </h2>

        {/* links */}

        <div className="uppercase flex gap-8 text-sm tracking-wide text-[#1f1d1b] ">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-[#582f0e]  transition-all duration-300 active:scale-95 relative
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-px after:w-0 after:bg-[#582f0e]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-6 tracking-wide text-[#1f1d1b] hover:text-[#2a2623] transition-colors duration-300">
          {linksTwo.map((item, index) =>
            item.isButton ? (
              <button
                key={index}
                className="hover:text-[#582f0e] transition-all duration-300 active:scale-95"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-[#582f0e] transition-all duration-300 active:text-[#582f0e] active:scale-95"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
      </nav>

      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
    </div>
  );
};

export default Navbar;
