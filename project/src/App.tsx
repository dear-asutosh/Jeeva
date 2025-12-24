import Navigation from './components/Navigation';
import { Hero } from './components/Hero';
import Problem from './components/Problem';
import {Solution} from './components/Solution';
import InstantVisualStatus from './components/InstantVisualStatus';
import Features from './components/Features';
import {LiveDemo} from './components/LiveDemo';
import {ImpactMetrics} from './components/ImpactMetrics';
import OurStory from './components/OurStory';
import Team from './components/Team';
import Events from './components/Events';
import ForHospitals from './components/ForHospitals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HowItWorksSection from './components/HowItWorksSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <InstantVisualStatus />
      <HowItWorksSection/>
      <LiveDemo />
      <ImpactMetrics />
      {/* <Features /> */}
      <OurStory />
      <Team />
      <Events />
      <ForHospitals />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
