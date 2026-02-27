import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Database } from 'lucide-react';

const techStack = [
    { category: "Frontend", icon: <Layout size={20} />, techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", icon: <Server size={20} />, techs: ["Django", "Node.js", "REST APIs", "GraphQL"] },
    { category: "Mobile", icon: <Smartphone size={20} />, techs: ["Flutter", "React Native", "iOS Native", "Android"] },
    { category: "Database", icon: <Database size={20} />, techs: ["PostgreSQL", "Firebase", "MongoDB", "Redis"] }
];

const Technologies = () => {
    return (
        <section id="technologies" className="section" style={{ background: 'rgba(59, 130, 246, 0.02)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
                        Advanced <span className="text-gradient">Technology Stack</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        We leverage the latest and most robust technologies to build secure, scalable, and high-performance digital products.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                    {techStack.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass"
                            style={{ padding: '30px', borderRadius: '20px' }}
                        >
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '20px', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {item.icon} {item.category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {item.techs.map((tech, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            padding: '8px 16px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '8px',
                                            fontSize: '0.95rem',
                                            fontWeight: '500',
                                            border: '1px solid var(--glass-border)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.borderColor = 'var(--primary)';
                                            e.target.style.background = 'rgba(59, 130, 246, 0.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.borderColor = 'var(--glass-border)';
                                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                        }}
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
