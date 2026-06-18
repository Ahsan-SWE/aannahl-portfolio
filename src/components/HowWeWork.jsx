import React from 'react';
import { motion } from 'framer-motion';
import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';

const HowWeWork = () => {
  const processSteps = [
    {
      id: '01',
      title: 'Discovery & Strategy',
      desc: 'Before writing a single line of code, we dive deep into your business goals. We analyze the market, map out user journeys, and create a comprehensive technical blueprint.',
      img: p1,
      bgImg: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Market Research', 'Wireframing', 'Tech Stack']
    },
    {
      id: '02',
      title: 'Agile Development',
      desc: 'Our engineering team brings the design to life. We work in transparent, weekly sprints, ensuring you are always in the loop while we build scalable architecture.',
      img: p2,
      bgImg: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Frontend & Backend', 'Weekly Sprints', 'Code Reviews']
    },
    {
      id: '03',
      title: 'Testing & Deployment',
      desc: 'Rigorous Quality Assurance testing guarantees a flawless product. Once approved, we handle the complex deployment process and prepare your system for market.',
      img: p3,
      bgImg: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['QA Testing', 'Cloud Deployment', 'Support']
    }
  ];

  // Advanced Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const textReveal = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const imageScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="py-16 px-6 bg-white relative overflow-hidden border-b border-gray-100">
      
      {/* Decorative Background Elements (Subtle) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-50/50 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <div className="max-w-[85rem] mx-auto">
        
        {/* Section Header - Reduced Margins */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={textReveal}
          className="text-center mb-16"
        >
          <h2 className="text-[11px] text-[#f97316] uppercase tracking-[0.3em] font-extrabold mb-2">Our Process</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-3">How We Work</h3>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">A streamlined, transparent, and results-driven approach.</p>
        </motion.div>
        
        {/* Vertical Timeline Container - Reduced Spacing */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Center Dashed Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-20">
            {processSteps.map((step, i) => {
              const isEven = i % 2 !== 0; 

              return (
                <motion.div 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} 
                  variants={containerVariants}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative z-10 group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* Animated Text Content Area */}
                  <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    
                    {/* Gorgeous Hollow Number */}
                    <motion.span variants={textReveal} className="text-6xl md:text-7xl font-black text-transparent [-webkit-text-stroke:2px_#f3f4f6] group-hover:[-webkit-text-stroke:2px_#f97316] transition-all duration-500 mb-4 leading-none">
                      {step.id}
                    </motion.span>
                    
                    {/* Original Image as Small Badge */}
                    <motion.div variants={textReveal} className="w-14 h-14 bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.04)] rounded-2xl flex items-center justify-center p-2.5 mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                      <img src={step.img} alt={`${step.title} Icon`} className="w-full h-full object-contain mix-blend-multiply" />
                    </motion.div>

                    {/* Gradient Animated Title */}
                    <motion.h4 variants={textReveal} className="text-xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-3 bg-[length:200%_auto] animate-gradient">
                      {step.title}
                    </motion.h4>
                    
                    <motion.p variants={textReveal} className="text-gray-500 leading-relaxed font-medium mb-5 text-sm">
                      {step.desc}
                    </motion.p>
                    
                    {/* Tags */}
                    <motion.div variants={textReveal} className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                      {step.tags.map((tag, idx) => (
                        <span key={idx} className="bg-gray-50 border border-gray-200 text-gray-500 group-hover:border-[#f97316]/30 group-hover:text-[#f97316] transition-colors text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Center Dot (Desktop Only) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full border-[3px] border-gray-100 items-center justify-center z-20 shadow-sm group-hover:border-[#f97316]/30 transition-colors">
                    <div className="w-2.5 h-2.5 bg-gray-300 group-hover:bg-[#f97316] rounded-full transition-colors duration-500"></div>
                  </div>

                  {/* Image Display Area - Height Reduced */}
                  <motion.div variants={imageScale} className="w-full md:w-1/2 relative">
                    <div className="w-full h-52 md:h-64 rounded-3xl overflow-hidden relative shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img src={step.bgImg} alt="Background" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Required CSS for Gradient Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}} />
    </section>
  );
};

export default HowWeWork;