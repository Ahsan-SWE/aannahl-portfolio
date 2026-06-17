
import s1 from '../img/s1.png';
import s2 from '../img/s2.png';
import s3 from '../img/s3.png';
import s4 from '../img/s4.png';
import s5 from '../img/s5.png';

const Services = () => {
  const serviceData = [
    { img: s1, title: 'WEB DEVELOPMENT' },
    { img: s2, title: 'MOBILE APP DEVELOPMENT' },
    { img: s3, title: 'UI/UX DESIGN' },
    { img: s4, title: 'ENTERPRISE SOLUTION' },
    { img: s5, title: 'CLIENT SUPPORT' },
  ];

return (
    <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold uppercase tracking-widest text-black">Our Services</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-16">
        {serviceData.map((service, i) => (
          <div key={i} className="flex flex-col items-center text-center w-32 group cursor-pointer">
            <div className="h-24 flex items-center justify-center mb-4 transform group-hover:-translate-y-2 transition duration-300">
               <img src={service.img} alt={service.title} className="max-h-full object-contain" />
            </div>
            <h3 className="font-bold text-xs uppercase text-gray-800">{service.title}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 text-sm text-gray-600">
        <div>
          <h4 className="text-[#f97316] font-bold text-base mb-2 uppercase">Web Development</h4>
          <p className="leading-relaxed">We build responsive, fast, and highly secure websites tailored to your business needs. From single-page applications to complex enterprise solutions, our code is clean and scalable.</p>
        </div>
        <div>
          <h4 className="text-[#f97316] font-bold text-base mb-2 uppercase">UI/UX Design</h4>
          <p className="leading-relaxed">Our design team creates intuitive and engaging user experiences. We focus on usability, accessibility, and aesthetics to ensure your product stands out in the market.</p>
        </div>
        <div>
          <h4 className="text-[#f97316] font-bold text-base mb-2 uppercase">Mobile App Development</h4>
          <p className="leading-relaxed">Deliver seamless experiences across iOS and Android platforms. We use modern frameworks to build native-like apps that are fast, reliable, and user-friendly.</p>
        </div>
        <div>
          <h4 className="text-[#f97316] font-bold text-base mb-2 uppercase">Digital Marketing</h4>
          <p className="leading-relaxed">Boost your online presence with our data-driven digital marketing strategies. We handle SEO, social media marketing, and pay-per-click advertising to drive traffic and conversions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;