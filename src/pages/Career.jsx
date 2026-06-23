import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Career = () => {
  const [expandedId, setExpandedId] = useState(null);

  // Job Data
  const jobs = [
    {
      id: 1,
      title: "Full Stack Software Engineer",
      department: "Engineering",
      type: "Full-Time",
      location: "On-site, Dhaka",
      experience: "2-3 Years",
      context: "We are looking for a highly skilled Full Stack Software Engineer to join our dynamic team. You will be responsible for developing and designing robust web architecture.",
      responsibilities: [
        "Design, develop, and maintain web applications using modern frameworks.",
        "Write clean, scalable, and highly efficient code.",
        "Lead the entire web application development life cycle.",
        "Collaborate with cross-functional teams to define and launch new features."
      ],
      requirements: [
        "Strong proficiency in React.js, Node.js, and Express.",
        "Experience with RESTful APIs and modern database systems.",
        "Familiarity with version control tools like Git.",
        "B.Sc in Computer Science or relevant field."
      ]
    },
    {
      id: 2,
      title: "Mid-Level WordPress Developer",
      department: "Web Development",
      type: "Full-Time",
      location: "On-site, Dhaka",
      experience: "2+ Years",
      context: "We need a creative WordPress Developer who will be responsible for both back-end and front-end development, including creating WordPress themes and plugins.",
      responsibilities: [
        "Develop and customize WordPress themes and plugins.",
        "Ensure high-performance and manage all technical aspects of the CMS.",
        "Conduct website performance tests and troubleshoot content issues."
      ],
      requirements: [
        "Proven experience as a WordPress Developer.",
        "Strong knowledge of PHP, HTML5, CSS3, and JavaScript.",
        "Experience with responsive and adaptive design."
      ]
    },
    {
      id: 3,
      title: "Junior SEO Specialist",
      department: "Marketing",
      type: "Full-Time",
      location: "On-site, Dhaka",
      experience: "1+ Years",
      context: "We are looking for a Junior SEO Specialist to manage all search engine optimization and marketing activities, driving traffic and improving rankings.",
      responsibilities: [
        "Perform keyword research and identify content gaps.",
        "Optimize website content, landing pages, and paid search copy.",
        "Execute link-building strategies and outreach campaigns."
      ],
      requirements: [
        "Basic understanding of SEO algorithms and ranking methods.",
        "Familiarity with Google Analytics, Search Console, and SEO tools.",
        "Excellent written and verbal communication skills."
      ]
    }
  ];

  // Benefits Data
  const benefits = [
    { title: "Health & Wellness", text: "Comprehensive health coverage for you and your family.", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { title: "Continuous Growth", text: "Annual learning stipends and access to global conferences.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
    { title: "Flexible Time", text: "Generous PTO, sick leaves, and flexible working hours.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { title: "Premium Gear", text: "Top-of-the-line MacBooks and ergonomic home office setups.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white min-h-screen selection:bg-[#f97316] selection:text-white">
      
      {/* 1. ULTRA-MINIMAL HERO SECTION */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 bg-[#050505] overflow-hidden">
        {/* Soft Mesh Gradient Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#f97316] rounded-full blur-[150px] mix-blend-screen"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#2a2a2a] rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative z-10 max-w-[80rem] mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse"></span>
            <span className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">We're Hiring</span>
          </motion.div>
          
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white mb-6 leading-[1.05]">
            Do the best work <br className="hidden md:block"/> of your life.
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-lg md:text-2xl font-light text-gray-400 max-w-2xl leading-relaxed">
            Join AanNah to build software that shapes the future. We value craftsmanship, deep work, and extreme ownership.
          </motion.p>
        </div>
      </section>

      {/* 2. PREMIUM PERKS (Why Join Us) */}
      <section className="py-24 bg-[#fcfcfc] border-b border-gray-100">
        <div className="max-w-[80rem] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Everything you need to excel</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-orange-50 text-[#f97316] flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SLEEK ROW-BASED JOB LISTINGS (No bulky boxes) */}
      <section className="py-24 md:py-32">
        <div className="max-w-[65rem] mx-auto px-6 lg:px-8">
          
          <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Open Roles</h2>
              <p className="text-gray-500 mt-2 font-medium">{jobs.length} positions available</p>
            </div>
          </div>

          <div className="flex flex-col">
            {jobs.map((job) => {
              const isExpanded = expandedId === job.id;

              return (
                <div key={job.id} className="border-b border-gray-200 group">
                  {/* Clean Clickable Row */}
                  <div 
                    onClick={() => toggleExpand(job.id)}
                    className="py-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-gray-50 transition-colors duration-300 px-4 -mx-4 rounded-xl"
                  >
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${isExpanded ? 'text-[#f97316]' : 'text-gray-900 group-hover:text-[#f97316]'}`}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-3">
                        <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-md">{job.department}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-sm text-gray-500">{job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className="text-sm text-gray-500">{job.type}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <span className="hidden md:block text-sm font-bold text-gray-400 uppercase tracking-widest">Exp: {job.experience}</span>
                      <div className={`w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-[#f97316] border-[#f97316] text-white rotate-45' : 'bg-white text-gray-400 group-hover:border-[#f97316] group-hover:text-[#f97316]'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Elegant Expandable Details */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-12 px-4 -mx-4">
                          <p className="text-gray-600 text-lg leading-relaxed font-medium mb-10 max-w-4xl">
                            {job.context}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">What you'll do</h4>
                              <ul className="space-y-4">
                                {job.responsibilities.map((req, i) => (
                                  <li key={i} className="flex gap-4 text-gray-600">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0"></div>
                                    <span className="leading-relaxed">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Requirements */}
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">What you'll need</h4>
                              <ul className="space-y-4">
                                {job.requirements.map((req, i) => (
                                  <li key={i} className="flex gap-4 text-gray-600">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0"></div>
                                    <span className="leading-relaxed">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-12">
                            <a href={`mailto:info@aannah.com?subject=Application for ${job.title}`}>
                              <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors duration-300 shadow-[0_10px_20px_rgba(249,115,22,0.2)]">
                                Apply for this role
                              </button>
                            </a>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Career;