import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
//import logoA from '../assets/images/image1.png';
import logoB from '../assets/images/c134a71f95fd3d1af893e2da28fa7b4de520f131 (2).png';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = scrolled
    ? 'text-gray-900 font-medium hover:text-green-600 transition-colors'
    : 'text-white font-medium hover:text-green-300 transition-colors';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-colors duration-200"
      style={{
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 1px 6px rgba(16,24,40,0.08)' : 'none'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center" style={{ gap: '1px' }}>
          {/* <img src={logoA} alt="Logo A" style={{ width: '100px', height: '48px', objectFit: 'contain' }} /> */}
          <img src={logoB} alt="Logo B" className="w-40 md:w-72 lg:w-80 h-12 object-contain" />
        </div>

        <div className="flex items-center gap-10">
          <a href="#packages" className={linkClass}>
            Packages
          </a>

          <div className="relative group">
            <button className={`${linkClass} flex items-center gap-1`}>
              Our Programs
              <ChevronDown className={`${scrolled ? 'text-gray-900' : 'text-white'} w-4 h-4`} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/wellness-retreats" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-t-lg">Wellness Retreats</Link>
              <Link to="/corporate-retreats" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Corporate Retreats</Link>
              <Link to="/community-tours" className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Community Tours</Link>
              <Link to="/mice-tours" className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-b-lg">MICE Tours</Link>
            </div>
          </div>

          <Link to="/about" className={linkClass}>
            About Us
          </Link>

          <a href="#blogs" className={linkClass}>
            Blogs
          </a>
          {/* Contact Us button with exact styling */}
          <a
            href="#contact"
            className="flex items-center justify-center text-sm font-medium text-white"
            style={{
              width: '103px',
              height: '36px',
              gap: '10px',
              opacity: 1,
              paddingTop: '8px',
              paddingRight: '16px',
              paddingBottom: '8px',
              paddingLeft: '16px',
              borderRadius: '20px',
              background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
