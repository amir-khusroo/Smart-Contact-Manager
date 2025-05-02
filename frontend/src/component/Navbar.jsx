import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-slate-700 text-white shadow-md w-full z-10 ">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          MyApp
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:text-gray-300 transition duration-300"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className="hover:text-gray-300 transition duration-300"
            >
              Dashboard
            </NavLink>
          </li>
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/login"
            className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Login
          </NavLink>
          
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-600 text-white">
          <ul className="flex flex-col ml-2 space-y-4 py-4">
            <li>
              <NavLink to="/" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-gray-300" onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="px-4 py-2 border border-white rounded hover:bg-white hover:text-blue-600 transition duration-300"
                onClick={() => setOpen(false)}
              >
                Login
              </NavLink>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
