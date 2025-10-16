import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-gray-900 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="CodeYuga Tech" className="w-10 h-10" />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
            CodeYuga Tech
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {["home", "about", "services", "projects", "gallery", "contact", "courses"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`relative ${
                    scrolled ? "text-white" : "text-black"
                  } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isOpen ? (
            <XMarkIcon
              className={`h-6 w-6 cursor-pointer ${scrolled ? "text-white" : "text-black"}`}
              onClick={toggleMenu}
            />
          ) : (
            <Bars3Icon
              className={`h-6 w-6 cursor-pointer ${scrolled ? "text-white" : "text-black"}`}
              onClick={toggleMenu}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden ${scrolled ? "bg-black" : "bg-white/80"} shadow-lg`}>
          <ul className="flex flex-col items-center space-y-4 py-4 font-medium">
            {["home", "about", "services", "projects", "gallery", "contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={toggleMenu}
                    className={`relative ${
                      scrolled ? "text-white" : "text-black"
                    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
