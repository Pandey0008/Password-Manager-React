import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800 text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 sm:py-5">
        {/* Logo */}
        <div className="logo font-bold text-white text-2xl text-center sm:text-left">
          <span className="text-green-500"> &lt;</span>
          <span>PassWord</span>
          <span className="text-green-500">Manager/&gt;</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
        </button>

        {/* Navigation Links */}
        <div className={`sm:flex ${isOpen ? "flex" : "hidden"} flex-col sm:flex-row items-center gap-4 sm:gap-0 mt-4 sm:mt-0`}>
          {/* GitHub Button */}
          <button
            className="text-white bg-green-700 rounded-full flex items-center ring-white ring-1 min-w-[10rem] sm:min-w-auto px-4 py-2"
            onClick={() => window.open("https://github.com/Pandey0008", "_blank")}
          >
            <img className="invert w-6 sm:w-8 p-1" src="/icons/github.svg" alt="GitHub Logo" />
            <span className="font-bold px-2 text-sm sm:text-base">Pandey0008</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
