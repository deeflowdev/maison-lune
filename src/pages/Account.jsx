import React from 'react'

const Account = () => {
  return (
    <div className="min-h-screen w-full bg-[#f5f1e0] border-t border-[#d6ccc2] flex flex-col items-center justify-center gap-6 px-4">
      <input
        type="text"
        placeholder="Enter Username"
        className="px-8 py-3 border border-[#d6ccc2] bg-transparent text-sm w-full sm:w-auto focus:outline-none focus:border-[#626160]"
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="px-8 py-3 border border-[#d6ccc2] bg-transparent text-sm w-full sm:w-auto focus:outline-none focus:border-[#626160]"
      />

      <div className="flex gap-10">
        <button className="px-10 py-3 bg-[#1f1d1b] text-white text-sm hover:bg-[#2a2623] transition-colors duration-300 uppercase">
          Login
        </button>
        <button className="px-10 py-3 bg-[#1f1d1b] text-white text-sm hover:bg-[#2a2623] transition-colors duration-300 uppercase">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Account