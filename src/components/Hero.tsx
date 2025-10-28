import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Hero({ titleOverride, subtitleOverride, showBadge = true }: { titleOverride?: ReactNode; subtitleOverride?: ReactNode; showBadge?: boolean }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pb-32">
      {/* Background is provided by SharedBackground component rendered in App */}
      <div className="absolute  z-0">
        <div className="absolute bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        {showBadge && (
          <div className="inline-block mb-8 relative">
          {/* Outer gradient acts as the colored border and follows border-radius */}
          <div
            style={{
              background: 'linear-gradient(91.87deg, #35F1F1 0%, #94F81A 50.48%, #00FF3C 100%)',
              padding: '3px',
              borderRadius: '9999px',
              display: 'inline-block'
            }}
          >
            {/* Inner block holds the dark background and text */}
            <div
              style={{
                background: 'linear-gradient(90deg, #00282A 0%, #033520 100%)',
                borderRadius: '9999px',
                padding: '8px 16px'
              }}
            >
              <span className="text-white font-medium">
                🌿 Transforming Experiences Since 2020
              </span>
            </div>
          </div>
          </div>
        )}

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {titleOverride ? (
            titleOverride
          ) : (
            <>
              <span
                style={{
                  fontFamily: 'Cormorant, serif',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: '80px',
                  lineHeight: '68px',
                  letterSpacing: '-3%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  display: 'inline-block'
                }}
              >
                Retreats
              </span>{' '}
              that Renew<br />Teams that{' '}
              <span
                style={{
                  fontFamily: 'Cormorant, serif',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  fontSize: '80px',
                  lineHeight: '68px',
                  letterSpacing: '-3%',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                  display: 'inline-block'
                }}
              >
                Thrive
              </span>
            </>
          )}
        </h1>

        <p className="text-white/90 mb-10 max-w-2xl mx-auto" style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '24px',
          textAlign: 'center'
        }}>
          {subtitleOverride ? subtitleOverride : 'Immersive wellness, inspiring corporate offsites, community journeys, and MICE experiences—crafted by Retreats by Traveon.'}

        </p>

        <button
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-lg"
          style={{
            background: 'linear-gradient(91.87deg, #3CB79F 0%, #99CD2E 100%)'
          }}
        >
          Explore Retreats
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          {/* Symmetric wavy divider: two mirrored sine-like curves */}
          <path
            d="M0 60 C120 20 360 20 480 60 C600 100 840 100 960 60 C1080 20 1320 20 1440 60 L1440 120 L0 120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
