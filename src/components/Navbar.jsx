import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logoWhite from "../img/logo-white.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); 

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatic mobile menu close when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Active path check
  const isActive = (path) => location.pathname === path;

  // Menu items array for cleaner code
  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Career", path: "/career" },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 flex justify-between items-center px-6 md:px-16 py-4 text-white backdrop-blur-md ${
        isScrolled || isMobileMenuOpen
          ? "fixed top-0 bg-black/95 shadow-2xl"
          : "absolute top-0 md:top-[33px] bg-black/40"
      }`}
    >
      {/* 1. Logo Section */}
      <div className="flex-shrink-0 z-50">
        <Link to="/">
          <img src={logoWhite} className="w-28 md:w-full h-auto" alt="Aan Nah Logo" />
        </Link>
      </div>

      {/* 2. Desktop Menu (Hidden on Small Screens) */}
      <ul className="hidden md:flex gap-8 text-xs font-bold tracking-widest uppercase items-center">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`cursor-pointer transition duration-300 ${
                isActive(link.path) ? "text-[#f97316]" : "hover:text-[#f97316]"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/contact">
            <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-6 py-2.5 rounded-sm font-bold text-xs uppercase tracking-wide transition shadow-lg hover:shadow-[#f97316]/20">
              Let's Start
            </button>
          </Link>
        </li>
      </ul>

      {/* 3. Mobile Hamburger Icon (Visible only on Small Screens) */}
      <button 
        className="md:hidden text-white z-50 p-2 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg 
          className="w-7 h-7 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> 
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /> 
          )}
        </svg>
      </button>

      {/* 4. Mobile Dropdown Menu (Framer Motion Animated) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center py-8 gap-6 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${
                  isActive(link.path) ? "text-[#f97316]" : "text-white hover:text-[#f97316]"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="w-24 h-px bg-white/20 my-2"></div> {/* Separator Line */}

            <Link to="/contact">
              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition shadow-[0_10px_20px_rgba(249,115,22,0.3)]">
                Let's Start
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;