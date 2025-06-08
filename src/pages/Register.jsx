import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Registered successfully');
    } catch (err) {
      alert(err.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-100 to-white py-8 px-4 w-full">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden relative">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-gradient-to-b from-green-600 to-green-700 text-white flex flex-col items-center justify-center p-10">
          <img
            src="/logo-removebg-preview.png"
            alt="Logo"
            className="w-16 h-16 mb-4 bg-white rounded-full p-2"
          />
          <h2 className="text-2xl font-bold mb-2">Create Your Admin Account</h2>
          <p className="text-sm text-center mb-6">
            Join the admin team and help manage the system. Fill in your details to get started!
          </p>
        </div>
        {/* Right Panel (Form) */}
        <div className="md:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">Register</h2>
          <p className="text-gray-600 text-sm text-center mb-6">
            Sign up to your admin account
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:ring-2 focus:ring-green-400"
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full transition"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <a href="/" className="text-green-600 hover:underline font-semibold">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
