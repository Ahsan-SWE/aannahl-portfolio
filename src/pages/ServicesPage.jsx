
import { motion } from "framer-motion";

const ServicesPage = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

 
  const servicesData = [
    {
      id: "01",
      title: "Web Application",
      desc: "We deliver cutting-edge custom web development services to record automated operations, increase business efficiency and profitability.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
      features: [
        {
          title: "Progressive Web Development",
          text: "Fast, reliable, and engaging web applications that provide a native app-like experience.",
        },
        {
          title: "Content Management System (CMS)",
          text: "Custom-tailored CMS solutions to effortlessly manage your digital content and assets.",
        },
        {
          title: "Custom Ecommerce Platform",
          text: "Scalable and secure online stores built to maximize your sales and customer retention.",
        },
        {
          title: "Custom ERP Systems",
          text: "Streamline complex business processes with integrated enterprise resource planning software.",
        },
      ],
    },
    {
      id: "02",
      title: "Mobile Application",
      desc: "Delivering world-class mobile experiences with native and cross-platform technologies tailored to your specific business goals.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200",
      features: [
        {
          title: "Native & Cross-platform Apps",
          text: "High-performance applications built for both iOS and Android using modern frameworks.",
        },
        {
          title: "Android Apps",
          text: "Custom Android development ensuring compatibility across a wide range of devices.",
        },
        {
          title: "iOS & iPad Apps",
          text: "Elegant and secure iOS applications designed strictly adhering to Apple's guidelines.",
        },
        {
          title: "Wearable & IoT Apps",
          text: "Connecting next-gen smart devices to mobile ecosystems for real-time data syncing.",
        },
      ],
    },
    {
      id: "03",
      title: "UI/UX Design",
      desc: "User-centric design that builds engaging experiences. We transform complex logic into intuitive, accessible, and beautiful interfaces.",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200",
      features: [
        {
          title: "Research & Discovery",
          text: "Identifying user needs, market gaps, and defining the core product strategy.",
        },
        {
          title: "Information Architecture",
          text: "Structuring and organizing content to ensure logical and easy navigation.",
        },
        {
          title: "Interaction Design",
          text: "Creating meaningful interactions that delight users and reduce friction.",
        },
        {
          title: "Visual Design & Prototyping",
          text: "Crafting pixel-perfect designs and interactive prototypes for user testing.",
        },
      ],
    },
    {
      id: "04",
      title: "Dedicated Team",
      desc: "Seamlessly extend your in-house software engineering team with our dedicated offshore professionals to scale your production.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
      features: [
        {
          title: "Discover & Align",
          text: "We analyze your tech stack, culture, and requirements to find the perfect engineering match.",
        },
        {
          title: "Ramp Up & Integrate",
          text: "Smooth onboarding process integrating our developers into your daily workflows and sprints.",
        },
        {
          title: "Operate & Scale",
          text: "Continuous delivery with regular performance reviews and the flexibility to scale the team.",
        },
      ],
    },
    {
      id: "05",
      title: "Support & Maintenance",
      desc: "Comprehensive software maintenance, security updates, and performance optimization to ensure uninterrupted business operations.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      features: [
        {
          title: "Quality Assurance & Testing",
          text: "Rigorous manual and automated testing to eliminate bugs before they reach your users.",
        },
        {
          title: "Security & Compliance",
          text: "Regular vulnerability assessments and updates to protect sensitive business data.",
        },
        {
          title: "Performance Tuning",
          text: "Optimizing code and database queries to ensure maximum application speed.",
        },
        {
          title: "System Integration",
          text: "Safely updating third-party APIs and integrating new modules without breaking legacy code.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 bg-[#050505] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f97316] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,transparent_0%,rgba(5,5,5,1)_100%)]"></div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-8 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f97316] to-yellow-500">
              Services
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl font-light text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            End-to-end digital engineering and consulting to help you build,
            scale, and maintain world-class software.
          </motion.p>
        </motion.div>
      </section>

     
      <section className="py-20">
        <div className="max-w-[90rem] mx-auto px-6 lg:px-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-20 border-b border-gray-100 last:border-0 relative"
            >
             
              <div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-fit">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeUp}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl font-black text-gray-200">
                      {service.id}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                  <div className="w-16 h-1 bg-[#f97316] mb-6"></div>

                 
                  <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-lg mb-6 group bg-gray-100">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </motion.div>
              </div>

            
              <div className="w-full lg:w-7/12 pt-0 lg:pt-16">
                <div className="flex flex-col gap-8">
                  {service.features.map((feature, fIndex) => (
                    <motion.div
                      key={fIndex}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      variants={fadeUp}
                      className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#f97316]/20 transition-all duration-300 group flex gap-6"
                    >
                     
                      <div className="shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#f97316] group-hover:bg-[#f97316] group-hover:text-white transition-colors duration-300">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>

                    
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#f97316] transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                          {feature.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
