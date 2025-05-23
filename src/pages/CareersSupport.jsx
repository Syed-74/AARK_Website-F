import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserGraduate, FaRegLightbulb, FaHandshake, FaChalkboardTeacher,
  FaCheckCircle, FaUserFriends, FaLinkedin, FaComments, FaNetworkWired
} from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6
    }
  })
};

const CareersSupport = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-green-700 to-green-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text */}
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left z-10"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Launch Your <span className="text-yellow-300">Tech Career</span> with Confidence
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-justify max-w-2xl mx-auto md:mx-0">
              Get personalized support, resume building, and expert coaching from AARK Connect’s Career Support team — empowering your journey into tech with real-world tools and industry mentorship.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition">Join Now</button>
              <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-green-700 transition">Learn More</button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <video
                src="/5725960-uhd_3840_2160_30fps.mp4" // Replace with your video path
                autoPlay
                muted
                loop
                playsInline
                className="rounded-3xl shadow-2xl w-full max-w-xs md:max-w-md h-56 object-cover border-4 border-white"
              />
              <div className="absolute -top-4 -left-4 bg-white text-green-700 px-3 py-1 text-sm rounded-full font-semibold shadow">
                Career Ready
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* What Career Support Has to Offer */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-8 flex items-center gap-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <FaRegLightbulb className="text-yellow-500" /> What Career Support Has to Offer
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {[
            {
              icon: <FaCheckCircle className="text-blue-600 text-2xl" />, title: "Optimize Your Resume. Build Your Brand",
              desc: "Build a toolset for the job hunt after AARK Connect. Our Career Support team helps craft standout resumes, social media branding, and a strong portfolio."
            },
            {
              icon: <FaComments className="text-green-600 text-2xl" />, title: "Career Advice and Interview Prep",
              desc: "Practice interviews and learn pro tips so you’re ready when opportunity knocks."
            },
            {
              icon: <FaNetworkWired className="text-purple-600 text-2xl" />, title: "Employer Networking",
              desc: "Continue the journey with job fairs, assistance, and events to meet tech employers."
            },
            {
              icon: <FaUserFriends className="text-pink-600 text-2xl" />, title: "Career Support",
              desc: "Get individualized help, mentorship, and guidance on LinkedIn and job fairs."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col gap-3"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 mb-1">
                {item.icon}
                <span className="font-semibold text-lg text-gray-800">{item.title}</span>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why AARK Connect */}
      <div className="max-w-6xl mx-auto mt-20 px-4">
        <motion.h2
          className="text-3xl font-bold text-green-700 mb-6 flex items-center gap-3"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <FaChalkboardTeacher className="text-blue-500" /> Why AARK Connect
        </motion.h2>
        <motion.p
          className="text-gray-800 text-lg mb-10"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          custom={1.1}
        >
          Your AARK Connect journey doesn't stop at graduation. Our dedicated team stays with you to provide guidance and resources so you can reach your career goals.
        </motion.p>

        <motion.h3
          className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <FaUserGraduate className="text-green-500" /> What You Get
        </motion.h3>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {[
            { icon: <FaHandshake className="text-blue-600" />, text: "One-on-one support" },
            { icon: <FaChalkboardTeacher className="text-purple-600" />, text: "Access to mentors and instructors" },
            { icon: <FaRegLightbulb className="text-yellow-500" />, text: "Job negotiation & interview prep" },
            { icon: <FaLinkedin className="text-blue-700" />, text: "LinkedIn best practices training" },
            { icon: <FaNetworkWired className="text-green-600" />, text: "On-going access to hiring & networking" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 bg-white rounded-lg shadow p-4"
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              {item.icon}
              <span className="text-gray-700 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareersSupport;