
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Team from './pages/Team';
import ServicesPage from './pages/ServicesPage';
import Career from './pages/Career';
import ContactPage from './pages/ContactPage';


import Hero from './components/Hero';
import Services from './components/Services';
import MidBanner from './components/MidBanner';
import HowWeWork from './components/HowWeWork';
import DarkStrip from './components/DarkStrip';
import Portfolio from './components/Portfolio';
import TechExpertise from './components/TechExpertise';
import Contact from './components/Contact';


const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <MidBanner />
      <HowWeWork />
      <DarkStrip />
      <Portfolio />
      <TechExpertise />
      <Contact />
    </main>
  );
};


const PageWrapper = ({ title }) => (
  <div className="h-screen flex items-center justify-center bg-[#f8f9fa] pt-20">
    <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-widest">{title}</h1>
  </div>
);


export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-white selection:bg-[#1f2937] selection:text-white flex flex-col min-h-screen">
      
        <TopBar />
        <Navbar />
        
      
        <div className="flex-grow">
        <Routes>
  <Route path="/" element={<Home />} />
  
  
  <Route path="/about" element={<About />} />
  
  
 <Route path="/team" element={<Team />} />
  <Route path="/services" element={<ServicesPage />} />
  <Route path="/portfolio" element={<PageWrapper title="Full Portfolio" />} />
 <Route path="/career" element={<Career />} />
 <Route path="/contact" element={<ContactPage />} />

</Routes>
        </div>

        
        <Footer />
        
      </div>
    </Router>
  );
}