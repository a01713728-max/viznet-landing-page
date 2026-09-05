import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import WhyVizNet from './sections/WhyVizNet';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Pricing from './sections/Pricing';
import BusinessIntelligence from './sections/BusinessIntelligence';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-mist-100 dark:bg-navy-950 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <WhyVizNet />
          <Services />
          <Portfolio />
          <Process />
          <Pricing />
          <BusinessIntelligence />
          <Team />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}
