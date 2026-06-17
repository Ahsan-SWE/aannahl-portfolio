import p1 from '../img/p1.png';
import p2 from '../img/p2.png';
import p3 from '../img/p3.png';


const HowWeWork = () => 

 (
    <section className="py-20 px-6 bg-white text-center">   

<h2 className="text-3xl font-extrabold uppercase tracking-widest text-black mb-16">How We Work</h2>

<div className="flex flex-col md:flex-row justify-center gap-2 max-w-6xl mx-auto">

<img src={p1} className="w-64 md:w-80 object-contain hover:scale-105 transition-transform"/>
<img src={p2} className="w-64 md:w-80 object-contain hover:scale-105 transition-transform"/>
<img src={p3} className="w-64 md:w-80 object-contain hover:scale-105 transition-transform"/>

</div>

</section>
)


export default HowWeWork;

