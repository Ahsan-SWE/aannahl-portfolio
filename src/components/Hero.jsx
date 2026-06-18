import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import banner1 from '../img/banner1.jpg';

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

 
  const fullText = "Design. Develop. Inspire.";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
    } else if (displayText.length === fullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setDisplayText("");
      }, 4000);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      
   
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[120%]">
        <img src={banner1} alt="Hero Background" className="w-full h-full object-cover opacity-30" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#050505]"></div>
      
     
      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-gray-400 font-bold uppercase tracking-[0.4em] text-[10px] md:text-[12px] mb-6"
        >
          Premium Software Engineering
        </motion.span>
        
      
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] min-h-[120px] md:min-h-[180px] bg-gradient-to-r from-orange-300 via-orange-500 to-orange-700 bg-[length:200%_auto] text-transparent bg-clip-text animate-text-shimmer">
          {displayText}
          <motion.span 
            animate={{ opacity: [0, 1, 0] }} 
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-orange-500"
          >|</motion.span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="text-base md:text-lg font-medium text-gray-400 max-w-xl leading-relaxed mb-12"
        >
          Transforming complex digital ideas into elegant, high-performance realities for modern businesses.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-10 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold uppercase tracking-widest text-[11px] transition-all hover:bg-white hover:text-black overflow-hidden"
        >
          <span className="relative z-10">Start Your Project</span>
        </motion.button>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-shimmer {
          animation: shimmer 6s ease infinite;
        }
      `}} />
    </header>
  );
};

export default Hero;