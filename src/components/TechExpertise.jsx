import React from 'react';
import dotnet from '../img/dotnet.png';
import t1 from '../img/t1.png'; 
import t2 from '../img/t2.png'; 
import t3 from '../img/t3.png'; 
import t4 from '../img/t4.png'; 
import t5 from '../img/t5.png'; 
import t6 from '../img/t6.png'; 
import t7 from '../img/t7.png'; 

const TechExpertise = () => {
  const techLogos = [dotnet, t1, t2, t3, t4, t5, t6, t7];
  
  return (
    <section className="py-24 px-6 bg-gray-50 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold uppercase tracking-widest text-black mb-4">Key Tech Expertise</h2>
          <div className="w-16 h-1 bg-[#f97316] mx-auto rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
          {techLogos.map((logo, index) => (
            <div 
              key={index} 
              className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex items-center justify-center p-4 hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:-translate-y-2 transition-all duration-300"
            >
              <img 
                src={logo} 
                alt={`Tech Stack ${index + 1}`} 
                className="max-w-full max-h-full object-contain drop-shadow-sm" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;