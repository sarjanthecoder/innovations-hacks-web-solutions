import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Works from './components/Works';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white selection:bg-cyan-neon selection:text-navy-950 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <WhyChooseUs />
        <Services />
        <Works />
        <Workflow />
        <Testimonials />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;