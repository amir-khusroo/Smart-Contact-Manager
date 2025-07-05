import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="sticky top-0 bg-slate-800 text-white  w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" >
          <img src="/logo1.png" alt="Logo" className="h-16" />
        </NavLink>
        
        <div className="flex space-x-4">
          <NavLink
            to="/login"
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Login
          </NavLink>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
