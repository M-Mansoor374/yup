import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory management, secure payment integration, and responsive design.",
            technologies: [
                { name: "React", icon: <FaReact /> },
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ],
            image: "project1",
            github: "#",
            live: "#",
            featured: true
        },
        {
            id: 2,
            title: "AI Dashboard Analytics",
            description: "Interactive dashboard with real-time data visualization, AI-powered insights, and customizable widgets.",
            technologies: [
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Tailwind", icon: <SiTailwindcss /> }
            ],
            image: "project2",
            github: "#",
            live: "#",
            featured: true
        },
        {
            id: 3,
            title: "Social Media App",
            description: "Modern social platform with real-time messaging, media sharing, and advanced privacy controls.",
            technologies: [
                { name: "React", icon: <FaReact /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "CSS3", icon: <FaCss3Alt /> }
            ],
            image: "project3",
            github: "#",
            live: "#",
            featured: false
        },
        {
            id: 4,
            title: "Portfolio CMS",
            description: "Content management system for creative professionals with drag-and-drop interface and SEO optimization.",
            technologies: [
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Node.js", icon: <FaNodeJs /> }
            ],
            image: "project4",
            github: "#",
            live: "#",
            featured: false
        },
        {
            id: 5,
            title: "Task Management Tool",
            description: "Collaborative project management platform with Kanban boards, time tracking, and team analytics.",
            technologies: [
                { name: "React", icon: <FaReact /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Tailwind", icon: <SiTailwindcss /> }
            ],
            image: "project5",
            github: "#",
            live: "#",
            featured: false
        },
        {
            id: 6,
            title: "Weather Forecast App",
            description: "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts.",
            technologies: [
                { name: "React", icon: <FaReact /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "CSS3", icon: <FaCss3Alt /> }
            ],
            image: "project6",
            github: "#",
            live: "#",
            featured: false
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
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
        <section className="projects" id="work">
            <div className="projects-container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">Featured Work</h2>
                    <p className="section-description">
                        A collection of projects showcasing my expertise in modern web development,
                        from concept to deployment.
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                            variants={cardVariants}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-glow-effect"></div>

                            <div className="project-image-container">
                                <div className={`project-image project-${project.image}`}>
                                    <div className="image-overlay">
                                        <div className="overlay-links">
                                            <a href={project.github} className="project-link">
                                                <FaGithub />
                                            </a>
                                            <a href={project.live} className="project-link">
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                {project.featured && <span className="featured-badge">Featured</span>}

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <div key={index} className="tech-item" title={tech.name}>
                                            {tech.icon}
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="card-border"></div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="view-more"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <button className="view-more-btn">
                        View All Projects
                        <span className="btn-arrow">→</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
