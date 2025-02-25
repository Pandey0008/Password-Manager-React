import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col justify-center items-center w-full p-4 gap-2 text-center">
      {/* Logo Section */}
      <div className="logo font-bold text-white text-xl sm:text-2xl">
        <span className="text-green-500"> &lt;</span>
        <span>Password</span>
        <span className="text-green-500">Manager/&gt;</span>
      </div>

      {/* Footer Text & Heart Icon */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-sm sm:text-base">
        Created with 
        <img className="w-5 sm:w-7 mx-2" src="icons/heart.png" alt="Heart Icon" />
        by Shivansh Pandey
      </div>
    </div>
  );
};

export default Footer;
