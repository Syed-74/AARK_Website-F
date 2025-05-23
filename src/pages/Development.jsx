import React from 'react';
import { motion } from 'framer-motion';

const features = [
    'Native iOS and Android solutions',
    'Cross-platform apps with Flutter and React Native',
    'App testing, deployment, and maintenance',
    'Desktop, Web, and Mobile development',
    'Agile and DevOps-driven development lifecycle',
    'API integrations and microservices architecture',
];

const devTypes = [
    {
        title: 'Web Development',
        desc: 'Modern, scalable, and secure web applications tailored to your business needs.',
        icon: (
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 0l9 9m0 0l9-9" /></svg>
        ),
    },
    {
        title: 'Mobile Development',
        desc: 'Native and cross-platform mobile apps for iOS and Android.',
        icon: (
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M8 6h8M8 10h8M8 14h8M8 18h8" /></svg>
        ),
    },
    {
        title: 'Native Apps',
        desc: 'High-performance native apps for iOS and Android devices.',
        icon: (
            <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg>
        ),
    },
    {
        title: 'iOS Development',
        desc: 'Custom iOS solutions using Swift and modern Apple technologies.',
        icon: (
            <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M12 18h.01" /></svg>
        ),
    },
    {
        title: 'Flutter',
        desc: 'Beautiful, natively compiled apps for mobile, web, and desktop from a single codebase.',
        icon: (
            <svg className="w-10 h-10 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z" /><path d="M14.06 6.19l3.75 3.75" /></svg>
        ),
    },
];

const Development = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-10 px-2 sm:px-6">
            {/* Hero Section */}
            <motion.section
                className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12 mb-12 gap-8"
                aria-label="Development Services Hero"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                {/* Text */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-700">Development Services</h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-4">
                        We deliver robust, scalable, and innovative solutions for web, mobile, and cross-platform development. Our team leverages the latest technologies to bring your ideas to life.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2 text-base sm:text-lg">
                        {features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </motion.div>
                {/* Video */}
                <motion.div
                    className="flex-1 flex justify-center items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <video
                        src="/istockphoto-2186439499-640_adpp_is.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] max-w-full h-auto object-contain drop-shadow-xl"
                    >
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
            </motion.section>

            {/* Development Types Grid */}
            <motion.section
                className="max-w-6xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-3 lg:grid-cols-5 px-2 sm:px-0"
                aria-label="Development Types"
                role="list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
            >
                {devTypes.map((type, idx) => (
                    <motion.div
                        key={type.title}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-t-4 border-green-100 hover:border-green-600 transition-transform hover:scale-[1.04] hover:shadow-xl min-h-[260px]"
                        tabIndex={0}
                        role="listitem"
                        aria-label={type.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-3">{type.icon}</div>
                        <h3 className="mb-2 text-lg sm:text-xl font-semibold text-green-700">{type.title}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">{type.desc}</p>
                    </motion.div>
                ))}
            </motion.section>
        </div>
    );
};

export default Development;









{/* <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12 mb-12 gap-8">

<div className="flex-1">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-green-700">Development Services</h1>
  <p className="text-lg sm:text-xl text-gray-700 mb-4">We deliver robust, scalable, and innovative solutions for web, mobile, and cross-platform development. Our team leverages the latest technologies to bring your ideas to life.</p>
  <ul className="list-disc pl-5 text-gray-600 space-y-2 text-base sm:text-lg">
    {features.map((f, i) => (
      <li key={i}>{f}</li>
    ))}
  </ul>
</div>
<div className="flex-1 flex justify-center items-center">
  <img
    src="/boy1-removebg-preview.png"
    alt="Development Illustration"
    className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[450px] max-w-full h-auto object-contain drop-shadow-xl"
  />
</div>
</section> */}