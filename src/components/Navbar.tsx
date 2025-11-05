//import logoA from '../assets/images/image1.png';
import logoB from "../assets/images/c134a71f95fd3d1af893e2da28fa7b4de520f131 (2).png";
import { ChevronDown, UserCircle2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../store/auth";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Restored 'menuOpen' state
  const location = useLocation();

  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, clearAuth } = useAuth();

  // close dropdown when clicking outside
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false); // Fixed reference to 'setMenuOpen'
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isBlogs = location.pathname.startsWith("/blogs");
  const isBlog2 = location.pathname === "/blogs/blog2";
  const isPackages =
    location.pathname === "/packages" ||
    location.pathname.startsWith("/packages/");
  const isAuth =
    location.pathname === "/login" || location.pathname === "/signup";

  const avatarUrl = (user as any)?.userAvatar || (user as any)?.avatarUrl || "";
  const displayName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim() ||
      user.emailAddress
    : "";
  const isAdmin = user?.userType === "Admin";

  const activeScrolled = scrolled || isBlogs || isAuth || isPackages;

  const linkClass = activeScrolled
    ? "text-gray-900 font-medium hover:text-green-600 transition-colors"
    : "text-white font-medium hover:text-green-300 transition-colors";

  let navbarStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    boxShadow: "none",
  };
  if (isBlog2 && !scrolled) {
    // On Blog2 page show the green background behind the navbar when not scrolled
    navbarStyle = { backgroundColor: "#B3E4BF", boxShadow: "none" };
  } else if (activeScrolled) {
    navbarStyle = {
      backgroundColor: "#ffffff",
      boxShadow: "0 1px 6px rgba(16,24,40,0.08)",
    };
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-8 transition-colors duration-200"
      style={navbarStyle}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center" style={{ gap: "1px" }}>
          <img
            src={logoB}
            alt="Logo B"
            className="w-36 md:w-52 lg:w-60 h-14 object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link to="/" className={linkClass}>
            Home
          </Link>
          <div className="relative group">
            <button className={`${linkClass} flex items-center gap-1`}>
              Our Programs
              <ChevronDown
                className={`${
                  scrolled ? "text-gray-900" : "text-white"
                } w-4 h-4`}
              />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                to="/wellness-retreats"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-t-lg"
              >
                Wellness Retreats
              </Link>
              <Link
                to="/corporate-retreats"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
              >
                Corporate Retreats
              </Link>
              <Link
                to="/community-tours"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
              >
                Community Tours
              </Link>
              <Link
                to="/mice-tours"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-b-lg"
              >
                MICE Tours
              </Link>
            </div>
          </div>
          <Link to="/about" className={linkClass}>
            About Us
          </Link>
          <Link to="/blogs" className={linkClass}>
            Blogs
          </Link>
          <Link
            to="/enquire"
            className="hidden lg:flex items-center justify-center text-sm font-medium text-white px-4 py-2 rounded-full"
            style={{
              background: "linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)",
            }}
          >
            Contact Us
          </Link>
          {!isAuthenticated && (
            <>
              <Link to="/login" className={linkClass}>
                Login
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center text-sm font-medium text-white px-4 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)",
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md bg-white/10 text-white"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white z-40 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            <Link to="/" className="text-gray-900 font-medium">
              Home
            </Link>
            <Link to="/wellness-retreats" className="text-gray-900 font-medium">
              Wellness Retreats
            </Link>
            <Link to="/corporate-retreats" className="text-gray-900 font-medium">
              Corporate Retreats
            </Link>
            <Link to="/community-tours" className="text-gray-900 font-medium">
              Community Tours
            </Link>
            <Link to="/mice-tours" className="text-gray-900 font-medium">
              MICE Tours
            </Link>
            <Link to="/about" className="text-gray-900 font-medium">
              About Us
            </Link>
            <Link to="/blogs" className="text-gray-900 font-medium">
              Blogs
            </Link>
            <Link
              to="/enquire"
              className="text-white font-medium inline-flex items-center justify-center px-4 py-2 rounded-full"
              style={{
                background: "linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)",
              }}
            >
              Contact Us
            </Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="text-gray-900 font-medium">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white font-medium inline-flex items-center justify-center px-4 py-2 rounded-full"
                  style={{
                    background:
                      "linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)",
                  }}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 py-2">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt="User Avatar"
                      className="w-9 h-9 rounded-full object-cover border border-gray-200"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100">
                      <UserCircle2 className="text-gray-700 w-7 h-7" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {displayName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {user?.emailAddress}
                    </p>
                  </div>
                </div>

                <Link to="/profile" className="text-gray-900 font-medium">
                  Profile
                </Link>
                {isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    className="text-gray-900 font-medium"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    clearAuth();
                    setMobileOpen(false);
                    navigate("/", { replace: true });
                  }}
                  className="text-red-600 font-medium text-left"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
