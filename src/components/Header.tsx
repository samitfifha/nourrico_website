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
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
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
        type: "spring", 
        stiffness: 200, 
        delay: 0.2,
        duration: 0.8
      }
    }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b ${
        scrolled 
          ? "bg-gray-900/90 border-gray-700" 
          : "bg-gray-900/70 border-gray-800"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Logo with hover effect */}
          <motion.img 
            src={logo} 
            alt="Logo" 
            className="h-14 w-auto"
          />
        </motion.div>

        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-colors"
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