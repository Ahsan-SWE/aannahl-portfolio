import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Local Image Imports
import ceoImg from '../img/CEO.jpeg';
import mdImg from '../img/MD.jpeg';
import ctoImg from '../img/CTO.jpeg';
import cooImg from '../img/COO.jpeg';
import cfoImg from '../img/CFO.jpeg';
import hrImg from '../img/HR.jpeg';

const Team = () => {
  // Enhanced Team Data with Categories, Expertise, and Socials
  const teamMembers = [
    { 
      id: 1,
      name: 'Aminul Islam', 
      role: 'Founder & CEO', 
      category: 'Leadership',
      expertise: ['Product Strategy', 'Growth'],
      desc: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.', 
      img: ceoImg,
      socials: { linkedin: '#', twitter: '#' }
    },
    { 
      id: 2,
      name: 'Nazmus Sadat', 
      role: 'Engineering Manager', 
      category: 'Engineering',
      expertise: ['System Architecture', 'DevOps'],
      desc: 'Lead engineering teams at Netflix, Pitch, and Protocol Labs.', 
      img: mdImg,
      socials: { linkedin: '#', github: '#' }
    },
    { 
      id: 3,
      name: 'Mosarrof Hossain', 
      role: 'Product Designer', 
      category: 'Design',
      expertise: ['UI/UX', 'Design Systems'],
      desc: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.', 
      img: ctoImg,
      socials: { linkedin: '#', twitter: '#' }
    },
    { 
      id: 4,
      name: 'Mohammad Talat Rahman', 
      role: 'Full Stack Developer', 
      category: 'Engineering',
      expertise: ['React.js', 'Node.js'],
      desc: 'Former frontend dev for Linear, Coinbase, and Postscript.', 
      img: cooImg,
      socials: { linkedin: '#', github: '#' }
    },
    { 
      id: 5,
      name: 'Samsul Haque', 
      role: 'Chief Financial Officer', 
      category: 'Leadership',
      expertise: ['Finance', 'SaaS Scaling'],
      desc: 'Managed global finance at Revolut and Monzo. Expert in scaling SaaS.', 
      img: cfoImg,
      socials: { linkedin: '#' }
    },
    { 
      id: 6,
      name: 'Mainuddin Ahmed', 
      role: 'Head of HR', 
      category: 'Operations',
      expertise: ['Culture', 'Talent Acquisition'],
      desc: 'Built culture and talent acquisition pipelines at Google and Atlassian.', 
      img: hrImg,
      socials: { linkedin: '#', twitter: '#' }
    }
  ];

  // Filter State
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Leadership', 'Engineering', 'Design', 'Operations'];

  // Filter Logic
  const filteredTeam = activeFilter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeFilter);

  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-32 pb-24 font-sans selection:bg-[#f97316] selection:text-white">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
        
        {/* 1. Premium Header Section */}
        <motion.div 
          initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.span variants={fadeUp} className="text-[#f97316] font-bold uppercase tracking-[0.3em] text-[10px] md:text-[12px] mb-4 block">
            The Masterminds
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-6 leading-tight">
            We are the people who <br className="hidden md:block" /> make up AanNah
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">
            Our philosophy is simple: hire world-class talent, give them unmatched resources, and let them build the future of software.
          </motion.p>
        </motion.div>

        {/* 2. Dynamic Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-gray-900 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* 3. Interactive Team Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                key={member.id} 
                className="bg-white rounded-[2rem] p-5 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 group flex flex-col"
              >
                {/* Image Container with Hover Zoom */}
                <div className="w-full aspect-square bg-[#f2f4f3] rounded-3xl overflow-hidden mb-6 relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110" 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x400?text=Profile'; }}
                  />
                  {/* Category Badge overlaying image */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-gray-800 shadow-sm">
                    {member.category}
                  </div>
                </div>

                {/* Info Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-black text-gray-900 tracking-tight">{member.name}</h3>
                  <p className="text-[#f97316] font-bold text-xs uppercase tracking-widest mt-1 mb-4">{member.role}</p>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{member.desc}</p>
                  
                  {/* Expertise Tags & Socials Row */}
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                    
                    {/* Tags */}
                    <div className="flex gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="text-[10px] font-semibold bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-3 text-gray-400">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="hover:text-[#f97316] transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="hover:text-gray-900 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Team;