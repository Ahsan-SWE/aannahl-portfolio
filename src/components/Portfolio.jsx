import React from 'react';
import { motion } from 'framer-motion';

// Jodi tomar kache mockup image-ta download kora thake, tahole ekhabe import korbe:
// import buzzMockup from '../img/buzz-mockup.png';

const Portfolio = () => {
  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8">

        {/* 1. Header Section (Like your image) */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
          className="text-center mb-20 md:mb-32"
        >
          <h2 className="text-4xl md:text-[2.75rem] font-black text-gray-900 tracking-tight uppercase mb-4">
            Our Work
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            Some of our recent projects we are proud for. {' '}
            <a href="#" className="text-[#f97316] font-bold hover:underline transition-all">View All</a>
          </p>
        </motion.div>

        {/* 2. Single Project Showcase Split Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

          {/* Left Column: Text Content */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeRight}
            className="w-full lg:w-5/12 text-center lg:text-left"
          >
            <h3 className="text-4xl md:text-[3.25rem] font-black text-gray-500 mb-6 tracking-tight leading-tight">
              Buzz Moving
            </h3>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 font-medium">
              BuzzMoving acts as a bridge between you and the movers to make the entire process smooth and easy without even having to pick up the phone.
            </p>
            
            {/* Animated Link */}
            <a 
              href="https://buzzmoving.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#f97316] font-bold text-xl transition-all duration-300"
            >
              buzzmoving.com
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </motion.div>

          {/* Right Column: Device Mockup Image */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft}
            className="w-full lg:w-7/12 relative"
          >
            {/* Soft background glow jate image-ta pop kore */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gray-50 rounded-full blur-3xl -z-10"></div>
            
            {/* Floating Image Animation */}
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              // Ami ekhane ekta demo mockup link diyechi. Tumi tomar exact transparent device mockup-er link ba import ekhane boshabe:
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" 
              alt="Buzz Moving Multi-Device Mockup" 
              className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Portfolio;