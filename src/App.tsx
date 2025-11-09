import SharedBackground from "./components/SharedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Programs from "./components/Programs";
import Why from "./components/Why";
import ImageCTA from "./components/ImageCTA";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Latest from "./components/Latest";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import WellnessRetreats from "./pages/WellnessRetreats";
import CorporateRetreats from "./pages/CorporateRetreats";
import CommunityTours from "./pages/CommunityTours";
import MICETours from "./pages/MICETours";
import AboutUs from "./pages/AboutUs";
import Packages from "./pages/Packages";
import PackagesIndex from "./pages/PackagesIndex";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Enquire from "./pages/Enquire";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import RouteChangeTracker from "./components/RouteChangeTracker";
import AdminRoute from "./components/AdminRoute";
import VerifyEmail from "./pages/VerifyEmail";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { initMessaging, requestAndSyncFcmToken } from "./lib/firebase";
import { Toaster, toast } from "react-hot-toast";
import { useAuth } from "./store/auth";
import { useNavigate } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen pt-28">
      <SharedBackground />
      <Navbar />
      <Hero />
      <TrustedBy />
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

function App() {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;
    (async () => {
      await initMessaging();
      const res = await requestAndSyncFcmToken(token);
      console.log("FCM init result:", res);
    })();
  }, [token]);

  useEffect(() => {
    function onNotify(e: Event) {
      const payload = (e as CustomEvent).detail;
      const title = payload?.notification?.title ?? "Notification";
      const body = payload?.notification?.body ?? "";
      const path = payload?.data?.path || "/";

      toast(
        (t) => (
          <div
            onClick={() => {
              toast.dismiss(t.id);
              navigate(path);
            }}
            className="cursor-pointer"
          >
            <div className="font-semibold">{title}</div>
            <div className="text-sm opacity-80">{body}</div>
            <div className="text-xs text-blue-600 mt-1">View</div>
          </div>
        ),
        { duration: 6000 }
      );
    }
    window.addEventListener(
      "dashboard-notification",
      onNotify as EventListener
    );
    return () =>
      window.removeEventListener(
        "dashboard-notification",
        onNotify as EventListener
      );
  }, [navigate]);

  return (
    <>
      <RouteChangeTracker />
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wellness-retreats" element={<WellnessRetreats />} />
        <Route path="/corporate-retreats" element={<CorporateRetreats />} />
        <Route path="/community-tours" element={<CommunityTours />} />
        <Route path="/mice-tours" element={<MICETours />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/packages" element={<PackagesIndex />} />
        <Route path="/packages/detail" element={<Packages />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs/blog1" element={<Blog1 />} />
        <Route path="/blogs/blog2" element={<Blog2 />} />

        <Route element={<AdminRoute />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* fallback to home for unknown routes */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
