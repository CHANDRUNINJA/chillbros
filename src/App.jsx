import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Basic Reveal Animation Logic
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />

      <div className="reveal">
        <Services />
      </div>

      <div className="reveal">
        <Technologies />
      </div>

      <div className="reveal">
        <Portfolio />
      </div>

      <div className="reveal">
        <WhyChooseUs />
      </div>

      <div className="reveal">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
