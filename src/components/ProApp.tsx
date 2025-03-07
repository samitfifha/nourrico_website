import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import splash from './../assets/images/pro/splash.png'; // Import the local images
import home from './../assets/images/pro/home.png';
import logo from './../assets/images/logo.png'; // Import the logo from assets

export default function ProApp() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftBackgroundX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const rightBackgroundX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const rotateLeft = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen flex items-center px-4 md:px-8 relative overflow-hidden bg-gray-900"
    >
      <motion.div
        style={{ x: leftBackgroundX, backgroundColor: '#00D09E', opacity: 0.3 }} // Combined styles
        className="absolute top-0 left-0 w-1/2 h-full"
      />
      <motion.div
        style={{ x: rightBackgroundX, backgroundColor: '#9DD1F1', opacity: 0.3 }} // Combined styles
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
            whileInView={{ scale: 1,backgroundColor: '#00D09E', opacity: 0.9  }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6 p-4 rounded-full"
            style={{ backgroundColor: '#00D09E', opacity: 0.2 }} // Updated color
          >
            
            <motion.img 
            src={logo} 
            alt="Logo" 
            className="h-14 w-auto"
          />
            <Briefcase className="w-8 h-8" style={{ color: '#00D09E' }} /> {/* Updated color */}
          </motion.div>
          <h2 className="text-4xl font-bold mb-6 text-white">Professional Solution</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Powerful tools for professionals. Advanced features, detailed analytics, 
            and complete control over your workflow.
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
              style={{ background: 'linear-gradient(to top right, #9DD1F1, #DFF7E2)', opacity: 0.2 }} // Updated color
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={splash} // Use the local image
              alt="Pro App Screenshot 1"
              className="rounded-xl shadow-2xl w-full h-full object-contain object-center"
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
              style={{ background: 'linear-gradient(to top right, #9DD1F1, #00D09E)', opacity: 0.2 }} // Updated color
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={home} // Use the local image
              alt="Pro App Screenshot 2"
              className="rounded-xl shadow-2xl w-full h-full object-contain object-center"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}