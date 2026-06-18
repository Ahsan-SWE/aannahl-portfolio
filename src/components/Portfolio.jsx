
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { 
      title: 'Buzz Moving ERP', 
      cat: 'Logistics Operations',
      span: 'lg:col-span-2', 
     
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPJJNHiuWiuqGTWOQt4kJUyNRh2fO_V8F9_gzysWAYWMJdkTIxFB6VVYc&s=10' 
    },
    { 
      title: 'FinEdge Analytics', 
      cat: 'Fintech Dashboard',
      span: 'lg:col-span-1', 
      
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800' 
    },
    { 
      title: 'Aura Health App', 
      cat: 'E-Health Portal',
      span: 'lg:col-span-1', 
      
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800' 
    },
    { 
      title: 'Cloud Admin Panel', 
      cat: 'SaaS Infrastructure',
      span: 'lg:col-span-2', 
      
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200' 
    }
  ];

  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        <div className="mb-12 border-l-4 border-[#f97316] pl-6">
          <h2 className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">Selected Work</h2>
          <h3 className="text-4xl font-black text-gray-900 mt-1">Portfolio & Case Studies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[320px]">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl overflow-hidden group shadow-md ${p.span}`}
            >
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <span className="text-[#f97316] text-[10px] font-bold uppercase tracking-widest">{p.cat}</span>
                <h4 className="text-white text-2xl font-bold mt-1">{p.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;