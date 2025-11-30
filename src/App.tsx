import { useState, useEffect } from 'react';
import { LenisProvider } from './context/LenisContext';
import TargetCursor from './components/UI/TargetCursor';
import Loader from './components/layout/Loader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/UI/ScrollProgress';
import MobileFAB from './components/UI/MobileFAB';
import Timeline from './components/sections/Timeline';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Any other initialization logic if needed
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <LenisProvider>
          <div>
            <TargetCursor
              spinDuration={5}
              hideDefaultCursor={true}
              parallaxOn={true}
            />
            <ScrollProgress />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Timeline />
              <Projects />
              <Contact />
            </main>
            <Footer />
            <MobileFAB />
          </div>
        </LenisProvider>
      )}
    </>
  );
}

export default App;
