import banner1 from '../img/banner1.jpg';


const Hero = () => {

return (

<header className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: `url(${banner1})`}}> 

<div className="absolute inset-0 bg-black/50"></div>
<div className="relative z-10 text-white px-4">
<h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg">Design. Develop. Inspire.</h1>
<p className="text-base md:text-xl mb-10 max-w-3xl mx-auto font-light drop-shadow-md">
        We are a software company committed to taking your dreams to life with our standard products.
      </p>
<button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-10 py-3 font-bold uppercase tracking-wider transition">
        Let's Start
      </button>
      </div>
</header > 
)

}

export default Hero;







