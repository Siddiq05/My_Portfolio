import React, { useState } from "react";
import Logo from "../assets/Logo_1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };
  const Hover = `hover:text-orange-700`;
  return (
    <div
      className={`flex w-full justify-between items-center relative p-2 md:p-5 lg:h-[10%]  `}
    >
      <Link to="/" className="w-1/2 md:w-5/12 lg:w-[20%]" onClick={closeMenu}>
        <img src={Logo} alt="" />
      </Link>
      <ul
        className={` absolute right-0 top-0 h-screen flex font-semibold flex-col gap-10 w-1/2 pl-7 bg-gradient-to-r from-gray-500 to-transparent text-2xl pt-24 transition-all duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }  md:text-4xl md:gap-16 lg:translate-x-0 lg:flex-row lg:opacity-100 lg:h-[10%] lg:w-[60%]  lg:relative lg:justify-around lg:text-3xl lg:pt-0 lg:bg-none lg:items-center`}
      >
        <li className={Hover}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>{" "}
        </li>
        <li className={Hover}>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li className={Hover}>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li className={Hover} onClick={closeMenu}>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>

      <button
        onClick={Menu}
        className="text-2xl md:text-4xl  lg:hidden z-10"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Header;
