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
import program23 from '../assets/images/program23.png';

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
              <span style={{ display: 'inline-block', marginTop: '-80px' }}>
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
              marginTop: '-28px',
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
          <h2 className="mb-8" style={{ fontFamily: 'Lato, sans-serif', color: '#6B7280' }}>
            <span style={{ fontWeight: 700, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%', marginRight: 8 }}>Where</span>
            <span style={{ fontWeight: 400, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%', marginRight: 8 }}>connection</span>
            <span style={{ fontWeight: 700, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%', marginRight: 8 }}>meets</span>
            <span style={{ fontWeight: 400, fontSize: '36px', lineHeight: '48px', letterSpacing: '-2%' }}>purpose</span>
          </h2>

          {/* Arc animation: images move along a circular arc (rotating container) while remaining upright (counter-rotation).
              Scoped under .about-arc so it only affects this page. Pause on hover. */}
          <div className="relative about-marquee">
              <style>{`
                /* Marquee: continuous left-to-right movement of cards. Duplicate track for seamless loop. */
                .about-marquee { overflow: hidden; }
                .marquee-track { display:flex; gap:32px; align-items:center; width:max-content; }
                .marquee-inner { display:flex; gap:32px; align-items:center; }

                /* Remove white card background/borders and make images larger so cards are just the images */
                .card { flex: 0 0 auto; background: transparent; border-radius:0; padding:0; box-shadow: none; display:flex; align-items:center; justify-content:center; }
                .card img { width:160px; height:160px; object-fit:cover; border-radius:12px; display:block; }
                @media(min-width:768px){ .card img { width:220px; height:220px } }

                /* Track animation moves the duplicated content leftwards continuously (right-to-left scroll) */
                .marquee-wrapper { display:block; overflow:hidden; }
                .marquee-scroll { display:flex; width:200%; align-items:center; animation: marquee-left 22s linear infinite; will-change: transform; }
                .marquee-scroll .marquee-inner { padding: 12px 0; }

                @keyframes marquee-left { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }

                /* Pause on hover */
                .about-marquee:hover .marquee-scroll { animation-play-state: paused }
              `}</style>

              <div className="marquee-wrapper">
                <div className="marquee-scroll">
                  <div className="marquee-inner">
                    <div className="card"><img src={arcImages[0]} alt="card-0" /></div>
                    <div className="card"><img src={arcImages[1]} alt="card-1" /></div>
                    <div className="card"><img src={arcImages[2]} alt="card-2" /></div>
                    <div className="card"><img src={arcImages[3]} alt="card-3" /></div>
                    <div className="card"><img src={arcImages[4]} alt="card-4" /></div>
                  </div>

                  {/* duplicate for seamless loop */}
                  <div className="marquee-inner" aria-hidden>
                    <div className="card"><img src={arcImages[0]} alt="card-0-dup" /></div>
                    <div className="card"><img src={arcImages[1]} alt="card-1-dup" /></div>
                    <div className="card"><img src={arcImages[2]} alt="card-2-dup" /></div>
                    <div className="card"><img src={arcImages[3]} alt="card-3-dup" /></div>
                    <div className="card"><img src={arcImages[4]} alt="card-4-dup" /></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Full-width section showing program23.png without cropping - image displayed intact with centered overlay heading */}
      <section className="w-full">
        <div className="relative w-full">
          {/* Use an <img> so the image is never cropped; it will scale responsively */}
          <img src={program23} alt="program background" className="w-full h-auto object-contain block" />

          {/* overlay text positioned slightly upward over the image; includes the three paragraphs below the heading */}
          <div className="absolute inset-0 flex items-start justify-center" style={{ top: '6%' }}>
            <div className="text-center px-6 max-w-3xl">
              <h3 style={{ fontFamily: 'Cormorant, serif', fontSize: '40px', color: '#fff', fontStyle: 'italic', fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                —— Who We Are ——
              </h3>

              <div style={{ marginTop: 18, color: '#F8FAFC', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
                <p style={{ fontFamily: 'Archivo, serif', fontWeight: 400, fontSize: '18px', lineHeight: '24px', letterSpacing: '-4%' }}>
                  Born from a vision of weaving wellness, adventure, and purpose into everyday living, Traveon is more than a retreat planner — we’re architects of transformation.
                </p>

                <p style={{ marginTop: 12, fontFamily: 'Archivo, serif', fontWeight: 400, fontSize: '18px', lineHeight: '24px', letterSpacing: '-4%' }}>
                  We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.
                </p>

                <p style={{ marginTop: 12, fontFamily: 'Archivo, serif', fontWeight: 400, fontSize: '18px', lineHeight: '24px', letterSpacing: '-4%' }}>
                  We are guides, facilitators, companions — walking alongside those who come to us carrying stress, burnout, or simply a longing for more meaning. And when they leave, we hope they carry away calm, clarity, and a renewed sense of possibility.
                </p>
              </div>
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
