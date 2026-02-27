import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "John Miller",
        role: "CTO @ Fintech Solutions",
        content: "Chillbros transformed our legacy architecture into a high-performance SaaS platform. Their expertise in React and Node.js is unmatched.",
        rating: 5
    },
    {
        name: "Sarah Chen",
        role: "Founder @ SwiftShop",
        content: "The mobile app they developed for us saw a 60% increase in user retention within the first three months. Highly professional team!",
        rating: 5
    },
    {
        name: "David Rodriguez",
        role: "Operations Manager @ Global Logistics",
        content: "Our custom ERP system built by Chillbros has streamlined our entire supply chain. Their Agile process kept us updated at every step.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section" style={{ background: 'rgba(168, 85, 247, 0.02)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
                        Trusted by <span className="text-gradient">Innovative Leaders</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Don't just take our word for it—hear from the companies we've helped scale through technology.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {testimonials.map((testi, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card"
                            style={{ position: 'relative' }}
                        >
                            <div style={{ position: 'absolute', top: '20px', right: '20px', color: 'rgba(59, 130, 246, 0.1)' }}>
                                <Quote size={40} />
                            </div>

                            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                                {[...Array(testi.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                                ))}
                            </div>

                            <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '24px', fontStyle: 'italic', lineHeight: '1.7' }}>
                                "{testi.content}"
                            </p>

                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{testi.name}</h4>
                                <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '500' }}>{testi.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
