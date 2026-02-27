import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`} style={{ top: '10px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '800' }}>
          <div style={{ background: 'var(--gradient-tech)', padding: '8px', borderRadius: '10px', display: 'flex' }}>
            <Rocket size={24} color="white" />
          </div>
          <span className="text-gradient">CHILLBROS</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: '500', color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
            Free Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', cursor: 'pointer' }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass" style={{ position: 'absolute', top: '100%', left: 0, width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontSize: '1.1rem' }} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
            Free Consultation
          </a>
        </div>
      )}

      <style jsx="true">{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
