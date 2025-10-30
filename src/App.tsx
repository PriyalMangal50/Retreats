import SharedBackground from './components/SharedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Programs from './components/Programs';
import Why from './components/Why';
import ImageCTA from './components/ImageCTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Latest from './components/Latest';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import WellnessRetreats from './pages/WellnessRetreats';
import CorporateRetreats from './pages/CorporateRetreats';
import CommunityTours from './pages/CommunityTours';
import MICETours from './pages/MICETours';
import AboutUs from './pages/AboutUs';
import Packages from './pages/Packages';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import { Routes, Route } from 'react-router-dom';

function HomePage() {
  return (
    <div className="min-h-screen pt-28">
      <SharedBackground />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <Programs />
      <Why />
      <ImageCTA />
      <Testimonials />
      <FAQ />
      <Latest />
      <Subscribe />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/wellness-retreats" element={<WellnessRetreats />} />
      <Route path="/corporate-retreats" element={<CorporateRetreats />} />
      <Route path="/community-tours" element={<CommunityTours />} />
      <Route path="/mice-tours" element={<MICETours />} />
  <Route path="/about" element={<AboutUs />} />
    <Route path="/packages" element={<Packages />} />
      <Route path="/blogs/blog1" element={<Blog1 />} />
      <Route path="/blogs/blog2" element={<Blog2 />} />
      {/* fallback to home for unknown routes */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
