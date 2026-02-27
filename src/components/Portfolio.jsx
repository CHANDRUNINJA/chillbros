import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const projects = [
    {
        title: "EcoFin - Digital Banking SaaS",
        category: "Web Application / Fintech",
        image: "./project_mockup_1.webp",
        problem: "Legacy banking systems were slow and lacked a modern user experience for younger demographics.",
        solution: "Built a reactive SaaS platform using Next.js and Node.js with real-time transaction monitoring.",
        result: "40% increase in user engagement and 25% faster transaction processing speeds."
    },
    {
        title: "SwiftShop - E-commerce Mobile App",
        category: "Mobile App / Retail",
        image: "./project_mockup_2.webp",
        problem: "The client had a high cart abandonment rate due to a complex mobile checkout process.",
        solution: "Developed a streamlined Flutter app with one-click checkout and AI-powered product recommendations.",
        result: "60% reduction in cart abandonment and $2M+ in monthly mobile revenue."
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
                        Our Featured <span className="text-gradient">Case Studies</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Explore how we've helped businesses transform their vision into successful digital products through innovation and engineering excellence.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                                gap: '50px',
                                alignItems: 'center'
                            }}
                            className="portfolio-item"
                        >
                            {index % 2 !== 0 && (
                                <div style={{ order: 1 }} className="portfolio-img-container">
                                    <div className="glass" style={{ borderRadius: '24px', overflow: 'hidden', padding: '10px' }}>
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
                                    </div>
                                </div>
                            )}

                            <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                <div style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                                    {project.category}
                                </div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>{project.title}</h3>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginBottom: '8px', color: '#ef4444' }}>
                                            <CheckCircle2 size={18} /> The Problem
                                        </h4>
                                        <p style={{ color: 'var(--text-secondary)' }}>{project.problem}</p>
                                    </div>
                                    <div>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginBottom: '8px', color: 'var(--primary)' }}>
                                            <CheckCircle2 size={18} /> Our Solution
                                        </h4>
                                        <p style={{ color: 'var(--text-secondary)' }}>{project.solution}</p>
                                    </div>
                                    <div>
                                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', marginBottom: '8px', color: '#22c55e' }}>
                                            <CheckCircle2 size={18} /> The Result
                                        </h4>
                                        <p style={{ color: 'var(--text-secondary)' }}>{project.result}</p>
                                    </div>
                                </div>

                                <a href="#contact" className="btn btn-outline" style={{ marginTop: '32px' }}>
                                    Full Case Study <ExternalLink size={18} />
                                </a>
                            </div>

                            {index % 2 === 0 && (
                                <div style={{ order: 2 }} className="portfolio-img-container">
                                    <div className="glass" style={{ borderRadius: '24px', overflow: 'hidden', padding: '10px' }}>
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx="true">{`
        @media (max-width: 992px) {
          .portfolio-item {
            grid-template-columns: 1fr !important;
            gap: 40px;
          }
          .portfolio-img-container {
            order: 1 !important;
          }
          .portfolio-item > div:not(.portfolio-img-container) {
            order: 2 !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Portfolio;
