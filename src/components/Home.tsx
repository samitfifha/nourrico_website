import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import logo1 from './../assets/images/logo.jpg';
import logo2 from './../assets/images/logo1.jpg';

export default function Home() {
  const [currentImage, setCurrentImage] = useState<string>(logo1);
  const [direction, setDirection] = useState<number>(1);

  // Use useCallback to memoize the toggle function
  const toggleImage = useCallback(() => {
    setCurrentImage((prevImage) => {
      const newImage = prevImage === logo1 ? logo2 : logo1;
      return newImage;
    });
    setDirection((prevDirection) => prevDirection * -1);
  }, []);

  useEffect(() => {
    // Set up the interval for automatic image switching
    const interval = setInterval(() => {
      toggleImage();
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [toggleImage]); // Include toggleImage in the dependency array

  // Custom variants for the image animations
  const imageVariants = {
    enter: (direction: number) => ({
      scale: 0.8,
      y: direction > 0 ? 100 : -100,
      opacity: 0,
      rotate: direction > 0 ? -10 : 10,
    }),
    center: {
      scale: 1,
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    exit: (direction: number) => ({
      scale: 0.8,
      y: direction < 0 ? 100 : -100,
      opacity: 0,
      rotate: direction < 0 ? 10 : -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    })
  };

  return (
    <section className="min-h-screen flex items-center px-4 md:px-8 bg-gray-900">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl"></div>
          
          {/* Enhanced animation container */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentImage === logo1 ? "logo1" : "logo2"}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <img 
                  src={currentImage} 
                  alt={currentImage === logo1 ? "Logo 1" : "Logo 2"}
                  className="w-full h-full object-contain p-8"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Add radial glow effect */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute w-full h-full bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Transform Your Experience
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Discover a new way to connect, manage, and grow with our innovative platform. 
            Built for the modern world, designed for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}