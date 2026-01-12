import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setFormStatus('');
            }, 3000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "muhammadmansoorayub@gmail.com",
            link: "mailto:muhammadmansoorayub@gmail.com"
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            value: "+92 328 9858413",
            link: "tel:+923289858413"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "Pakistan",
            link: null
        }
    ];

    const socialLinks = [
        { icon: <FaGithub />, name: "GitHub", link: "#" },
        { icon: <FaLinkedin />, name: "LinkedIn", link: "#" },
        { icon: <FaTwitter />, name: "Twitter", link: "#" }
    ];

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <motion.div
                    className="contact-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <p className="section-description">
                        Have a project in mind or want to collaborate? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <motion.div
                        className="contact-info-section"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="info-card">
                            <div className="card-glow"></div>
                            <h3 className="info-title">Let's Connect</h3>
                            <p className="info-description">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="contact-details">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        className="contact-item"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="contact-icon">{info.icon}</div>
                                        <div className="contact-text">
                                            <span className="contact-label">{info.title}</span>
                                            {info.link ? (
                                                <a href={info.link} className="contact-value">{info.value}</a>
                                            ) : (
                                                <span className="contact-value">{info.value}</span>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="social-section">
                                <h4 className="social-title">Follow Me</h4>
                                <div className="social-links">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            className="social-link"
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            title={social.name}
                                        >
                                            {social.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="form-card">
                            <div className="card-glow"></div>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Inquiry"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows="6"
                                        required
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`submit-btn ${formStatus}`}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={formStatus === 'sending'}
                                >
                                    {formStatus === 'sending' ? (
                                        <>
                                            <span className="btn-spinner"></span>
                                            Sending...
                                        </>
                                    ) : formStatus === 'success' ? (
                                        <>
                                            <span>✓</span>
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <FaPaperPlane className="btn-icon" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <motion.div
                className="contact-footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <p>© 2026 Muhammad Mansoor. Built with React & Framer Motion.</p>
            </motion.div>
        </section>
    );
};

export default Contact;
