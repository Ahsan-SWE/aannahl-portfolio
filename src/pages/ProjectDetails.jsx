import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectId = parseInt(id);


  const projects = [
    {
      id: 1,
      title: "SOCHARA",
      tech: "Node.js",
      link: "https://www.sochara.com/auth/login",
      description: "Sochara, There's a Better Way to Manage Social Media. Get powerful social media management tools to help grow your business. We offer very skilled programmers depending on your requirements. We use the very latest technology to meet your demands.",
      images: [
        "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan_05.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan_04.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan_03.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan_02.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sochara_aan_01.jpg"
      ]
    },
    {
      id: 2,
      title: "The Sperling Law Firm",
      tech: "Wordpress",
      link: "https://thesperlinglawfirm.com",
      description: "A professional and highly responsive website tailored for The Sperling Law Firm. It features an intuitive user interface to help clients easily navigate through legal services, attorney profiles, and contact channels. Built with performance and SEO in mind.",
      images: [
        "https://aan-nahl.com/wp-content/uploads/2018/03/sparlinglaw_01-1.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sparlinglaw_04.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sparlinglaw_03.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/sparlinglaw_02.jpg"
      ]
    },
    {
      id: 3,
      title: "The Content Writers",
      tech: "Laravel",
      link: "https://thecontentwriters.com",
      description: "A robust platform built on Laravel for managing, tracking, and delivering high-quality content services. The dashboard includes seamless client-writer collaboration tools, billing integration, and an advanced content management system.",
      images: [
        "https://aan-nahl.com/wp-content/uploads/2018/03/CW1-1.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/CW3.jpg",
        "https://aan-nahl.com/wp-content/uploads/2018/03/CW2.jpg"
      ]
    },
    // Dummy Data for rest of the projects
    {
      id: 4,
      title: "Boosters of America",
      tech: "CakePHP",
      link: "#",
      description: "Custom platform developed using CakePHP to streamline operational workflows and enhance user engagement for Boosters of America.",
      images: ["https://aan-nahl.com/wp-content/uploads/2018/03/Boa1.jpg", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"]
    }
  ];

  // Find the current project
  const project = projects.find(p => p.id === projectId) || projects[0];

  // Next & Prev Logic
  const prevProjectId = projectId > 1 ? projectId - 1 : projects.length;
  const nextProjectId = projectId < projects.length ? projectId + 1 : 1;

  // Image Slider State
  const [currentImg, setCurrentImg] = useState(0);

  // Reset slider when project changes
  useEffect(() => {
    setCurrentImg(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  const nextImage = () => setCurrentImg((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImg((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      
      {/* 1. Page Header & Navigation */}
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <motion.h1 
          key={project.title} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-6"
        >
          {project.title}
        </motion.h1>
        
        <div className="flex items-center justify-center gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
          <Link to={`/portfolio/${prevProjectId}`} className="flex items-center gap-2 hover:text-[#f97316] transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Previous Project
          </Link>
          <Link to={`/portfolio/${nextProjectId}`} className="flex items-center gap-2 hover:text-[#f97316] transition-colors">
            Next Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>

      {/* 2. Interactive Image Slider inside Macbook Frame */}
      <div className="max-w-[75rem] mx-auto px-6 relative mb-16">
        
        {/* Left Arrow */}
        <button onClick={prevImage} className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-[#f97316] transition-colors">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Mac OS Window Frame */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
          <div className="bg-[#f8f9fa] rounded-t-xl border border-gray-200 border-b-0 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          
          <div className="relative aspect-[16/10] bg-gray-100 border border-gray-200 overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImg}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                src={project.images[currentImg]} 
                alt={`${project.title} screenshot ${currentImg + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </AnimatePresence>
          </div>
          
          {/* Laptop Bottom Lip */}
          <div className="h-6 bg-gray-300 rounded-b-2xl shadow-md flex justify-center">
            <div className="w-32 h-2 bg-gray-400 rounded-b-md"></div>
          </div>
        </motion.div>

        {/* Right Arrow */}
        <button onClick={nextImage} className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-gray-400 hover:text-[#f97316] transition-colors">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Slider Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {project.images.map((_, index) => (
            <button 
              key={index} onClick={() => setCurrentImg(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImg === index ? 'bg-[#f97316] scale-125' : 'bg-gray-200 hover:bg-gray-300 border border-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* 3. Project Description Split Layout */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-gray-200 pt-16">
          
          {/* Left Column: Meta Data */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-black text-gray-900 mb-8 border-b border-gray-200 pb-4">Project Description</h3>
            
            <div className="mb-6">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Technologies</h4>
              <p className="text-gray-500 font-medium">{project.tech}</p>
            </div>
            
            {project.link !== "#" && (
              <div className="mt-8">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#f97316] font-medium hover:underline break-words">
                  {project.link}
                </a>
              </div>
            )}
          </div>

          {/* Right Column: Text Details */}
          <div className="w-full md:w-2/3 pt-2 md:pt-16">
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

        </motion.div>
      </div>

    </div>
  );
};

export default ProjectDetails;