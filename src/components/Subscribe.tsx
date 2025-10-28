import { images } from '../assets';
import { Mail } from 'lucide-react';

export default function Subscribe() {
  return (
    <section
      aria-label="Subscribe"
      style={{
        backgroundImage: `url(${images.program10})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
      }}
    >
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            width: 1580,
            height: 164,
            gap: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 50,
            paddingRight: 10,
            paddingBottom: 50,
            paddingLeft: 10,
            boxSizing: 'border-box'
          }}
        >
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 420 }}>
              <Mail size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(0,0,0,0.45)' }} />
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-md px-4 py-3"
                style={{ width: '100%', border: '1px solid rgba(0,0,0,0.12)', paddingLeft: 40 }}
              />
            </div>

            <button
              className="rounded-md px-6 py-3 font-semibold text-white"
              style={{ background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)' }}
            >
              Join to Subscribe!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
