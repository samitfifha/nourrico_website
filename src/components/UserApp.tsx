import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone } from 'lucide-react';
import app from './../assets/images/client/splash.png'; // Import the local images
import profile from './../assets/images/client/home.png';
import logo from './../assets/images/logo.png'; // Import the logo from assets

export default function UserApp() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftBackgroundX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightBackgroundX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const rotateLeft = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen flex items-center px-4 md:px-8 relative overflow-hidden bg-gray-900"
    >
      <motion.div
        style={{ x: leftBackgroundX, backgroundColor: '#E76A6E', opacity: 0.3 }} // Updated color
        className="absolute top-0 left-0 w-1/2 h-full"
      />
      <motion.div
        style={{ x: rightBackgroundX, backgroundColor: '#D58186', opacity: 0.3 }} // Updated color
        className="absolute top-0 right-0 w-1/2 h-full"
      />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1,backgroundColor: '#E76A6E', opacity: 0.9  }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6 p-4 rounded-full"
            style={{ backgroundColor: '#E76A6E', opacity: 0.2 }} // Updated color
          >
            
            <Smartphone className="w-8 h-8" style={{ color: '#E76A6E' }} />
            <motion.img 
            src={logo} 
            alt="Logo" 
            className="h-14 w-auto"
          />

          </motion.div>
          <h2 className="text-4xl font-bold mb-6 text-white">User Application</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience seamless interaction with our user-friendly interface. 
            Designed for simplicity, built for efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ rotate: rotateLeft, scale }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="relative h-[500px] perspective-1000"
          >
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ background: 'linear-gradient(to top right, #E76A6E, #D58186)', opacity: 0.2 }} // Updated color
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={app} // Use the local image
              alt="User App Screenshot 1"
              className="rounded-xl shadow-2xl w-full h-full object-contain object-center" // Adjusted styles
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ rotate: rotateRight, scale }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="relative h-[500px] perspective-1000"
          >
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{ background: 'linear-gradient(to top right, #D58186, #E76A6E)', opacity: 0.2 }} // Updated color
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={profile} // Use the local image
              alt="User App Screenshot 2"
              className="rounded-xl shadow-2xl w-full h-full object-contain object-center" // Adjusted styles
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}