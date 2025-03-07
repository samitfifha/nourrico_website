import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import UserApp from './components/UserApp';
import ProApp from './components/ProApp';
import Partners from './components/Partners';
import Team from './components/Team';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-gray-900">
      {showSplash && <SplashScreen />}

      {/* Conditionally render the rest of the content */}
      {!showSplash && (
        <>
          <motion.div
            style={{ opacity, scale }}
            className="fixed top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-b from-purple-900/50 to-blue-900/50 z-0"
          />
          
          <Header />
          
          <div className="relative z-10">
            <section id="home">
              <Home />
            </section>
            <section id="user-app">
              <UserApp />
            </section>
            <section id="pro-app">
              <ProApp />
            </section>
            <section id="partners">
              <Partners />
            </section>
            <section id="team">
              <Team />
            </section>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;