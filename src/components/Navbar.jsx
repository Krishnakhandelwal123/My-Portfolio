import React, { useState } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { FaBars, FaTimes } from "react-icons/fa"; // For Mobile Menu Icons
import { useNavigate } from "react-router-dom";

defineElement(lottie.loadAnimation);

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick1 = () => {
    window.open("https://github.com/Krishnakhandelwal123", "_blank");
  };
  const handleclick = () => {
    navigate("/")
  };
  const handleClick2 = () => {
    window.open("https://www.linkedin.com/in/krishna-khandelwal-470b30280", "_blank");
  };

  return (
    <nav className="bg-[#1F1F1F] text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <div>
          <img
            className="h-14 w-14 border-2 border-white rounded-full p-2 cursor-pointer hover:scale-105 transition duration-300"
            src="/images/logo.jpg"
            alt="Logo"
            onClick={handleclick}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-7 text-2xl font-semibold">
          <Link className="hover:text-gray-400 transition duration-300" to="/">Home</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/about">About</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/projects">Projects</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/experience">Experience</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/contact">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <lord-icon
            src="https://cdn.lordicon.com/acgiczyg.json"
            trigger="hover"
            style={{ width: "50px", height: "50px" }}
            className="cursor-pointer hover:scale-110 transition duration-300"
            onClick={handleClick1}
          ></lord-icon>

          <lord-icon
            src="https://cdn.lordicon.com/rqdhcgcm.json"
            trigger="hover"
            style={{ width: "50px", height: "50px" }}
            className="cursor-pointer hover:scale-110 transition duration-300"
            onClick={handleClick2}
          ></lord-icon>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 text-center mt-4">
          <Link className="hover:text-gray-400 transition duration-300" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link className="hover:text-gray-400 transition duration-300" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Social Icons in Mobile Menu */}
          <div className="flex justify-center space-x-4 mt-4">
            <lord-icon
              src="https://cdn.lordicon.com/acgiczyg.json"
              trigger="hover"
              style={{ width: "50px", height: "50px" }}
              className="cursor-pointer hover:scale-110 transition duration-300"
              onClick={handleClick1}
            ></lord-icon>

            <lord-icon
              src="https://cdn.lordicon.com/rqdhcgcm.json"
              trigger="hover"
              style={{ width: "50px", height: "50px" }}
              className="cursor-pointer hover:scale-110 transition duration-300"
              onClick={handleClick2}
            ></lord-icon>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
