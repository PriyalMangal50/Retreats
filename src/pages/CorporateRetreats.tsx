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
import HealingTools from '../components/HealingTools';
import { images } from '../assets';

export default function CorporateRetreats() {
  const offerings = [
    { img: images.programs[2], title: 'Team-Building Experiences', desc: 'Experiential programs focused on collaboration, problem solving, and trust-building.' },
    { img: images.programs[3], title: 'Wellness & Knowledge Sessions', desc: '' },
    { img: images.programs[4], title: 'Strategic Workshops & Knowledge Sessions', desc: '' },
    { img: images.programs[5], title: 'Cultural & Experiential Activities', desc: '' },
  ];

  return (
    <div className="min-h-screen pt-28">
      <SharedBackground />
      <Navbar />

      <Hero
        titleOverride={(
          <span style={{ fontFamily: 'Cormorant, serif', fontWeight: 600, fontStyle: 'italic', fontSize: '80px', lineHeight: '68px', letterSpacing: '-3%', textTransform: 'capitalize', display: 'inline-block' }}>
            Corporate Retreats
          </span>
        )}
        subtitleOverride={('Bespoke corporate programs that inspire growth, collaboration and measurable team outcomes.')}
        showBadge={false}
      />

      <TrustedBy />

      
      {/* Our Corporate Retreat Offerings - white background with image cards + bottom overlay */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 style={{ marginBottom: 8, textAlign: 'center', whiteSpace: 'nowrap' }}>
            <span style={{
              fontFamily: 'Archivo, serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: '40px',
              lineHeight: '42px',
              letterSpacing: '-4%',
              display: 'inline-block'
            }}>Our Corporate Retreat&nbsp;</span>

            <span style={{
              fontFamily: 'Cormorant, serif',
              fontWeight: 600,
              fontStyle: 'italic',
              fontSize: '48px',
              lineHeight: '42px',
              letterSpacing: '-5%',
              textTransform: 'capitalize',
              background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}>Offerings</span>
          </h2>
          <p className="text-gray-700 mb-8" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, fontSize: 18, lineHeight: '24px', letterSpacing: '0%', textAlign: 'center' }}>
            Tailored programs that inspire growth, collaboration, and well-being for every organization.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 justify-center">
            {offerings.map((o, i) => (
              <div
                key={i}
                className="overflow-hidden shadow-md bg-white border border-gray-200"
                style={{ width: 300, height: 340, maxWidth: 440, borderRadius: 16, opacity: 1 }}
              >
                <div className="relative w-full h-full">
                  <img src={o.img} alt={o.title} className="w-full h-full object-cover block" />

                  {/* bottom overlay: bold title + 1-2 line description */}
                  <div className="absolute left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-left">
                    <div style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff' }}>{o.title}</div>
                    <div style={{ fontFamily: 'Archivo, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.95)', marginTop: 6 }}>{o.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Ordinary Offsites section with program20 background */}
      <section
        className="w-full py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.programs[15]})` }}
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-transparent max-w-2xl text-left text-white">
            <h3 style={{ marginBottom: 12 }}>
              <span style={{
                fontFamily: 'Lato, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '40px',
                lineHeight: '48px',
                letterSpacing: '-4%',
                display: 'inline-block',
                color: '#ffffff'
              }}>Beyond Ordinary&nbsp;</span>

              <span style={{
                fontFamily: 'Cormorant, serif',
                fontWeight: 600,
                fontStyle: 'italic',
                fontSize: '48px',
                lineHeight: '48px',
                letterSpacing: '-5%',
                textTransform: 'capitalize',
                background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}>Offsites</span>
            </h3>

            <p style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: '24px', letterSpacing: '-2%', marginBottom: 16 }}>
              At Retreats by Traveon, we design corporate retreats that go beyond ordinary offsites. Our retreats combine strategic planning, wellness, team-building, and immersive experiences to enhance collaboration, boost morale, and achieve organizational goals.
            </p>

            <div className="grid grid-cols-1 gap-6 max-w-xl">
              {[
                { img: images.programs[2], title: 'Purposeful Design', desc: 'Retreats that strengthen relationships, boost engagement, and enhance team performance with lasting results.' },
                { img: images.programs[3], title: 'Evidence-led Facilitation', desc: 'Retreats that strengthen relationships, boost engagement, and enhance team performance with lasting results.' },
                { img: images.programs[4], title: 'Holistic Well-being', desc: 'Retreats that strengthen relationships, boost engagement, and enhance team performance with lasting results.' },
              ].map((p, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-md">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700, fontSize: 16 }}>{p.title}</div>
                    <div style={{ fontFamily: 'Archivo, serif', fontSize: 14, color: 'rgba(255,255,255,0.9)', marginTop: 6 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  {/* Our Powerful Healing Tools — added back here as a self-contained component */}
  <HealingTools />
      
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
