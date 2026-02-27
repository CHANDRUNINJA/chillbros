import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirement: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your inquiry has been received. Our team will contact you shortly.");
        // In a real app, this would send data to a backend or email service
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '16px' }}>
                        Ready to <span className="text-gradient">Innovate Together?</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Whether you have a startup idea or an enterprise challenge, our team is ready to help you build the future.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '50px' }} className="contact-grid">
                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div className="glass" style={{ padding: '30px', borderRadius: '20px', height: '100%' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Information</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <div style={{ color: 'var(--primary)', background: 'rgba(59, 130, 246, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Direct Email</div>
                                        <div style={{ fontSize: '1.1rem' }}>chillbros.pvt.ltd@gmail.com</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                    <div style={{ color: '#22c55e', background: 'rgba(34, 197, 94, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone / WhatsApp</div>
                                        <div style={{ fontSize: '1.1rem' }}>9345531231</div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '40px' }}>
                                <a
                                    href="https://wa.me/919345531231"
                                    className="btn"
                                    style={{ width: '100%', background: '#25D366', color: 'white' }}
                                >
                                    <MessageSquare size={20} /> Chat on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass" style={{ padding: '40px', borderRadius: '20px' }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none' }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none' }}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    onChange={handleChange}
                                    placeholder="e.g., +1 (555) 000-0000"
                                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none' }}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '500' }}>Project Requirement</label>
                                <textarea
                                    name="requirement"
                                    required
                                    rows="5"
                                    onChange={handleChange}
                                    placeholder="Tell us about your project or business needs..."
                                    style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '8px', padding: '12px', color: 'white', outline: 'none', resize: 'vertical' }}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx="true">{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        input:focus, textarea:focus {
          border-color: var(--primary) !important;
          background: rgba(59, 130, 246, 0.05) !important;
        }
      `}</style>
        </section>
    );
};

export default Contact;
