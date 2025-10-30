import SharedBackground from '../components/SharedBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import Programs from '../components/Programs';
import Why from '../components/Why';
import ImageCTA from '../components/ImageCTA';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Latest from '../components/Latest';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import { images } from '../assets';

export default function AboutUs() {
  const arcImages = [
    images.programs[10],
    images.programs[11],
    images.programs[12],
    images.programs[13],
    images.programs[14],
  ];

  return (
    <div className="min-h-screen pt-28">
      <SharedBackground />
      <Navbar />

      {/* Use the shared site Hero so About page matches Home, but replace the badge text with "About Us" */}
      <section className="w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Custom badge to replace Hero's default badge */}
          <div className="inline-block mb-2 relative mt-20">
            <div
              style={{
                background: 'linear-gradient(91.87deg, #35F1F1 0%, #94F81A 50.48%, #00FF3C 100%)',
                padding: '3px',
                borderRadius: '9999px',
                display: 'inline-block'
              }}
            >
              <div
                style={{
                  background: 'linear-gradient(90deg, #00282A 0%, #033520 100%)',
                  borderRadius: '9999px',
                  padding: '8px 16px'
                }}
              >
                <span className="text-white font-medium">About Us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Render the shared Hero but hide its internal badge and provide custom title/subtitle */}
          <div className="about-hero">
            <style>{`.about-hero .inline-flex.items-center.gap-3{display:none !important} .about-hero .absolute.bottom-0{display:none !important}`}</style>
            <Hero
            showBadge={false}
            titleOverride={(
              <span style={{ display: 'inline-block', marginTop: '-48px' }}>
              <span style={{
                fontFamily: 'Cormorant, serif',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: '50px',
                lineHeight: '48px',
                letterSpacing: '-5%',
                textTransform: 'capitalize',
                display: 'inline-block',
                textAlign: 'center'
              }}>
                Traveon
              </span>

              <span style={{ width: 8, display: 'inline-block' }} />

              <span style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '36px',
                lineHeight: '48px',
                letterSpacing: '-2%',
                display: 'inline-block'
              }}>
                — Your Pathway to Growth &amp; Connection
              </span>
            </span>
          )}
          subtitleOverride={(
            <span style={{
              fontFamily: 'Archivo, serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '18px',
              lineHeight: '24px',
              letterSpacing: '-4%',
              display: 'block',
              marginTop: '-20px',
              textAlign: 'center',
              maxWidth: '680px',
              margin: '0 auto',
              color: '#ffffff'
            }}>
              At Retreats by Traveon, we believe life’s richest changes come when we pause, breathe, and reconnect — with ourselves, each other, and nature.
            </span>
          )}
            />

            {/* Replace the Hero's wavy divider with a gentler curve on the About page only */}
            <div className="w-full">
              <svg
                viewBox="0 0 1440 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
                preserveAspectRatio="none"
              >
                {/* Single smooth arc to separate the hero from the next section */}
                <path
                  d="M0 40 C360 100 1080 100 1440 40 L1440 120 L0 120 Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
      </section>

      {/* Where connection meets purpose — rotating arc of images */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-8" style={{ fontFamily: 'Lato, sans-serif' }}>Where connection meets purpose</h2>

          <div className="relative flex items-center justify-center">
            <div className="arc-rotate relative w-[320px] h-[320px] md:w-[420px] md:h-[420px]">
              {arcImages.map((src, i) => {
                const angle = (i / arcImages.length) * 360;
                // radius tuned to container size; images will maintain upright rotation
                const radius = 140; // px
                const transform = `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`;
                return (
                  <img
                    key={i}
                    src={src}
                    alt={`arc-${i}`}
                    className="absolute w-20 h-20 md:w-28 md:h-28 rounded-md object-cover shadow-lg"
                    style={{ top: '50%', left: '50%', transform, transformOrigin: 'center' }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Home page sections so About Us mirrors home initially */}
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
