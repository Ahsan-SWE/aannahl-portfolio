
import { motion } from 'framer-motion';

const DarkStrip = () => (
  <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-16 px-6 border-y border-gray-800 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f97316] to-transparent opacity-60"></div>
    
    <motion.div 
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10"
    >
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-wide mb-3">Ready to see what we can build?</h3>
        <p className="text-gray-400 text-sm md:text-base">Discover how we've helped businesses transform their digital presence.</p>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white px-10 py-4 rounded-full font-extrabold text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all duration-300 whitespace-nowrap"
      >
        Explore all our Portfolio <span className="ml-2">→</span>
      </motion.button>
    </motion.div>
  </div>
);

export default DarkStrip;