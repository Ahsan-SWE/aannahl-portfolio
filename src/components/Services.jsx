import React from 'react';
import { motion } from 'framer-motion';
import s1 from '../img/s1.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
import s4 from '../img/s4.png';
import s5 from '../img/s5.png';

const Services = () => {
  const services = [
    { 
      icon: s1, 
      title: 'Web Development', 
      desc: 'Custom enterprise web applications built for speed, security, and massive scalability.', 
      coverImg: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    { 
      icon: s2, 
      title: 'Mobile Apps', 
      desc: 'High-performance native iOS and Android applications for your business.', 
      coverImg: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    { 
      icon: s3, 
      title: 'UI/UX Design', 
      desc: 'Intuitive, conversion-focused interfaces that provide seamless user experiences.', 
      coverImg: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    { 
      icon: s4, 
      title: 'Enterprise Solutions', 
      desc: 'Robust cloud-based system architecture tailored for large-scale operations.', 
      coverImg: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    { 
      icon: s5, 
      title: '24/7 Tech Support', 
      desc: 'Dedicated round-the-clock maintenance and analytics monitoring.', 
      coverImg: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-16 px-6 bg-[#f8f9fa] relative z-20 border-b border-gray-100">
      <div className="max-w-[85rem] mx-auto">
        
        {/* Section Header - Spacing & Margin 20% Reduced */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="mb-10 text-center"
        >
          <h2 className="text-[12px] text-[#f97316] uppercase tracking-[0.3em] font-extrabold mb-2">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-2">Enterprise Solutions</h3>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">High-performance software infrastructure, beautifully crafted for modern businesses.</p>
          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full mt-4"></div>
        </motion.div>
        
        {/* Image-Based Service Grid - Gap Reduced */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((srv, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-400 flex flex-col"
            >
              {/* Top Cover Image Area - Height Reduced (h-48 theke h-40) */}
              <div className="w-full h-40 relative overflow-hidden bg-gray-100">
                <img 
                  src={srv.coverImg} 
                  alt={srv.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Floating Icon Badge - Adjusted Position & Size */}
                <div className="absolute -bottom-5 left-5 w-12 h-12 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center p-2 z-10 group-hover:border-[#f97316]/30 transition-colors">
                  <img src={srv.icon} alt={`${srv.title} Icon`} className="w-full h-full object-contain mix-blend-multiply opacity-90" />
                </div>
              </div>

              {/* Bottom Content Area - Padding & Margins Reduced */}
              <div className="pt-8 pb-6 px-5 flex-grow flex flex-col justify-start">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f97316] transition-colors">{srv.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium mb-4">{srv.desc}</p>
                
                <div className="mt-auto">
                  <button className="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#f97316] flex items-center gap-2 transition-colors">
                    Learn More 
                    <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;