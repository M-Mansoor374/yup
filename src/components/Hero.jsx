import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    const floatAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="gradient-overlay"></div>
                <div className="particles"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="hero-title"
                        custom={0}
                        variants={textVariants}
                    >
                        Hi, I'm <span className="name-highlight">Muhammad Mansoor</span>
                    </motion.h1>

                    <motion.div
                        className="hero-subtitle-wrapper"
                        custom={1}
                        variants={textVariants}
                    >
                        <h2 className="hero-subtitle">Frontend Developer</h2>
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        custom={2}
                        variants={textVariants}
                    >
                        A passionate Frontend Developer who builds modern, responsive, and user-friendly
                        web interfaces using the latest technologies.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        custom={3}
                        variants={textVariants}
                    >
                        <button className="cta-primary">View My Work</button>
                        <button className="cta-secondary">Get In Touch</button>
                    </motion.div>

                    <motion.div
                        className="social-links"
                        custom={4}
                        variants={textVariants}
                    >
                        <a href="#" className="social-icon"><FaGithub /></a>
                        <a href="#" className="social-icon"><FaLinkedin /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    animate={floatAnimation}
                >
                    <div className="floating-card">
                        <div className="card-glow"></div>
                        <div className="card-content">
                            <div className="code-snippet">
                                <span className="code-line"><span className="keyword">const</span> developer = {'{'}</span>
                                <span className="code-line">  name: <span className="string">"Muhammad Mansoor"</span>,</span>
                                <span className="code-line">  skills: [<span className="string">"React"</span>, <span className="string">"JavaScript"</span>, <span className="string">"CSS"</span>],</span>
                                <span className="code-line">  passion: <span className="string">"Building Amazing UIs"</span></span>
                                <span className="code-line">{'}'}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="scroll-line"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
