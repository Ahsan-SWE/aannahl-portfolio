
import w1 from '../img/w1.png';

const Portfolio = () => (
  <section className="py-20 px-6 bg-white">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-extrabold uppercase tracking-widest text-black">Our Work</h2>
    </div>
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
      <div className="md:w-5/12 text-left">
        <h3 className="text-2xl font-extrabold text-black mb-4">Buzz Moving</h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          Buzz Moving provides highly professional and fully insured transportation services. We built an advanced online booking and tracking software tailored to their unique operational needs.
        </p>
        <button className="text-[#f97316] font-bold hover:text-[#ea580c] flex items-center gap-2 uppercase text-sm tracking-wider">
          Explore Project <span>→</span>
        </button>
      </div>
      <div className="md:w-7/12">
        <img src={w1} alt="Buzz Moving Mockup" className="w-full object-contain" />
      </div>
    </div>
  </section>
);

export default Portfolio;