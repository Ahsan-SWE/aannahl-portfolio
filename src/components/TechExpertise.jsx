
import { motion } from 'framer-motion';
import dotnet from '../img/dotnet.png';
import t1 from '../img/t1.png'; 
import t2 from '../img/t2.png'; 
import t3 from '../img/t3.png'; 
import t4 from '../img/t4.png'; 
import t5 from '../img/t5.png'; 
import t6 from '../img/t6.png'; 
import t7 from '../img/t7.png'; 

const TechExpertise = () => {
  // Array double kora hoyeche infinite loop er smooth effect er jonno
  const techLogos = [dotnet, t1, t2, t3, t4, t5, t6, t7, dotnet, t1, t2, t3, t4, t5, t6, t7];
  
  return (
    <section className="py-24 bg-white border-y border-gray-100 overflow-hidden flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      >
        <h2 className="text-[12px] text-[#f97316] uppercase tracking-[0.2em] font-bold mb-14 text-center">Powered By Top Technologies</h2>
      </motion.div>

      {/* Infinite Scroll Container */}
      <div className="w-full relative flex items-center mt-4">
        {/* Left & Right gradient shadows for blending effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-12 md:gap-20 px-8 items-center w-max"
        >
          {techLogos.map((logo, i) => (
            <div 
              key={i} 
              /* Size updated: 30% bigger (w-32 -> w-44, h-32 -> h-44) */
              className="w-32 h-32 md:w-44 md:h-44 flex-shrink-0 bg-white rounded-3xl flex items-center justify-center border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)] hover:-translate-y-3 transition-all duration-300 cursor-pointer group p-6"
            >
              <img 
                src={logo} 
                alt="Tech Stack" 
                /* Removed grayscale & opacity, added hover zoom (scale-110) */
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechExpertise;