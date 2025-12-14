import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <WhyUs />
        <Process />
        <Results />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;