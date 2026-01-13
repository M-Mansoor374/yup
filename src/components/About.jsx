import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaPalette, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"] },
        { category: "Styling", items: ["Tailwind CSS", "Sass", "Styled Components", "Material-UI"] },
        { category: "Tools", items: ["Git", "Webpack", "Vite", "Figma", "VS Code"] },
        { category: "Backend", items: ["Node.js", "Express", "MongoDB", "REST APIs"] }
    ];

    const values = [
        {
            icon: <FaCode />,
            title: "Clean Code",
            description: "Writing maintainable, scalable, and well-documented code."
        },
        {
            icon: <FaPalette />,
            title: "Design Focus",
            description: "Creating beautiful, intuitive user interfaces with attention to detail."
        },
        {
            icon: <FaRocket />,
            title: "Performance",
            description: "Optimizing for speed, accessibility, and best practices."
        },
        {
            icon: <FaUsers />,
            title: "Collaboration",
            description: "Working effectively in teams and communicating clearly."
        },
        {
            icon: <FaLightbulb />,
            title: "Innovation",
            description: "Staying current with latest technologies and trends."
        },
        {
            icon: <FaLaptopCode />,
            title: "Problem Solving",
            description: "Finding creative solutions to complex challenges."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="about" id="about">
            <div className="about-container">
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Get to Know Me</span>
                    <h2 className="section-title">About Me</h2>
                </motion.div>

                <div className="about-content">
                    {/* Profile Section */}
                    <motion.div
                        className="profile-section"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="profile-card">
                            <div className="card-glow"></div>
                            <div className="profile-image-container">
                                <div className="profile-image">
                                    <div className="image-placeholder">MM</div>
                                </div>
                                <div className="status-indicator">
                                    <span className="status-dot"></span>
                                    Available for work
                                </div>
                            </div>

                            <div className="profile-info">
                                <h3 className="profile-name">Muhammad Mansoor</h3>
                                <p className="profile-role">Frontend Developer</p>
                                <p className="profile-location">📍 Pakistan</p>
                            </div>

                            <div className="profile-stats">
                                <div className="stat-item">
                                    <span className="stat-value">1+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">30+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-value">10+</span>
                                    <span className="stat-label">Happy Clients</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Section */}
                    <motion.div
                        className="bio-section"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bio-card">
                            <div className="card-glow"></div>
                            <h3 className="bio-title">My Journey</h3>
                            <div className="bio-content">
                                <p>
                                    I'm a passionate Frontend Developer with a keen eye for design and a love for creating
                                    seamless user experiences. My journey in web development started with curiosity and
                                    has evolved into a professional career focused on building modern, responsive, and
                                    accessible web applications.
                                </p>
                                <p>
                                    I specialize in React and modern JavaScript frameworks, transforming ideas into
                                    interactive digital experiences. I believe in writing clean, maintainable code and
                                    staying up-to-date with the latest industry trends and best practices.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to
                                    open-source projects, or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Section */}
                <motion.div
                    className="skills-section"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="subsection-title">Technical Skills</h3>
                    <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                className="skill-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="card-glow"></div>
                                <h4 className="skill-category">{skillGroup.category}</h4>
                                <div className="skill-items">
                                    {skillGroup.items.map((skill, i) => (
                                        <span key={i} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    className="values-section"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <h3 className="subsection-title">What I Value</h3>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="card-glow"></div>
                                <div className="value-icon">{value.icon}</div>
                                <h4 className="value-title">{value.title}</h4>
                                <p className="value-description">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
