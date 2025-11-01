import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Signup() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="min-h-[70vh] flex items-center justify-center" style={{ background: 'linear-gradient(180deg, #E9FFFC 0%, #F6FFF9 100%)' }}>
        <div className="max-w-lg w-full bg-white shadow-xl rounded-xl p-6 mx-4">
          <h2 className="text-2xl font-bold mb-4">Create your account</h2>
          <p className="text-sm text-gray-600 mb-6">Sign up to book packages and manage your enquiries.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Full name</label>
              <input type="text" className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input type="email" className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block text-sm text-gray-700">Password</label>
              <input type="password" className="mt-1 w-full border rounded px-3 py-2" />
            </div>

            <div>
              <button type="button" className="w-full py-2 rounded-md text-white font-semibold" style={{ background: 'linear-gradient(91.87deg, #00C5C5 0%, #009F26 100%)' }}>Create account</button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-emerald-600 font-medium">Sign in</Link>
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

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen pt-28 bg-white">
      <Navbar />

      <section className="w-full py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl md:text-3xl font-bold">Create your account</h2>
              <p className="mt-3 text-sm md:text-base text-gray-600">Get started with Retreats by Traveon — save preferences and bookings.</p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm text-gray-600">Full name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <button className="w-full rounded-lg py-3 font-semibold text-white bg-gradient-to-r from-[#00C5C5] to-[#009F26]">Create account</button>
                </div>
              </form>

              <p className="mt-4 text-sm text-gray-600">Already have an account? <a href="/login" className="text-emerald-600 font-medium">Sign in</a></p>
            </div>

            <div className="md:w-1/2 bg-gradient-to-br from-[#00C5C5] to-[#009F26] p-8 flex items-center justify-center text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold">A better way to book</h3>
                <p className="mt-3 text-sm md:text-base opacity-90">Save your favourite packages and get early-bird offers.</p>
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
