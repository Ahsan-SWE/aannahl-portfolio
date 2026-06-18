
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <section className="relative py-32 bg-[#f4f6f8] text-gray-900 overflow-hidden z-0 border-b border-gray-200">
      
   
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f97316] rounded-full filter blur-[150px] opacity-[0.08] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-200 rounded-full filter blur-[150px] opacity-[0.3] pointer-events-none -z-10"></div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-[11px] text-[#f97316] uppercase tracking-[0.3em] mb-4 font-bold">Contact Us</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900">Let's start a conversation.</h3>
        </motion.div>

       
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col lg:flex-row overflow-hidden"
        >
       
          <div className="w-full lg:w-1/2 p-10 lg:p-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
            
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative z-10">
              
              {/* Quick Info */}
              <div className="flex flex-wrap gap-8 mb-16 text-sm font-medium text-gray-600">
                <p className="flex items-center gap-2 hover:text-[#f97316] transition-colors cursor-pointer">
                  <span className="text-[#f97316] font-bold">✉</span> info@aannah.com
                </p>
                <p className="flex items-center gap-2 hover:text-[#f97316] transition-colors cursor-pointer">
                  <span className="text-[#f97316] font-bold">✆</span> +880 16292 70830
                </p>
              </div>

              <form className="space-y-10">
                
                <div className="flex flex-col md:flex-row gap-10">
                
                  <motion.div variants={fadeUp} className="relative w-full">
                    <input 
                      type="text" 
                      id="firstName" 
                      className="peer w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#f97316] transition-colors" 
                      placeholder="First Name" 
                    />
                    <label 
                      htmlFor="firstName" 
                      className="absolute left-0 -top-4 text-xs font-semibold text-[#f97316] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#f97316] cursor-text"
                    >
                      First Name
                    </label>
                  </motion.div>

                
                  <motion.div variants={fadeUp} className="relative w-full">
                    <input 
                      type="text" 
                      id="lastName" 
                      className="peer w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#f97316] transition-colors" 
                      placeholder="Last Name" 
                    />
                    <label 
                      htmlFor="lastName" 
                      className="absolute left-0 -top-4 text-xs font-semibold text-[#f97316] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#f97316] cursor-text"
                    >
                      Last Name
                    </label>
                  </motion.div>
                </div>

              
                <motion.div variants={fadeUp} className="relative w-full">
                  <input 
                    type="email" 
                    id="email" 
                    className="peer w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#f97316] transition-colors" 
                    placeholder="Email Address" 
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute left-0 -top-4 text-xs font-semibold text-[#f97316] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#f97316] cursor-text"
                  >
                    Email Address
                  </label>
                </motion.div>

                <motion.div variants={fadeUp} className="relative w-full">
                  <textarea 
                    id="message" 
                    rows="4"
                    className="peer w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 placeholder-transparent focus:outline-none focus:border-[#f97316] transition-colors resize-none" 
                    placeholder="Tell us about your project" 
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className="absolute left-0 -top-4 text-xs font-semibold text-[#f97316] uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#f97316] cursor-text"
                  >
                    Tell us about your project
                  </label>
                </motion.div>

                <motion.div variants={fadeUp} className="pt-6">
                
                  <button type="submit" className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-gray-900 text-white px-12 py-4 rounded-full font-extrabold uppercase tracking-widest text-xs hover:bg-[#f97316] hover:shadow-[0_10px_20px_rgba(249,115,22,0.2)] transition-all duration-500">
                    Send Message
                    <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-500"></span>
                  </button>
                </motion.div>

              </form>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative bg-gray-100 border-t lg:border-t-0 lg:border-l border-white/60">
            <iframe 
              src="https://maps.google.com/maps?q=House-23,%20Road-4,%20Block-A,%20Banani,%20Dhaka-1213&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="AanNah Office Location"
              className="absolute inset-0 object-cover w-full h-full"
            ></iframe>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;