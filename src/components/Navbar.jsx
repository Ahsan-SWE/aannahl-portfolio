import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoWhite from "../img/logo-white.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-16 py-4 text-white backdrop-blur-md ${
        isScrolled
          ? "fixed top-0 bg-black/95 shadow-2xl"
          : "absolute top-0 md:top-[33px] bg-black/40"
      }`}
    >
      <div>
   
        <Link to="/">
          <img src={logoWhite} className="w-full h-auto" alt="Logo" />
        </Link>
      </div>
      <ul className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase items-center">
        <li>
          <Link
            to="/about"
            className={`cursor-pointer transition ${
              isActive("/about") ? "text-[#f97316]" : "hover:text-[#f97316]"
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/team"
            className={`cursor-pointer transition ${
              isActive("/team") ? "text-[#f97316]" : "hover:text-[#f97316]"
            }`}
          >
            Our Team
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={`cursor-pointer transition ${
              isActive("/services") ? "text-[#f97316]" : "hover:text-[#f97316]"
            }`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={`cursor-pointer transition ${
              isActive("/portfolio") ? "text-[#f97316]" : "hover:text-[#f97316]"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/career"
            className={`cursor-pointer transition ${
              isActive("/career") ? "text-[#f97316]" : "hover:text-[#f97316]"
            }`}
          >
            Career
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wide transition">
              Let's Start
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;