import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Login() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="min-h-[60vh] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #E9FFFC 0%, #F6FFF9 100%)' }}>
        <div className="max-w-md w-full bg-white shadow-xl rounded-xl p-6 mx-4">
          <h2 className="text-2xl font-bold mb-4">Welcome back</h2>
          <p className="text-sm text-gray-600 mb-6">Sign in to access your bookings and enquiries.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Password</label>
              <input type="password" className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div className="flex items-center justify-between">
              <label className="text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link to="#" className="text-sm text-emerald-600">Forgot?</Link>
            </div>

            <div>
              <button type="button" className="w-full py-2 rounded-md text-white font-semibold" style={{ background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)' }}>Sign In</button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            New here? <Link to="/signup" className="text-emerald-600 font-medium">Create an account</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen pt-28 bg-white">
      <Navbar />

      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-br from-[#00C5C5] to-[#009F26] p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-2xl md:text-3xl font-bold">Welcome back</h2>
                  <p className="mt-3 text-sm md:text-base opacity-90">Sign in to access your bookings and preferences</p>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-semibold mb-4">Login</h3>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm text-gray-600">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-emerald-600">Forgot?</a>
                  </div>

                  <div className="pt-2">
                    <button className="w-full rounded-lg py-3 font-semibold text-white bg-gradient-to-r from-[#00C5C5] to-[#009F26]">Sign in</button>
                  </div>
                </form>

                <p className="mt-4 text-sm text-gray-600">Don't have an account? <a href="/signup" className="text-emerald-600 font-medium">Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
      <Footer />
    </div>
  );
}
