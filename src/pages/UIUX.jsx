import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: '🎯', title: 'User Focused', desc: 'Designs that put users first and create seamless journeys.' },
  { icon: '⚙️', title: 'Optimized Systems', desc: 'Smooth workflows and minimal cognitive load.' },
  { icon: '🌐', title: 'Cross-Platform', desc: 'Consistency across desktop, tablet, and mobile devices.' },
  { icon: '🚀', title: 'High Performance', desc: 'Blazing-fast load times and interactions.' },
  { icon: '🎥', title: 'Media Integration', desc: 'Beautiful UI with support for video, animation & more.' },
  { icon: '🛠️', title: 'Custom Built', desc: 'Tailored UI experiences for every project need.' },
];

const UIUX = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800">

      {/* HERO SECTION WITH VIDEO */}
      <div className="flex flex-col md:flex-row items-center w-full min-h-[80vh] bg-white px-6 py-12">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4">
          <img
            src="/UI-UX-service-Head-Illustration4x.jpg"
            alt="UI/UX Design"
            className="w-full h-auto max-w-full rounded-xl shadow-lg object-cover"
          />
        </div>


        {/* Right Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-700 mb-4">
            Powerful UI/UX Design
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-6">
            Seamless design experiences that captivate and convert. We build intuitive, user-first interfaces that drive engagement.
          </p>
        </div>
      </div>




      {/* FEATURE SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Why Our Design Stands Out
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
};

export default UIUX;
