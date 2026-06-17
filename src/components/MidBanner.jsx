

import mteam from '../img/mteam.png';

const MidBanner = () => (

<section className=" relative py-32 md:py-48 bg-cover bg-fixed bg-center"
style={{ backgroundImage: `url(${mteam})` }}>
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative z-10 w-full px-6 md:px-20 text-right flex justify-end">
<h2 className="text-2xl md:text-4xl font-semibold text-white italic leading-relaxed max-w-2xl drop-shadow-lg">
"We are a software company committed to taking your dreams to life with our standard products."
</h2>
</div>


</section>
)

export default MidBanner;
