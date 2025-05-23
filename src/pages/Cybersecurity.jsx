import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Threat Detection',
    desc: 'Real-time monitoring and detection of cyber threats to protect your business assets.',
    icon: (
      <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l9 4.5v6c0 5.25-3.75 10-9 13-5.25-3-9-7.75-9-13v-6L12 2z" /></svg>
    ),
  },
  {
    title: 'Risk Assessment',
    desc: 'Comprehensive evaluation of your IT environment to identify vulnerabilities and risks.',
    icon: (
      <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
    ),
  },
  {
    title: 'Compliance & Governance',
    desc: 'Ensure your organization meets industry standards and regulatory requirements.',
    icon: (
      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M8 11h8M8 15h6" /></svg>
    ),
  },
  {
    title: 'Incident Response',
    desc: 'Rapid response and recovery from security incidents to minimize impact.',
    icon: (
      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
  },
  {
    title: 'Security Audits',
    desc: 'In-depth audits to evaluate and strengthen your security posture.',
    icon: (
      <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2" /><path d="M8 11h8M8 15h6" /></svg>
    ),
  },
  {
    title: 'Employee Training',
    desc: 'Empower your team with the knowledge to recognize and prevent cyber threats.',
    icon: (
      <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14v7" /><path d="M5 19h14" /></svg>
    ),
  },
];

const Cybersecurity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-10 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center bg-white rounded-3xl shadow-2xl p-8 md:p-16 gap-8">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-700">Cybersecurity Services</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-4">
            Protect your business from evolving cyber threats with our comprehensive cybersecurity solutions. We safeguard your data, ensure compliance, and empower your team to stay secure in a digital world.
          </p>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <video
            src="/142452-779996481_small.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-[450px] object-contain drop-shadow-2xl rounded-xl"
          />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2" aria-label="Cybersecurity Services">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border-t-4 border-blue-100 hover:border-blue-600 transition-transform hover:scale-[1.04] hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{service.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Cybersecurity;
