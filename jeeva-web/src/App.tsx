import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import { Hero } from './components/Hero';
import Problem from './components/Problem';
import { Solution } from './components/Solution';
import InstantVisualStatus from './components/InstantVisualStatus';
import { LiveDemo } from './components/LiveDemo';
import { ImpactMetrics } from './components/ImpactMetrics';
import OurStory from './components/OurStory';
import Advisors from './components/Advisors';
import ForHospitals from './components/ForHospitals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HowItWorksSection from './components/HowItWorksSection';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import Gallery from './components/Gallery/Gallery';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname + window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname + window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Polyfill for manual location changes
    const originalPushState = window.history.pushState;
    window.history.pushState = function (...args) {
      const result = originalPushState.apply(this, args);
      window.dispatchEvent(new Event('popstate'));
      return result;
    };

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.history.pushState = originalPushState;
    };
  }, []);

  // Scroll restoration on path change
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      {currentPath.startsWith('/team') ? (
        <TeamPage />
      ) : currentPath.startsWith('/gallery') ? (
        <GalleryPage />
      ) : (
        <>
          <Hero />
          <Problem />
          <Solution />
          <InstantVisualStatus />
          <HowItWorksSection />
          <LiveDemo />
          <ImpactMetrics />
          <OurStory />
          <Advisors />
          <ForHospitals />
          <Gallery />
          <Contact />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
