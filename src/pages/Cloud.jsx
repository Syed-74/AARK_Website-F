import React, { Suspense, lazy } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const features = [
  { icon: '☁️', title: 'Scalability', desc: 'Easily scale resources up or down to meet your business needs.' },
  { icon: '🔒', title: 'Security', desc: 'Advanced security protocols keep your data safe and compliant.' },
  { icon: '💸', title: 'Cost Savings', desc: 'Pay only for what you use, reducing infrastructure costs.' },
  { icon: '🤝', title: 'Collaboration', desc: 'Enable seamless teamwork from anywhere in the world.' },
  { icon: '⚡', title: 'Performance', desc: 'High-speed access and minimal downtime for your applications.' },
  { icon: '🔄', title: 'Automatic Updates', desc: 'Stay current with the latest features and security patches.' },
];

const useCases = [
  { title: 'Remote Work', desc: 'Empower your team to work securely from anywhere with cloud-based tools.' },
  { title: 'Data Backup', desc: 'Protect your business with reliable, automated cloud backups.' },
  { title: 'App Hosting', desc: 'Deploy and manage web or mobile applications with ease.' },
];

const FeatureCard = lazy(() => import('../components/FeatureCard'));
const UseCaseCard = lazy(() => import('../components/UseCaseCard'));

const Cloud = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-10  pb-10">

      {/* Hero Section with Image and Text */}
      <div className="w-full">
        <div className="flex flex-col-reverse md:flex-row items-stretch h-auto md:min-h-[60vh]">

          {/* Right Text */}
          <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 bg-white text-center md:text-left">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                Empower Your Business with Cloud
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Scale seamlessly, boost collaboration, and reduce costs with modern cloud solutions tailored to your needs.
              </p>
            </div>
          </div>

          {/* Left Image */}
          <div className="relative w-full md:w-1/2 h-[250px] md:h-auto">
            <img
              src="/Cloud-Computing-Basics.jpg"
              alt="Cloud Banner"
              className="w-full h-full object-cover"
            />
            {/* Optional Overlay */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}
          </div>
        </div>
      </div>


      {/* Features Section */}
      <AnimatedSection className="max-w-6xl mx-auto py-16 px-4 sm:px-6 mb-8">
        <h2 className="text-center text-3xl font-semibold mb-10 text-gray-800">Why Choose the Cloud?</h2>
        <Suspense fallback={<p className="text-center">Loading features...</p>}>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </Suspense>
      </AnimatedSection>

      {/* Use Cases Section */}
      <AnimatedSection className="max-w-5xl mx-auto py-10 px-4 sm:px-6 mb-8">
        <h2 className="text-center text-2xl font-semibold mb-8 text-indigo-700">Popular Use Cases</h2>
        <Suspense fallback={<p className="text-center">Loading use cases...</p>}>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {useCases.map((u, i) => (
              <UseCaseCard key={i} title={u.title} desc={u.desc} />
            ))}
          </div>
        </Suspense>
      </AnimatedSection>

      {/* Testimonial Section */}
      <AnimatedSection className="bg-blue-100 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-xl italic text-gray-700 mb-4">
            "Migrating to the cloud streamlined our operations and gave us the flexibility to grow faster than ever."
          </blockquote>
          <div className="font-semibold text-blue-600">— CTO, NextGen Tech</div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Cloud;
