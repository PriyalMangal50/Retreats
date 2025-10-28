import { ArrowRight } from 'lucide-react';
import { images } from '../assets';

export default function ImageCTA() {
  return (
    <>
      {/* Top wavy divider that blends into the image section */}
      <div style={{ position: 'relative', zIndex: 11, marginTop: '-120px', background: '#DBF3E0' }}>
        <div style={{ overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 160 }} aria-hidden>
            {/* top wave: use same curvature as the bottom wave so upper boundary is wavy */}
            <path d="M0,80 C160,160 320,160 480,80 C640,0 800,0 960,80 C1120,160 1280,160 1440,80 L1440,160 L0,160 Z" fill="#DBF3E0" />
          </svg>
        </div>
      </div>

      <section
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${images.programs?.[5] || images.programs?.[4] || images.programs?.[3] || images.image7})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 560,
          marginTop: '-160px'
        }}
      >
        {/* translucent overlay to ensure text contrast */}
        <div className="absolute bg-black/35" />

        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ minHeight: 560 }}
        >
          <p className="font-[Cormorant] italic font-semibold text-white text-3xl md:text-4xl leading-tight drop-shadow-sm">
            Creating a legacy of
            <br />
            <span className="block text-4xl md:text-5xl">Happiness, Wellness & Belongingness</span>
          </p>

          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-[52px] text-white font-semibold bg-gradient-to-r from-teal-400 to-green-600 shadow-lg hover:opacity-95 transition"
            aria-label="Contact / CTA"
          >
            <span>CTAs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom wavy divider (white) to transition to the next white section */}
        <div style={{ position: 'absolute', bottom: -1, left: 0, right: 0, overflow: 'hidden', lineHeight: 0 }} aria-hidden>
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 160 }}>
            <path d="M0,80 C160,160 320,160 480,80 C640,0 800,0 960,80 C1120,160 1280,160 1440,80 L1440,160 L0,160 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* The content that follows (testimonials etc.) remains unchanged and will sit on the white background below */}
    </>
  );
}
