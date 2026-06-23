import  { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here
    alert("Message sent successfully!");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-24 pb-12 md:pt-32 md:pb-24 px-6">
      <div className="max-w-[85rem] mx-auto bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Premium Dark Branding Panel */}
        <motion.div 
          initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full lg:w-5/12 bg-[#050505] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-between"
        >
          {/* Abstract Glow Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f97316] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            <motion.span variants={fadeUp} className="text-[#f97316] font-bold uppercase tracking-[0.3em] text-[10px] md:text-[12px] mb-4 block">
              Let's Start
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
              Contact with <br/> Aan Nahl
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg leading-relaxed mb-12">
              NEED FORWARD-THINKING SOFTWARE? <br/> GET IN TOUCH WITH US.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="relative z-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#f97316]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-white font-medium">hello@aannah.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#f97316]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-white font-medium">+880 1XXX XXXXXX</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Form Area */}
        <div className="w-full lg:w-7/12 p-10 md:p-16 bg-white">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">First Name</label>
                <input 
                  type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Last Name</label>
                <input 
                  type="text" name="lastName" value={formData.lastName} onChange={handleChange} required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Company & Email Row */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Company / Organization</label>
              <input 
                type="text" name="company" value={formData.company} onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                placeholder="Your Company Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Email Address</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone & Interest Row */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Phone Number <span className="text-gray-400 font-normal capitalize">(Optional)</span></label>
              <input 
                type="tel" name="phone" value={formData.phone} onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all"
                placeholder="+880 1XXX XXXXXX"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">I am Interested In</label>
              <select 
                name="interest" value={formData.interest} onChange={handleChange} required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a service category</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Dedicated Team">Dedicated Team</option>
                <option value="Support & Maintenance">Support & Maintenance</option>
              </select>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Project Description</label>
              <textarea 
                name="description" value={formData.description} onChange={handleChange} required rows="5"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20 transition-all resize-none"
                placeholder="Tell us about your project goals, timeline, and requirements..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-4 w-full md:w-auto self-start bg-[#f97316] hover:bg-[#ea580c] text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] transition-colors shadow-[0_10px_20px_rgba(249,115,22,0.2)]"
            >
              Send Message
            </motion.button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;