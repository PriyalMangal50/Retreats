import SharedBackground from '../components/SharedBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import { images } from '../assets';
import program23 from '../assets/images/program23.png';
import program24 from '../assets/images/program24.png';
import image21 from '../assets/images/image21.png';
import image23 from '../assets/images/image23.png';
import image24 from '../assets/images/image24.png';
import team1 from '../assets/images/image30.png';
import team2 from '../assets/images/image30.png';
import image31 from '../assets/images/image31.png';

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
          <div className="absolute inset-0 flex items-start justify-center" style={{ top: '18%' }}>
            <div className="text-center px-6 max-w-2xl mx-auto">
              <h3 style={{ fontFamily: 'Cormorant, serif', fontSize: '40px', color: '#fff', fontStyle: 'italic', fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                —— Who We Are ——
              </h3>

              <div style={{ marginTop: 18, color: '#F8FAFC', textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
                <p className="text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>
                  Born from a vision of weaving wellness, adventure, and purpose into everyday living, Traveon is more than a retreat planner — we’re architects of transformation.
                </p>

                <p className="mt-6 text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>
                  We draw inspiration from alchemy of ancient wisdom and modern wellness science. From meditation practices taught by elders, to evidence-backed techniques for mental clarity, every facet of our retreats is crafted with deep intention.
                </p>

                <p className="mt-6 text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>
                  We are guides, facilitators, companions — walking alongside those who come to us carrying stress, burnout, or simply a longing for more meaning. And when they leave, we hope they carry away calm, clarity, and a renewed sense of possibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* "How it Started" section using program24.png */}
      <section className="w-full">
        <div className="relative w-full">
          <img src={program24} alt="program24 background" className="w-full h-auto object-contain block" />

          <div className="absolute inset-0 flex items-start justify-center" style={{ top: '18%' }}>
            <div className="text-center px-6 max-w-2xl mx-auto">
              <h3 style={{ fontFamily: 'Cormorant, serif', fontSize: '40px', color: '#000', fontStyle: 'italic', fontWeight: 700 }}>
                —— How it <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent">Started</span> ——
              </h3>

              <div style={{ marginTop: 18, color: '#000' }}>
                <p className="text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>
                  The world keeps moving fast. Deadlines, targets, notifications — the noise often drowns out what matters most. We started Retreats by Traveon because we saw how much people longed for stillness, for real connections, for a chance to rest and remember who they are… beyond their roles, beyond their to-do lists.
                </p>

                <p className="mt-6 text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>
                  Our founders spent years exploring wellness modalities — retreats, silent walks, breath work, group sharing circles, mindfulness practices, nature immersion — learning from guides, healers, coaches, and communities.
                </p>

                <p className="mt-6 text-base md:text-lg leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, letterSpacing: '-4%' }}>
                  What emerged was a clear truth: profound transformation isn’t a luxury. It’s a necessity. So, we built this space — retreats that go beyond luxury or escape — experiences that invite awakening, belonging, and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home page sections so About Us mirrors home initially */}
      {/* New white-background section with full-width image21 and overlayed heading + CTA */}
      <section className="w-full bg-white">
        <div className="relative w-full">
          <img src={image21} alt="image21" className="w-full h-auto object-cover block" />

          {/* Overlay: heading on the image and a gradient CTA button below it */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-4xl mx-auto">
              <h2 className="mx-auto" style={{ textAlign: 'center', textShadow: '0 4px 18px rgba(0,0,0,0.6)' }}>
                <span style={{
                  display: 'block',
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: '32px',
                  lineHeight: '36px',
                  letterSpacing: '-2%',
                  color: '#ffffff'
                }}>
                  Creating a legacy of
                </span>

                <span style={{
                  display: 'block',
                  fontFamily: 'Cormorant Infant, serif',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: '42px',
                  lineHeight: '36px',
                  letterSpacing: '-2%',
                  color: '#ffffff',
                  textTransform: 'capitalize'
                }}>
                  happiness, wellness &amp; belongingness
                </span>
              </h2>

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:opacity-95 focus:outline-none"
                  aria-label="Primary CTA"
                >
                  <span style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>CTA's</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Duplicate of 'Who We Are' section but using image23.png as the background */}
      <section className="w-full">
        <div className="relative w-full">
          <img src={image23} alt="image23 background" className="w-full h-auto object-contain block" />

          {/* Our Mission overlay (responsive: shifts down/right on md+) */}
          <div className="absolute top-8 left-4 md:top-14 md:left-16 lg:top-20 lg:left-20">
            <div className="max-w-xs md:max-w-xl text-left">
              <h3 className="bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent text-2xl md:text-[42px] italic" style={{ fontFamily: 'Cormorant, serif', fontWeight: 700, lineHeight: '42px', letterSpacing: '-5%', textAlign: 'center' }}>
                Our Mission ——
              </h3>

              <div className="mt-3 md:mt-4 text-black">
                <p className="text-sm md:text-base leading-6 md:leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400 }}>
                  To craft soulful retreats that blend ancient wisdom + modern science, deliver heartfelt experiences, and ignite transformation — for people and teams alike.
                </p>


                <p className="mt-3 text-sm md:text-base leading-6 md:leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400 }}>
                  To be a trusted partner in the journey toward well-being, purpose, and conscious living.
                </p>
              </div>
            </div>
          </div>

          {/* Our Vision overlay (responsive: shifts up/left on md+) */}
          <div className="absolute bottom-8 right-4 md:bottom-14 md:right-12 lg:bottom-20 lg:right-20">
            <div className="max-w-xs md:max-w-xl text-left">
              <h3 className="bg-gradient-to-r from-teal-400 via-cyan-500 to-purple-500 bg-clip-text text-transparent text-2xl md:text-[42px] italic" style={{ fontFamily: 'Cormorant, serif', fontWeight: 700, lineHeight: '42px', letterSpacing: '-5%', textAlign: 'left' }}>
                Our Vision ——
              </h3>

              <div className="mt-3 md:mt-4 text-black">
                <p className="text-sm md:text-base leading-6 md:leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, textAlign: 'left' }}>
                  To craft soulful retreats that blend ancient wisdom + modern science, deliver heartfelt experiences, and ignite transformation — for people and teams alike.
                </p>

                <p className="mt-3 text-sm md:text-base leading-6 md:leading-7" style={{ fontFamily: 'Archivo, serif', fontWeight: 400, textAlign: 'left' }}>
                  To be a trusted partner in the journey toward well-being, purpose, and conscious living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team section (image24 background) */}
      <section className="w-full bg-black">
        <div className="relative w-full z-0">
          <img src={image24} alt="team background" className="w-full h-auto object-cover block" />

          <div className="absolute inset-0 flex items-start justify-center z-10">
            <div className="text-center px-6 pt-16 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-white" style={{ fontFamily: 'Cormorant, serif' }}>
                Meet Our Team
              </h2>

              <p className="mt-4 text-white/90 text-sm md:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
                Traveon Ventures is guided by a leadership team that brings together complementary expertise in global travel, destination management, and event organization. This multidisciplinary leadership approach ensures that the company combines operational excellence with strategic vision and content expertise.
              </p>

              {/* Team grid: two profiles */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Profile 1: image left, content right on md+ */}
                <div className="flex w-full flex-col md:flex-row md:justify-between items-center md:items-center gap-4">
                  <img src={team1} alt="team member 1" className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-lg md:-ml-8" />
                  <div className="text-left md:flex-1 md:pl-6">
                    <h4 className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: 'Lato, sans-serif' }}>Dr. Piyush Bhardwaj</h4>
                    <p className="mt-2 text-sm md:text-base text-white/90" style={{ fontFamily: 'Archivo, serif' }}>With 15 years of experience in technology, data science, academic research, he brings in-depth expertise in building data-driven engagement platforms .</p>
                  </div>
                </div>

                {/* Profile 2: image right, content left on md+ */}
                <div className="flex w-full flex-col md:flex-row md:justify-between items-center md:items-center gap-4">
                  <img src={team2} alt="team member 2" className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-lg md:-mr-16" />
                  <div className="text-left md:flex-1 md:pl-16 lg:pl-20">
                    <h4 className="text-lg md:text-xl font-semibold text-white" style={{ fontFamily: 'Lato, sans-serif' }}>Mr Abhineet Gupta</h4>
                    <p className="mt-2 text-sm md:text-base text-white/90" style={{ fontFamily: 'Archivo, serif' }}>A seasoned business strategist with 14 years of diverse experience in travel and hospitality industries leading global companies like OYO & Trip.com</p>
                  </div>
                </div>
              </div>

              {/* Thin centered white line (not touching edges) */}
              <div className="mt-8 flex justify-center">
                <div className="w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 border-t border-white/60" />
              </div>

              {/* Six image cards (3 per row on md+) with text to the right */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Sales Head' },
                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Director of Experiences' },
                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Program Lead' },
                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Community Manager' },
                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Operations Head' },
                  { img: team1, name: 'Dr. Piyush Bhardwaj', role: 'Experience Designer' },
                ].map((card, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-transparent p-2">
                    <img src={card.img} alt={`card-${idx}`} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md" />
                    <div>
                      <h5 className="text-white font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>{card.name}</h5>
                      <p className="text-white/80 text-sm" style={{ fontFamily: 'Archivo, serif' }}>{card.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New white quote section requested by user */}
      <section className="w-full bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mx-auto w-8 md:w-12 lg:w-16">
            <img src={image31} alt="decorative" className="w-full h-auto mx-auto block" />
          </div>

          <p className="mt-8 mx-auto text-black" style={{ fontFamily: 'Archivo, serif', fontWeight: 300 as any, fontStyle: 'normal', fontSize: '28px', lineHeight: '120%', letterSpacing: '-0.02em', textAlign: 'center', maxWidth: 900 }}>
            “The entire world is our family. We don’t see human made divisions created by borders, backgrounds, or beliefs because at our core, we are all connected. We believe that humanity is one, bound by love, compassion, and shared experiences. No man-made boundary can change the truth that we are part of the same global family, walking this journey of life together.”
          </p>
        </div>
      </section>

      <Subscribe />

      <Footer />
    </div>
  );
}