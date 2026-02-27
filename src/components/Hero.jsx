import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '120px' }}>
            {/* Background Glows */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)', zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '50px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--primary)' }}>
                            <span style={{ display: 'inline-block', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></span>
                            Innovating the Digital Future
                        </div>

                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', fontWeight: '800', letterSpacing: '-0.02em' }}>
                            Transforming Ideas Into <br />
                            <span className="text-gradient">Scalable Digital Solutions</span>
                        </h1>

                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
                            We build secure, high-performance web and mobile applications that drive business growth and deliver exceptional user experiences.
                        </p>

                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn btn-primary">
                                Get Free Consultation <ArrowRight size={20} />
                            </a>
                            <a href="#portfolio" className="btn btn-outline">
                                View Portfolio <ChevronRight size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ position: 'relative' }}
                        className="hero-image-container"
                    >
                        <div className="glass" style={{ borderRadius: '30px', padding: '20px', overflow: 'hidden', position: 'relative' }}>
                            <img
                                src="./hero_tech_illustration.webp"
                                alt="Tech Illustration"
                                style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>

            <style jsx="true">{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-image-container {
            margin-top: 40px;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
