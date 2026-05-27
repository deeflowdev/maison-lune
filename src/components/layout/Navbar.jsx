import React from "react";
import { Link } from "react-router-dom";
import AnnouncementBar from "./AnnouncementBar";

const Navbar = () => {
  return (
    <>
      <AnnouncementBar />

      <nav className="bg-[#EDE0D4] w-full h-18 flex justify-between py-5 px-8 items-center body-font">
        {/* logo */}
        <h2 className="text-2xl heading-font tracking-[0.18em] uppercase text-[#3d352f] cursor-pointer">Maison Lune</h2>

        {/* links */}

        <div className="uppercase flex gap-8 text-sm tracking-wide">
          <Link to="/">shop</Link>
          <Link to="/collections">collections</Link>
          <Link to="/new-in">new in</Link>
          <Link to="/editorial">editorial</Link>
          <Link to="/about">about</Link>
        </div>

        <div className="flex gap-6 uppercase text-sm tracking-wide">
          <Link to="/search">search</Link>
          <Link to="/wishlist">wishlist</Link>
          <Link to="/cart">cart</Link>
          <Link to="/account">account</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
