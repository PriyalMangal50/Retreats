import SharedBackground from '../components/SharedBackground';
import Navbar from '../components/Navbar';
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

      {/* Top hero with About Us button */}
      <section className="w-full py-20 bg-[#00282A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Button (curved with gradient corner) */}
          <div className="flex justify-center mb-6">
            <a href="/about" className="relative inline-flex items-center px-6 py-2 rounded-full" style={{ background: '#00282A' }}>
              <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, color: '#fff' }}>About Us</span>
              {/* gradient corner square */}
              <span aria-hidden className="absolute -right-2 -top-2 w-6 h-6 rounded-full" style={{ background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)' }} />
            </a>
          </div>

          <h1 className="mx-auto max-w-3xl text-center">
            <span style={{
              fontFamily: 'Cormorant, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '50px',
              lineHeight: '48px',
              letterSpacing: '-5%',
              textTransform: 'capitalize',
              display: 'block'
            }}>Traveon</span>

            <span className="block mt-2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 600, fontSize: '20px', color: '#fff' }}>— Your Pathway to Growth &amp; Connection</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-center text-white" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, fontSize: 18, lineHeight: '24px', letterSpacing: '-4%' }}>
            At Retreats by Traveon, we believe life’s richest changes come when we pause, breathe, and reconnect — with ourselves, each other, and nature.
          </p>
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

      <Footer />
    </div>
  );
}
