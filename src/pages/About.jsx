import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Dummy Client Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CTO, TechFlow",
      review: "Aan Nah completely transformed our digital infrastructure. Their engineering team is top-notch and delivered our SaaS product 2 months ahead of schedule.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Aurelius",
      role: "Founder, Zenith Health",
      review: "The level of professionalism and technical expertise is unmatched. They didn't just build an app; they helped us refine our entire product strategy.",
      rating: 5
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "VP of Operations, GlobalLogix",
      review: "Finding a reliable offshore team was a challenge until we met Aan Nah. Their dedicated developers integrated seamlessly with our internal team.",
      rating: 5
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-[80px]">
      
      {/* 1. ULTRA-MODERN CINEMATIC HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-[#050505] text-white overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Glowing Orbs */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#f97316] rounded-full blur-[150px]"
          ></motion.div>
          <div className="absolute bottom-[-20%] -left-20 w-[500px] h-[500px] bg-yellow-600 rounded-full blur-[150px] opacity-10"></div>
          
          {/* Modern Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          
          {/* Subtle Image Overlay */}
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
        </div>

        <motion.div 
          variants={staggerContainer} initial="hidden" animate="visible"
          className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-8 text-center pt-20 pb-32"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
            <span className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Since 2004</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.1]">
            Innovation <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-yellow-500">
              Engineering.
            </span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-2xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            We build digital solutions for clients worldwide. Transforming complex ideas into elegant realities.
          </motion.p>
        </motion.div>

        {/* Floating Glassmorphism Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-10 left-6 right-6 md:left-1/2 md:-translate-x-1/2 md:right-auto md:w-[800px] z-20 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-around items-center gap-8 shadow-2xl"
        >
          <div className="text-center">
            <h4 className="text-3xl font-black text-white">20+</h4>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years Experience</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div className="text-center">
            <h4 className="text-3xl font-black text-white">500+</h4>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Projects Delivered</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div className="text-center">
            <h4 className="text-3xl font-black text-[#f97316]">100%</h4>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Client Satisfaction</p>
          </div>
        </motion.div>

      </section>

      {/* 2. STORY SECTION - SPLIT LAYOUT */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-[90rem] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Sticky Title */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="w-full lg:w-1/3 lg:sticky lg:top-32 h-fit"
            >
              <h2 className="text-[12px] text-[#f97316] font-bold uppercase tracking-[0.3em] mb-4">The Story</h2>
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                In A <br className="hidden lg:block" /> Nutshell
              </h3>
              
              <div className="flex flex-col gap-4">
                <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-black text-xl">04</div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Established</p>
                    <p className="text-lg font-black text-gray-900">Since 2004</p>
                  </div>
                </div>
                <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#f97316] text-white rounded-full flex items-center justify-center font-black text-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#f97316] font-bold uppercase tracking-widest">Reach</p>
                    <p className="text-lg font-black text-orange-900">Global Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="w-full lg:w-2/3 prose prose-lg prose-gray max-w-none"
            >
              <motion.div variants={fadeUp} className="mb-12">
                <p className="text-2xl text-gray-900 font-medium leading-relaxed">
                  We are a custom software company in Bangladesh. We started as a start-up software outsourcing company in 2004. We became a Bangladesh limited company in 2005 and have been growing every year.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="mb-12">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#f97316]"></span> Solving Complex Challenges
                </h4>
                <p className="text-gray-600 leading-loose">
                  We find technical solutions for our clients. Typically this would mean we are building software products for them. We offer software development to international customers across multiple industries. We understand the challenges that our customers face within and across these industries. We provide practical, pragmatic and powerful solutions to address those challenges.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-gray-50 p-8 md:p-10 rounded-[2rem] border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f97316]/5 rounded-bl-full transition-transform group-hover:scale-110"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Single Goal</h4>
                <p className="text-gray-600 leading-loose relative z-10">
                  Getting great software out to users is the single goal that drives us. Our mix of skills and talent means we have everything to meet that goal in one place. 
                  <strong className="block mt-4 text-gray-900 font-bold">Design, development, testing, deployment, content and anything in between those clearly defined roles – we cover it all.</strong>
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MODERN CLIENT REVIEWS SECTION */}
      <section className="py-24 md:py-32 px-6 bg-[#f8f9fa] border-t border-gray-100 relative overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#f97316]/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-[90rem] mx-auto relative z-10">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="text-[12px] text-[#f97316] font-bold uppercase tracking-[0.3em] mb-4">Wall of Love</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              What Our Clients Say
            </h3>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reviews.map((review) => (
              <motion.div 
                key={review.id} variants={fadeUp}
                className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 relative group"
              >
                {/* Quote Icon */}
                <div className="text-[#f97316]/20 mb-6 group-hover:text-[#f97316]/40 transition-colors">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L16.41 14.59C16.89 13.33 17.13 12.01 17.13 10.65V3H21V10.65C21 12.87 20.59 14.88 19.78 16.65L17.29 21H14.017ZM5.017 21L7.41 14.59C7.89 13.33 8.13 12.01 8.13 10.65V3H12V10.65C12 12.87 11.59 14.88 10.78 16.65L8.29 21H5.017Z" />
                  </svg>
                </div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                  "{review.review}"
                </p>

                <div className="mt-auto border-t border-gray-100 pt-6">
                  <h4 className="text-gray-900 font-bold text-lg">{review.name}</h4>
                  <p className="text-[#f97316] text-sm font-medium">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default About;