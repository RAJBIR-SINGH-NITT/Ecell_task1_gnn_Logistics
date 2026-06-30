import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // assembling the landing page components in order
  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;