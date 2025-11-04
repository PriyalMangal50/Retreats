import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

export default function Hero({
  titleOverride,
  subtitleOverride,
  showBadge = true,
}: {
  titleOverride?: ReactNode;
  subtitleOverride?: ReactNode;
  showBadge?: boolean;
}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pb-32 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
      <div className="absolute bg-black/50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {showBadge && (
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-r from-teal-400 to-green-500 p-1 rounded-full inline-block">
              <div className="bg-black text-white px-4 py-2 rounded-full">
                Transforming Experiences Since 2020
              </div>
            </div>
          </div>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {titleOverride || (
            <>
              Retreats that <span className="italic">Renew</span>
              <br />
              Teams that <span className="italic">Thrive</span>
            </>
          )}
        </h1>

        <p className="text-white/90 mb-10 max-w-2xl mx-auto text-sm md:text-base">
          {subtitleOverride ||
            'Immersive wellness, inspiring corporate offsites, community journeys, and MICE experiences—crafted by Retreats by Traveon.'}
        </p>

        <button
          className="inline-flex items-center gap-3 px-8 py-4 rounded-lg text-white font-semibold text-lg bg-gradient-to-r from-teal-400 to-green-500 hover:scale-105 transition-transform"
        >
          Explore Retreats
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 C120 20 360 20 480 60 C600 100 840 100 960 60 C1080 20 1320 20 1440 60 L1440 120 L0 120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
