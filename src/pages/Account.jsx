import React from "react";
import ReturnBack from "../components/common/ReturnBack";

const Account = () => {
  return (
    <div className="min-h-130 w-full bg-[#fafaff] flex items-center justify-center">
      <div className="w-full max-w-md border border-[#d6ccc2] p-10 bg-[#f5f1e0]">
        {/* header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl heading-font text-[#1f1d1b] mb-2">Account</h1>

          <p className="text-sm text-[#6b6b6b]">
            Sign-In to access your wardrobe archive
          </p>
        </div>

        {/* form */}
        <div className="space-y-5">
          <input
            type="text"
            placeholder="username"
            className="w-full px-5 py-3 border border-[#d6ccc2] bg-transparent text-sm focus:outline-none focus:border-[#626160]"
          />

          <input
            type="password"
            placeholder="password"
            className="w-full px-5 py-3 border border-[#d6ccc2] bg-transparent text-sm focus:outline-none focus:border-[#626160]"
          />
        </div>

        {/* buttons */}
        <div className="mt-8 flex flex-col gap-4">
          <button className="w-full px-5 py-3 bg-[#1f1d1b] text-white text-sm hover:bg-[#4c4742] transition-colors duration-300 uppercase">
            login
          </button>

          <button className="w-full px-5 py-3 border border-[#1f1d1b] text-[#1f1d1b] text-sm hover:bg-[#1f1d1b] hover:text-white transition-colors duration-300 uppercase">
            cancel
          </button>
        </div>
      </div>
      
    </div>
    
  );
};

export default Account;
