import axios from 'axios';
import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import LoginPage from './LoginPage';

const Footer = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      await axios.post("https://aark-website-b.onrender.com/api/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://aark-website-b.onrender.com/api/auth/login', { email, password }, {
        headers: { 'Content-Type': 'application/json' }
      });
      const data = res.data;
      localStorage.setItem('token', data.token);
      if (data.role === 'admin') window.location.href = '/admin-dashboard';
      else window.location.href = '/user-dashboard';
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6 px-2 sm:px-6 mt-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start w-full relative">
          <div className="flex items-center mb-3">
            <img src="/logo-removebg-preview.png" alt="Logo" className="w-14 h-14 object-cover rounded-2xl bg-green-700 p-2 mr-2" />
            <span className="text-xl font-bold text-green-700">AARK CONNECT</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mb-4 text-center md:text-left">
            Delivering innovative technology solutions and consulting services. Your trusted partner for IT talent and business growth.
          </p>
          {/* Socials and Admin Login */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
            <a href="https://www.linkedin.com/company/aarkconnect/" aria-label="LinkedIn" className="hover:text-green-400 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.098-.021-2.509-1.531-2.509-1.531 0-1.767 1.197-1.767 2.432v4.681h-3v-9h2.881v1.229h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v4.733z" /></svg></a>
            <button
              aria-label="Admin Login"
              onClick={() => setShowLogin(true)}
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg shadow transition text-sm md:text-base flex items-center justify-center"
            >
              <FaSignInAlt className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Map & Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2 text-green-700">Our Location</h3>
          <div className="w-full h-40 rounded-lg overflow-hidden mb-3 shadow-lg">
            <iframe
              title="AARK Connect Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3247642550037!2d78.4730531!3d17.4122531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e43cce10ff%3A0x44bbac2b5e94d6f4!2s1-4-923-1%20Metro%20Pillar%20No%201073%2C%20Near%20RTC%20X%20Road%2C%20Musheerabad%2C%20Hyderabad%2C%20Telangana%20500020%2C%20India!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="text-gray-400 text-sm">
            <div className="mb-1"><span className="font-semibold text-gray-200">Address:</span> 1-4-923/1, Metro Pillar No. 1073, Near RTC X Road, Musheerabad, Hyderabad, TS</div>
            <div className="mb-1"><span className="font-semibold text-gray-200">Email:</span> syedaliakbar@aark.tech</div>
            <div><span className="font-semibold text-gray-200">Phone:</span> +91 9000718633</div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="flex flex-col items-center md:items-start w-full max-w-md mx-auto px-4">
          <h3 className="text-lg font-semibold mb-2 text-green-700">We're Ready, Let's Talk.</h3>
          <form onSubmit={handleSubmit1} className="w-full space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded transition"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
            {status && <p className="text-sm text-gray-200 mt-2">{status}</p>}
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AARK Connect. All rights reserved.
      </div>
      {showLogin && (
        <LoginPage
          onClose={() => setShowLogin(false)}
          handleSubmit={handleLoginSubmit}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      )}
    </footer>
  )
}

export default Footer