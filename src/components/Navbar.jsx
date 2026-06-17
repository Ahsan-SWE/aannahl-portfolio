import  { useState, useEffect } from "react";
import logoWhite from "../img/logo-white.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-16 py-4 text-white backdrop-blur-md ${
        isScrolled
          ? "fixed top-0 bg-black/95 shadow-2xl"
          : "absolute top-0 md:top-[33px] bg-black/40"
      }`}
    >
      <div>
        <img src={logoWhite} className="w-full h-auto" />
      </div>
      <ul className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase items-center">
        <li className="text-[#f97316] cursor-pointer transition">
          About Us
        </li>
        <li className="hover:text-[#f97316] cursor-pointer transition">
          Our Team
        </li>
        <li className="hover:text-[#f97316] cursor-pointer transition">Services</li>
        <li className="hover:text-[#f97316] cursor-pointer transition">
          Portfolio
        </li>
        <li className="hover:text-[#f97316] cursor-pointer transition">
          Career
        </li>
        <li>
          <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wide transition">
            Let's Start
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
