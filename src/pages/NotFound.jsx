import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl heading-font text-[#1f1d1b] mb-4">404</h1>

      <h2 className="text-2xl heading-font text-[#1f1d1b] mb-6 uppercase">
        page not found
      </h2>

      <p className="text-sm text-[#6b6b6b] max-w-md leading-relaxed mb-10">
        the page you are looking for does not exist, or has been moved into a
        quieter place.
      </p>

      <Link
        to="/"
        className="relative text-sm uppercase text-[#1f1d1b] transition-colors duration-300
        after:content-[''] after:absolute after:left-0 after:-bottom-1
        after:h-px after:w-0 after:bg-[#432818]
        after:transition-all after:duration-300 hover:after:w-full hover:text-[#432818]"
      >
        return home
      </Link>
    </div>
  );
};

export default NotFound;
