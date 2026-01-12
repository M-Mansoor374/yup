import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Work', href: '#work' },
    { title: 'About', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.a
          href="#home"
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCode className="logo-icon" />
          <span>Frontend Developer</span>
        </motion.a>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="nav-item"
              whileHover={{ y: -2 }}
            >
              <a href={link.href} className="nav-link">{link.title}</a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <motion.button
            className="hire-btn"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#333" }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

          <div className="mobile-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mobile-menu-header">
              <FaCode className="logo-icon mobile" />
              <FaTimes className="close-icon" onClick={toggleMenu} />
            </div>
            <ul className="mobile-nav-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={linkVariants}
                >
                  <a href={link.href} onClick={toggleMenu}>{link.title}</a>
                </motion.li>
              ))}
              <motion.li variants={linkVariants} custom={4}>
                <button className="mobile-hire-btn">Hire Me</button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
