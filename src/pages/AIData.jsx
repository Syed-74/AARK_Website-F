// import React from 'react'
// import aiIcon from '../assets/react.svg'

// const heroImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'; // Unsplash AI image

// const services = [
//   {
//     title: 'Data Analytics',
//     desc: 'Transform raw data into actionable insights with advanced analytics and visualization tools.',
//     badge: 'Insight',
//     icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12" />,
//   },
//   {
//     title: 'Machine Learning',
//     desc: 'Leverage machine learning models to automate processes and predict future trends.',
//     badge: 'Automation',
//     icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12 grayscale" />,
//   },
//   {
//     title: 'AI Consulting',
//     desc: 'Expert guidance to integrate AI solutions tailored to your business needs.',
//     badge: 'Consulting',
//     icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12 sepia" />,
//   },
//   {
//     title: 'Automation',
//     desc: 'Streamline operations and boost efficiency with intelligent automation.',
//     badge: 'Efficiency',
//     icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12 invert" />,
//   },
// ];

// const whyChoose = [
//   {
//     title: 'Expert Team',
//     desc: 'Seasoned data scientists and AI engineers.',
//     icon: '👨‍💻',
//   },
//   {
//     title: 'Cutting-Edge Tech',
//     desc: 'We use the latest AI frameworks and tools.',
//     icon: '🚀',
//   },
//   {
//     title: 'Proven Results',
//     desc: 'Track record of successful AI deployments.',
//     icon: '📈',
//   },
//   {
//     title: 'End-to-End Support',
//     desc: 'From ideation to implementation and beyond.',
//     icon: '🤝',
//   },
// ];

// const testimonials = [
//   {
//     name: 'Sarah Lee',
//     company: 'TechNova',
//     text: 'AARK CONNECT helped us unlock the value of our data. Their AI solutions are top-notch and the team is incredibly supportive.'
//   },
//   {
//     name: 'James Patel',
//     company: 'FinEdge',
//     text: 'Their machine learning expertise transformed our business operations. Highly recommended!'
//   }
// ];

// const AIData = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen relative overflow-x-hidden">
//       {/* Decorative Background Shapes */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-30 blur-2xl z-0" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full opacity-30 blur-2xl z-0" />

//       {/* Hero Section */}
//       <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-4 sm:p-6 md:p-12 mb-8 md:mb-12 gap-8 overflow-hidden">
//         {/* Text */}
//         <div className="flex-1 z-10 flex flex-col items-start justify-center w-full">
//           {/* <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full mb-4 shadow">Empowering Innovation</span> */}
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-blue-700 leading-tight drop-shadow">
//             AI & Data Intelligence
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 max-w-xl font-medium">
//             Unlock the power of your data with our advanced AI and data intelligence solutions. We help businesses make smarter decisions, automate processes, and drive innovation.
//           </p>
//         </div>
//         {/* Video */}
//         <div className="flex-1 flex justify-center items-center w-full z-10">
//           <video
//             src="/istockphoto-1210337927-640_adpp_is.mp4"
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] max-w-full h-auto object-contain drop-shadow-xl rounded-2xl border-4 border-white"
//           >
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         {/* Decorative background shape */}
//         <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-blue-200 to-green-200 rounded-full opacity-20 blur-2xl z-0" />
//       </section>


//       {/* Services Section */}
//       <section className="py-20 px-4 md:px-16 bg-white relative z-10">
//         <h2 className="text-3xl font-extrabold text-center text-green-700 mb-12">Our AI & Data Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
//           {services.map((s, i) => (
//             <div key={i} className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all p-8 flex flex-col items-center text-center group border border-green-100">
//               <div className="mb-4">{s.icon}</div>
//               <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow group-hover:bg-blue-500 transition">{s.badge}</span>
//               <h3 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-green-700 transition">{s.title}</h3>
//               <p className="text-gray-600 font-medium">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 px-4 md:px-16 bg-gradient-to-r from-green-50 to-blue-50 relative z-10">
//         <h2 className="text-3xl font-extrabold text-center text-green-700 mb-12">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
//           {whyChoose.map((w, i) => (
//             <div key={i} className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all">
//               <div className="text-5xl mb-4 drop-shadow-lg">{w.icon}</div>
//               <h3 className="text-lg font-bold text-blue-700 mb-1">{w.title}</h3>
//               <p className="text-gray-600 text-base font-medium">{w.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4 md:px-16 bg-white relative z-10">
//         <h2 className="text-3xl font-extrabold text-center text-green-700 mb-12">What Our Clients Say</h2>
//         <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
//           {testimonials.map((t, i) => (
//             <div key={i} className="flex-1 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-green-200">
//               <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">{t.name[0]}</div>
//               <p className="text-gray-700 italic mb-4">“{t.text}”</p>
//               <div className="font-bold text-green-700">{t.name}</div>
//               <div className="text-blue-700 text-sm">{t.company}</div>
//             </div>
//           ))}
//         </div>
//       </section>


//     </div>
//   )
// }

// export default AIData




import React from 'react';
import { motion } from 'framer-motion';
import aiIcon from '../assets/react.svg';

const heroImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

const services = [
  {
    title: 'Data Analytics',
    desc: 'Transform raw data into actionable insights.',
    badge: 'Insight',
    icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12" />,
  },
  {
    title: 'Machine Learning',
    desc: 'Automate processes and predict future trends.',
    badge: 'Automation',
    icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12 grayscale" />,
  },
  {
    title: 'AI Consulting',
    desc: 'Integrate AI tailored to your business.',
    badge: 'Consulting',
    icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12 sepia" />,
  },
  {
    title: 'Automation',
    desc: 'Boost efficiency with intelligent automation.',
    badge: 'Efficiency',
    icon: <img src={aiIcon} alt="AI Icon" className="w-12 h-12 invert" />,
  },
];

const whyChoose = [
  { title: 'Expert Team', desc: 'Experienced data scientists & engineers.', icon: '👨‍💻' },
  { title: 'Cutting-Edge Tech', desc: 'Latest AI tools and frameworks.', icon: '🚀' },
  { title: 'Proven Results', desc: 'Successful AI integrations delivered.', icon: '📈' },
  { title: 'End-to-End Support', desc: 'From strategy to deployment.', icon: '🤝' },
];

const testimonials = [
  {
    name: 'Sarah Lee',
    company: 'TechNova',
    text: 'AARK CONNECT helped us unlock the value of our data. Their AI solutions are top-notch.',
  },
  {
    name: 'James Patel',
    company: 'FinEdge',
    text: 'Their machine learning expertise transformed our business operations.',
  },
];

const AIData = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">AI & Data Intelligence</h1>
          <p className="text-lg text-gray-600">
            Unlock the power of your data with cutting-edge AI solutions that drive smarter decisions and automation.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="flex-1 flex justify-center items-center w-full z-10">
            <video
              src="/istockphoto-1210337927-640_adpp_is.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] max-w-full h-auto object-contain drop-shadow-xl rounded-2xl border-4 border-white"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">Our AI Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg relative border border-gray-200 text-center"
            >
              <div className="mb-4">{s.icon}</div>
              <span className="absolute top-4 right-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">{s.badge}</span>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50 px-4">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {whyChoose.map((w, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-md text-center border border-gray-100"
            >
              <div className="text-4xl mb-3">{w.icon}</div>
              <h4 className="font-bold text-blue-600 mb-1">{w.title}</h4>
              <p className="text-gray-600 text-sm">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex-1 bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-2xl shadow-md text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white flex items-center justify-center rounded-full text-2xl font-bold mx-auto mb-4">{t.name[0]}</div>
              <p className="italic text-gray-700 mb-4">“{t.text}”</p>
              <div className="font-bold text-green-800">{t.name}</div>
              <div className="text-sm text-blue-600">{t.company}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AIData;
