
import { motion } from 'framer-motion';
import logoWhite from '../img/logo-white.png';

const Footer = () => (
  <footer className="bg-[#f97316] text-white pt-20 pb-10 px-8 border-t-[12px] border-[#ea580c] overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12"
    >
      <div>
        <div className="w-60 mb-8">
          <img src={logoWhite} alt="AanNah Logo" className="w-full h-auto drop-shadow-md" />
        </div>
        <p className="text-base opacity-95 leading-relaxed pr-6 font-medium">Empowering businesses with cutting-edge software solutions. We bring your vision to life through innovation and dedication.</p>
      </div>
      
      <div>
        <h4 className="font-black text-xl mb-8 uppercase tracking-wider text-black">Quick Links</h4>
        <ul className="space-y-4 text-base font-semibold">
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">About Us</li>
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">Our Team</li>
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">Services</li>
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">Career</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-black text-xl mb-8 uppercase tracking-wider text-black">Our Services</h4>
        <ul className="space-y-4 text-base font-semibold">
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">Web Development</li>
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">Mobile App Development</li>
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">Digital Marketing</li>
          <li className="cursor-pointer hover:text-black hover:translate-x-2 transition-all">UI/UX Design</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-black text-xl mb-8 uppercase tracking-wider text-black">Development Center</h4>
        <p className="text-base opacity-95 mb-3 font-semibold">House-23, Road-4, Block-A,<br/>Banani, Dhaka-1213, Bangladesh</p>
        <p className="text-base opacity-95 font-semibold mt-5">Phone: +880 16292 70830</p>
        <p className="text-base opacity-95 font-semibold mt-2">Email: info@aannah.com</p>
      </div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.8 }}
      className="max-w-[90rem] mx-auto mt-16 pt-8 border-t border-orange-300 flex flex-col md:flex-row justify-between items-center text-sm font-bold opacity-90"
    >
      <p>© {new Date().getFullYear()} AanNah!. All rights reserved.</p>
      <div className="space-x-6 mt-6 md:mt-0">
        <span className="cursor-pointer hover:text-black transition-colors">Terms</span>
        <span>|</span>
        <span className="cursor-pointer hover:text-black transition-colors">Privacy Policy</span>
        <span>|</span>
        <span className="cursor-pointer hover:text-black transition-colors">Sitemap</span>
      </div>
    </motion.div>
  </footer>
);

export default Footer;