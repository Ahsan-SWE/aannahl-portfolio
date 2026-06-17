import TopBar from "./components/TopBar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import MidBanner from "./components/MidBanner"


export default function App() { 

  return (

<div className="font-sans antialiased bg-white selection:bg-[#1f2937] selection:text-white">
      <TopBar />
<Navbar/>
<Hero/>
<Services/>
<MidBanner/>
</div>
  )

}













