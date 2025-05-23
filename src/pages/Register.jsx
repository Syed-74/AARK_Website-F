// import React from 'react';

// const Register = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-white py-8 px-2">
//       <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
//         {/* Illustration */}
//         <div className="hidden md:flex items-center justify-center bg-blue-50 p-8 md:w-1/2">
//           <img
//             src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
//             alt="Register Illustration"
//             className="w-64 h-64 object-cover rounded-xl shadow"
//           />
//         </div>
//         {/* Register Form */}
//         <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
//           <div className="flex flex-col items-center mb-6">
//             <img src="/logo-removebg-preview.png" alt="Logo" className="w-16 h-16 object-cover rounded-2xl bg-green-700 p-2 mb-2" />
//             <h2 className="text-2xl font-bold text-green-700 mb-2">Create Account</h2>
//             <p className="text-gray-500 text-sm">Sign up for an admin account</p>
//           </div>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
//             >
//               Register
//             </button>
//           </form>
//           <div className="mt-4 text-center text-gray-600 text-sm">
//             Already have an account?{' '}
//             <a href="/" className="text-green-600 hover:underline font-semibold">Login</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import axios from 'axios';
import React, { useState } from 'react';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-white py-8 px-2">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
        <div className="hidden md:flex items-center justify-center bg-blue-50 p-8 md:w-1/2">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Register Illustration" className="w-64 h-64 object-cover rounded-xl shadow" />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex flex-col items-center mb-6">
            <img src="/logo-removebg-preview.png" alt="Logo" className="w-16 h-16 object-cover rounded-2xl bg-green-700 p-2 mb-2" />
            <h2 className="text-2xl font-bold text-green-700 mb-2">Create Account</h2>
            <p className="text-gray-500 text-sm">Sign up to your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="fullName" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" onChange={handleChange} required />
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg">Register</button>
          </form>
          <div className="mt-4 text-center text-gray-600 text-sm">
            Already have an account? <a href="/" className="text-green-600 hover:underline font-semibold">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
