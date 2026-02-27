import React from 'react';
import { Rocket, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-color)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '50px', marginBottom: '80px' }}>
                    {/* Company Bio */}
                    <div style={{ gridColumn: 'span 2' }}>
                        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px' }}>
                            <div style={{ background: 'var(--gradient-tech)', padding: '8px', borderRadius: '10px', display: 'flex' }}>
                                <Rocket size={24} color="white" />
                            </div>
                            <span className="text-gradient">CHILLBROS</span>
                        </a>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '350px', marginBottom: '20px' }}>
                            Transforming ideas into scalable digital solutions. We specialize in high-end software development for ambitious businesses.
                        </p>
                        <div style={{ marginBottom: '30px', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <p>Email: chillbros.pvt.ltd@gmail.com</p>
                            <p>Phone: 9345531231</p>
                        </div>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" className="glass" style={{ padding: '10px', borderRadius: '50%', color: 'var(--text-secondary)' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="glass" style={{ padding: '10px', borderRadius: '50%', color: 'var(--text-secondary)' }}>
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="glass" style={{ padding: '10px', borderRadius: '50%', color: 'var(--text-secondary)' }}>
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="glass" style={{ padding: '10px', borderRadius: '50%', color: 'var(--text-secondary)' }}>
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '24px' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
                            <li><a href="#home" onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Home</a></li>
                            <li><a href="#about">About Company</a></li>
                            <li><a href="#services">Our Services</a></li>
                            <li><a href="#portfolio">Case Studies</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '24px' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)' }}>
                            <li><a href="#services">Web Development</a></li>
                            <li><a href="#services">Mobile Apps</a></li>
                            <li><a href="#services">UI/UX Design</a></li>
                            <li><a href="#services">SaaS Development</a></li>
                            <li><a href="#services">CRM/ERP Systems</a></li>
                        </ul>
                    </div>

                    {/* Official Info */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '24px' }}>Legal & Presence</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <li>CIN: U72900DL2024PTC123456</li>
                            <li>GST: 07AAAAA0000A1Z5</li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Chillbros Technologies Pvt Ltd. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="glass"
                        style={{ padding: '10px 15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', cursor: 'pointer' }}
                    >
                        Back to Top <ArrowUp size={16} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
