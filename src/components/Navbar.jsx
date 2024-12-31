import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-500"> &lt;</span>

          <span>PassWord</span>
          <span className="text-green-500">Manager/&gt;</span>
        </div>
        <button className="text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1" onClick={()=>{
            window.open ('https://github.com/Pandey0008','_blank');
            
        }}>
          <img
            className="invert  w-10 p-1"
            src="/icons/github.svg"
            alt="github logo"
          />
          <span className="font-bold px-2">Pandey0008</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
