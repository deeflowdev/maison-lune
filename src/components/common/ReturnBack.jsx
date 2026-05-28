import React from 'react'
import { Link } from 'react-router-dom';

const ReturnBack = () => {
  return (
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
  );
}

export default ReturnBack