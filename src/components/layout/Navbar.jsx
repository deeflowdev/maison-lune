import React, { useState } from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";
import {
  RiHeartLine,
  RiSearchLine,
  RiShoppingBagLine,
  RiUserLine,
  RiMenuLine,
} from "@remixicon/react";
import Search from "../../pages/Search";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  const links = [
    { name: "shop", path: "/shop" },
    { name: "collections", path: "/collections" },
    { name: "new in", path: "/new-in" },
    { name: "editorial", path: "/editorial-banner" },
    { name: "about", path: "/about" },
  ];

  return (
    <div>
      <AnnouncementBar />

      <nav className="sticky top-0 z-50 bg-[#EDE0D4] w-full px-6 md:px-8 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl heading-font tracking-[0.18em] uppercase text-[#3d352f]">
            <Link to="/">Maison Lune</Link>
          </h2>

          <div className="hidden md:flex uppercase gap-8 text-sm tracking-wide text-[#1f1d1b]">
            {links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative hover:text-[#582f0e] transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-px after:w-0 after:bg-[#582f0e]
                hover:after:w-full after:transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-5 text-[#1f1d1b]">
            <button onClick={() => setIsSearchOpen(true)}>
              <RiSearchLine size={18} />
            </button>

            <Link to="/wishlist">
              <RiHeartLine size={18} />
            </Link>
            <Link to="/cart">
              <RiShoppingBagLine size={18} />
            </Link>
            <Link to="/account">
              <RiUserLine size={18} />
            </Link>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <RiMenuLine />
          </button>
        </div>

        {/* mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 uppercase text-sm">
            {links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleMobileLinkClick}
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => {
                setIsSearchOpen(true);
                setIsMenuOpen(false);
              }}
            >
              SEARCH
            </button>
            <Link to="/wishlist" onClick={handleMobileLinkClick}>
              wishlist
            </Link>
            <Link to="/cart" onClick={handleMobileLinkClick}>
              cart
            </Link>
            <Link to="/account" onClick={handleMobileLinkClick}>
              account
            </Link>
          </div>
        )}
      </nav>

      <Search isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
    </div>
  );
};

export default Navbar;
