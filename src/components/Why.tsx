import { images } from '../assets';

export default function Why() {
  const items = [
    { img: images.testimonials[0], title: 'Blending Nature & Nurture', desc: 'Thoughtfully designed experiences that combine wellness, adventure, and reflection.' },
    { img: images.testimonials[1], title: 'Tailored to Your Needs', desc: 'Customized corporate offsites, wellness escapes, and community journeys crafted for lasting impact.' },
    { img: images.testimonials[2], title: 'Care at Every Step', desc: 'Meaningful engagement with local cultures and communities.' },
    { img: images.testimonials[0], title: 'Strengthening Bonds', desc: 'Guided practices to cultivate presence and clarity.' },
    { img: images.testimonials[1], title: 'Transforming Work & Life', desc: 'Responsible travel that supports local ecosystems.' },
    { img: images.testimonials[2], title: 'Driven by Purpose', desc: 'Holistic wellness activities tailored to your needs.' }
  ];

  return (
  <section style={{ background: '#DBF3E0', position: 'relative', zIndex: 10 }} className="py-12">
      <div className="max-w-7xl mx-auto px-8">
        <h3 className="text-center mb-3">
          <span style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '40px',
            lineHeight: '48px',
            letterSpacing: '-3%',
            textAlign: 'center',
            textTransform: 'none',
            display: 'inline-block'
          }}>Why Retreats by </span>
          <span style={{
            fontFamily: 'Cormorant, serif',
            fontWeight: 600,
            fontStyle: 'italic',
            fontSize: '48px',
            lineHeight: '48px',
            letterSpacing: '-4%',
            textAlign: 'center',
            textTransform: 'capitalize',
            display: 'inline-block',
            background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Traveon?</span>
        </h3>
        <p className="text-center max-w-2xl mx-auto text-gray-700 mb-10">Not just retreats, but transformative journeys that inspire growth and connection</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] justify-center">
          {items.map((it, i) => (
            <div key={i} className="bg-[#DBF3E0] rounded-[12px] shadow-sm mx-auto" style={{ width: 380, height: 200, paddingTop: 16, paddingRight: 12, paddingBottom: 16, paddingLeft: 12, opacity: 1 }}>
              <div style={{ height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={it.img} alt={it.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: 8 }} />
              </div>
              <div style={{ marginTop: 10 }} className="text-center">
                <h4 className="font-semibold text-lg text-center">{it.title}</h4>
                <p className="text-sm text-gray-700">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}