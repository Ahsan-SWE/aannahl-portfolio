
import { motion, useScroll, useTransform } from 'framer-motion';
import mteam from '../img/mteam.png';

const MidBanner = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
      <motion.div style={{ scale, backgroundImage: `url(${mteam})` }} className="absolute inset-0 w-full h-full bg-cover bg-center"></motion.div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-right flex justify-end">
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight drop-shadow-md">
            "We are an engineering firm operating with <span className="font-bold text-[#f97316]">insanely high standards.</span>"
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default MidBanner;