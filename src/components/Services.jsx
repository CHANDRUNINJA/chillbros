import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Layout, Cloud, Settings, HeartHandshake, ChevronRight } from 'lucide-react';

const services = [
    {
        icon: <Monitor size={32} />,
        title: "Web Application Development",
        desc: "Scalable, high-performance web apps built with modern frameworks for seamless user experience.",
        color: "#3b82f6"
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile App Development",
        desc: "Native and cross-platform mobile solutions for Android & iOS that engage users.",
        color: "#a855f7"
    },
    {
        icon: <Layout size={32} />,
        title: "UI/UX Design",
        desc: "Intuitive, aesthetic, and user-centric designs that convert visitors into loyal customers.",
        color: "#06b6d4"
    },
    {
        icon: <Cloud size={32} />,
        title: "SaaS Development",
        desc: "End-to-end cloud-based software solutions designed for global scale and security.",
        color: "#f59e0b"
    },
    {
        icon: <Settings size={32} />,
        title: "Custom CRM/ERP Systems",
        desc: "Tailored enterprise solutions to streamline your business operations and data.",
        color: "#ef4444"
    },
    {
        icon: <HeartHandshake size={32} />,
        title: "Maintenance & Support",
        desc: "24/7 technical support and regular updates to keep your systems running smoothly.",
        color: "#10b981"
    }
];

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
                        Services We <span className="text-gradient">Can Provide</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        We provide comprehensive technology solutions tailored to your business needs, ensuring quality, scalability, and innovation at every step.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card"
                            style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                        >
                            <div
                                style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: `rgba(${parseInt(service.color.slice(1, 3), 16)}, ${parseInt(service.color.slice(3, 5), 16)}, ${parseInt(service.color.slice(5, 7), 16)}, 0.1)`,
                                    color: service.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '24px',
                                    flexShrink: 0
                                }}
                            >
                                {service.icon}
                            </div>

                            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', flexGrow: 1 }}>{service.desc}</p>

                            <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: service.color, fontWeight: '600', fontSize: '1rem', marginTop: 'auto' }}>
                                Learn More <ChevronRight size={18} />
                            </a>

                            {/* Decorative Gradient Corner */}
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100px',
                                height: '100px',
                                background: `radial-gradient(circle, ${service.color}15 0%, transparent 70%)`,
                                zIndex: 0
                            }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
