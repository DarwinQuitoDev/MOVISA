import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services/Services';
import MapSection from '../components/MapSection';
import Schedule from '../components/Schedule';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <Services />
          <MapSection />
          <Schedule />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
