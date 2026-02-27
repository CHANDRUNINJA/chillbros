import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layers, Clock, Users, Code } from 'lucide-react';

const reasons = [
    {
        icon: <Zap size={24} />,
        title: "Agile Methodology",
        desc: "We follow a flexible, iterative process that ensures transparency and faster delivery."
    },
    {
        icon: <Code size={24} />,
        title: "Clean Code Architecture",
        desc: "Our code is modular, well-documented, and follows industry best practices for long-term stability."
    },
    {
        icon: <Layers size={24} />,
        title: "Scalable Systems",
        desc: "We design infrastructures that grow with your business, handling millions of users with ease."
    },
    {
        icon: <Clock size={24} />,
        title: "On-Time Delivery",
        desc: "We respect your timelines and use advanced project management tools to stay on track."
    },
    {
        icon: <Users size={24} />,
        title: "Dedicated Support",
        desc: "Our team is always available for maintenance, updates, and troubleshooting post-launch."
    },
    {
        icon: <Shield size={24} />,
        title: "Security & Compliance",
        desc: "Enterprise-grade security protocols to protect your data and ensure regulatory compliance."
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section" style={{ background: 'var(--bg-card)', borderY: '1px solid var(--border-color)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 0.8fr) 1fr', gap: '80px', alignItems: 'center' }} className="why-us-grid">
                    <div>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '24px' }}>
                            Why Leading Companies <br />
                            <span className="text-gradient">Choose Chillbros</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem' }}>
                            We don't just write code; we build strategic partnerships that drive digital transformation and sustainable growth.
                        </p>
                        <div className="glass" style={{ padding: '30px', borderRadius: '20px', borderLeft: '4px solid var(--primary)' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Global Innovation Partner</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>We empower businesses worldwide with cutting-edge software solutions, focusing on speed, security, and exceptional user experience.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass"
                                style={{ padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                            >
                                <div style={{ color: 'var(--primary)', background: 'rgba(59, 130, 246, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {reason.icon}
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>{reason.title}</h4>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{reason.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        @media (max-width: 992px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 50px;
          }
        }
      `}</style>
        </section>
    );
};

export default WhyChooseUs;
