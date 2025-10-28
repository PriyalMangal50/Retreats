import logo1 from '../assets/images/5f243ec1a924170c7d61d66e37d6547815e51bb3.png';
import logo2 from '../assets/images/5f243ec1a924170c7d61d66e37d6547815e51bb3.png';
import logo3 from '../assets/images/3f19ae82f4689bfe8fdbd7806fbe3d10057766f8.png';
import logo4 from '../assets/images/b90c4c6e0a8c1ea32f53c2e25ee0d556823db593.png';
import logo5 from '../assets/images/5be7380ba8554002e1ff38ccb424585e0dd438dd (3).png';
import logo6 from '../assets/images/5f243ec1a924170c7d61d66e37d6547815e51bb3.png';

export default function TrustedBy() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <section className="py-8 bg-white -mt-1">
      <div className="max-w-7xl mx-auto px-8">
        <p style={{
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 500,
          fontStyle: 'normal',
          fontSize: '20px',
          lineHeight: '24px',
          letterSpacing: '-4%',
          textAlign: 'center',
          marginBottom: '4px',
          textTransform: 'none',
          color: '#374151'
        }}>
        </p>

        <h3 style={{
          fontFamily: 'Cormorant Infant, serif',
          fontWeight: 500,
          fontStyle: 'italic',
          fontSize: '24px',
          lineHeight: '24px',
          letterSpacing: '-4%',
          textAlign: 'center',
          marginBottom: '12px',
          color: '#111827'
        }}>
          Loved by Leading Organizations
        </h3>

        <div className="overflow-hidden">
          <div className="marquee" style={{ position: 'relative', marginTop: '18px' }}>
            <div
              className="marquee-track"
              style={{
                display: 'flex',
                gap: '32px',
                alignItems: 'center'
              }}
            >
              {logos.concat(logos).map((src, i) => (
                <div
                  key={i}
                  className="logo-item"
                  style={{
                    width: '160px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 1,
                    flex: '0 0 auto'
                  }}
                >
                  <img src={src} alt={`logo-${i}`} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 300ms ease' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .marquee { overflow: hidden; }
        .marquee-track { animation: marquee-left 18s linear infinite; display:flex; }
        .marquee-track > .logo-item { flex: 0 0 auto; }
        .logo-item img { will-change: transform; }
        .logo-item:hover img { transform: scale(1.06); }
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

