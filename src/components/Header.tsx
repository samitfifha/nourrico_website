import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import logo from './../assets/images/logo.png'; // Import the logo from assets

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'User App', href: '#user-app' },
  { name: 'Pro App', href: '#pro-app' },
  { name: 'Partners', href: '#partners' },
  { name: 'Team', href: '#team' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close the mobile menu after clicking a link
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        delay: 0.2,
        duration: 0.8
      }
    }
  };

  // Hamburger icon animation variants
  const hamburgerVariants = {
    open: {
      rotate: 45,
      y: 7,
      transition: { type: 'spring', stiffness: 200 }
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  const middleLineVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 }
  };

  const bottomLineVariants = {
    open: {
      rotate: -45,
      y: -7,
      transition: { type: 'spring', stiffness: 200 }
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${
        scrolled
          ? 'bg-gray-900/90 border-gray-700'
          : 'bg-gray-900/70 border-gray-800'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={logo}
            alt="Logo"
            className="h-14 w-auto"
          />
        </motion.div>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Line */}
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16"
              variants={hamburgerVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
            />
            {/* Middle Line */}
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 12h16"
              variants={middleLineVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
            />
            {/* Bottom Line */}
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 18h16"
              variants={bottomLineVariants}
              animate={isMobileMenuOpen ? 'open' : 'closed'}
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`lg:flex ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } absolute lg:static top-16 left-0 right-0 bg-gray-900/90 lg:bg-transparent backdrop-blur-lg lg:backdrop-blur-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:items-center">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="my-2 lg:my-0"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors px-4 py-2 lg:px-0 lg:py-0"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}