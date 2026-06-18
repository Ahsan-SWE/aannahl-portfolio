
import logoWhite from '../img/logo-white.png';

const Footer = () => (
  <footer className="bg-[#f97316] text-white pt-16 pb-8 px-6 border-t-[10px] border-[#ea580c]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <div>
        <div className="w-48 mb-6">
          <img src={logoWhite} alt="AanNah Logo" className="w-full h-auto drop-shadow-md" />
        </div>
        <p className="text-sm opacity-95 leading-relaxed pr-4 font-medium">Empowering businesses with cutting-edge software solutions. We bring your vision to life through innovation and dedication.</p>
      </div>
      
      <div>
        <h4 className="font-extrabold text-lg mb-6 uppercase tracking-wider text-black">Quick Links</h4>
        <ul className="space-y-3 text-sm font-semibold">
          <li className="cursor-pointer hover:text-black transition">About Us</li>
          <li className="cursor-pointer hover:text-black transition">Our Team</li>
          <li className="cursor-pointer hover:text-black transition">Services</li>
          <li className="cursor-pointer hover:text-black transition">Career</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-extrabold text-lg mb-6 uppercase tracking-wider text-black">Our Services</h4>
        <ul className="space-y-3 text-sm font-semibold">
          <li className="cursor-pointer hover:text-black transition">Web Development</li>
          <li className="cursor-pointer hover:text-black transition">Mobile App Development</li>
          <li className="cursor-pointer hover:text-black transition">Digital Marketing</li>
          <li className="cursor-pointer hover:text-black transition">UI/UX Design</li>
        </ul>
      </div>
      
      <div>
        <h4 className="font-extrabold text-lg mb-6 uppercase tracking-wider text-black">Development Center</h4>
        <p className="text-sm opacity-95 mb-2 font-semibold">House-23, Road-4, Block-A,<br/>Banani, Dhaka-1213, Bangladesh</p>
        <p className="text-sm opacity-95 font-semibold mt-4">Phone: +880 16292 70830</p>
        <p className="text-sm opacity-95 font-semibold">Email: info@aannah.com</p>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-orange-300 flex flex-col md:flex-row justify-between items-center text-xs font-bold opacity-90">
      <p>© {new Date().getFullYear()} AanNah!. All rights reserved.</p>
      <div className="space-x-4 mt-4 md:mt-0">
        <span className="cursor-pointer hover:text-black">Terms</span>
        <span>|</span>
        <span className="cursor-pointer hover:text-black">Privacy Policy</span>
        <span>|</span>
        <span className="cursor-pointer hover:text-black">Sitemap</span>
      </div>
    </div>
  </footer>
);

export default Footer;