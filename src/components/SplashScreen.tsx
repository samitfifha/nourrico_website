import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';
const SplashScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ backgroundColor: '#E76A6E' }} // Initial background color
      animate={{ backgroundColor: '#00D09E' }} // Animate to a lighter background color
      transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }} // Smooth background transition
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 0 }} // Initial state of the logo container
          animate={{ scale: 1, opacity: 1, y: -20 }} // Animate to full size, visible, and slightly above
          transition={{
            duration: 1, // Duration of the animation
            ease: 'easeInOut', // Easing function
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: 'mirror', // Mirror the animation on repeat
          }}
          className="w-32 h-32" // Adjust the size of the logo container
        >
          {/* Logo */}
          <motion.img
            src={logo} // Replace with the path to your logo
            alt="Logo"
            className="w-full h-full object-contain" // Ensure the logo fits well
            initial={{ y: 0, rotate: 0 }} // Initial position and rotation of the logo
            animate={{
              y: [0, -20, 0], // Jumping animation (up and down)
              rotate: [0, 10, -10, 0], // Rotate animation (left and right)
              boxShadow: [
                '0px 0px 0px rgba(255, 255, 255, 0)', // Initial shadow (transparent)
                '0px 5px 15px rgba(255, 255, 255, 0.3)', // Glowing shadow
                '0px 0px 0px rgba(255, 255, 255, 0)', // Final shadow (transparent)
              ],
            }}
            transition={{
              duration: 1, // Duration of the jump, rotate, and shadow animations
              ease: 'easeInOut', // Easing function
              repeat: Infinity, // Repeat the animation infinitely
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial state of the title
          animate={{ opacity: 1, y: 0 }} // Animate to fully visible and aligned
          transition={{
            delay: 0.5, // Delay the title animation to start after the logo
            duration: 1, // Duration of the animation
            ease: 'easeInOut', // Easing function
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: 'mirror', // Mirror the animation on repeat
          }}
          className="mt-4 text-white text-xl font-bold" // Styling for the title
        >
          Fresh finds. Fair minds. Nourrish
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;