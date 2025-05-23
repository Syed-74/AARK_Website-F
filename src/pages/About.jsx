import React from 'react'
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  return (
    <AnimatedSection>
    <section className="w-full bg-gradient-to-b from-gray-50 to-white min-h-[80vh] py-24 px-2 sm:px-4 sm:mb-4 ">
      <div className=" w-auto mx-auto text-center mb-16 px-2">
        <span className="inline-block bg-purple-100 text-green-700 px-5 py-4 rounded-full text-xl  font-semibold mb-4 tracking-wide text-center w-full">
          About Us
        </span>

        {/* <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-6 leading-tight">About AARK Connect</h1> */}
        <p className="text-gray-700 text-lg sm:text-2xl leading-relaxed p-2 text-justify max-w-6xl mx-auto">
          AARK Connect is a leading IT support and services company committed to delivering agile, efficient, and secure technology solutions to businesses of all sizes. Headquartered in India, we specialize in offering end-to-end managed IT services, technical support, cloud solutions, cybersecurity, and digital infrastructure management.
          With a team of certified IT professionals, we help organizations overcome complex tech challenges, optimize operations, and stay ahead in today's rapidly evolving digital environment.

          {/* AARK Connect is dedicated to delivering innovative technology solutions and consulting services. Our team of experts is passionate about helping businesses grow, optimize, and succeed in a rapidly changing digital world. We believe in building lasting partnerships and making a positive impact for our clients and communities. */}
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 mb-20 px-2">
        {/* Mission */}
        <AnimatedSection>
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-t-4 border-green-600 transition-transform hover:scale-[1.03] hover:shadow-2xl">
          <div className="mb-4 text-green-600">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-green-700">Our Mission</h3>
          <p className="text-gray-600 text-lg text-justify mb-2">
            AARK Connect is a software development and consulting firm dedicated to delivering high-quality, on-time, and cost-effective technology solutions. We closely collaborate with client decision-makers to understand their needs and match them with the right talent for lasting success.
          </p>  
          <p className="text-gray-600 text-lg text-justify">
            We work closely with our client's management and decision-makers that are responsible for keeping their company healthy and profitable. Understanding clients allows us to best match their company with prospective candidates in a timely and accurate manner.
          </p>
        </div>
        </AnimatedSection>
        {/* Services */}
        <AnimatedSection>
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-t-4 border-blue-600 transition-transform hover:scale-[1.03] hover:shadow-2xl">
          <div className="mb-4 text-blue-600">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6 0v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v2m6 0a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-blue-700">Exceptional IT Talent and Services</h3>
          <p className="text-gray-600 text-lg text-justify">
            We deliver qualified consultants and project managers for both contract and ongoing requirements across all science and technology disciplines. Our mission is to offer our clients a best in class suite of professional services and to provide the most qualified candidates for our client's critical staffing needs. We strive to build a close partnership with each client and to provide quality, cost effective staffing solutions for all IT needs of our clients through personalized attention, flexibility, reliable service and innovative solutions.
          </p>
        </div>
        </AnimatedSection>
        {/* Core Values */}
        <AnimatedSection>
        <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center text-center border-t-4 border-purple-700 transition-transform hover:scale-[1.03] hover:shadow-2xl">
          <div className="mb-4 text-purple-700">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1m4 0h-1v4h-1" /></svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-purple-700">Our Core Values</h3>
          <p className="text-gray-600 text-lg text-justify mb-2">
            We specialize in streamlining hiring process, connecting you with the IT professionals your business needs, providing seamless placement services to ensure long-term success.
          </p>
          <ul className="text-gray-600 text-left list-disc list-inside space-y-1 text-base">
            <li>Rapid Hiring Process</li>
            <li>Industry-Expert Recruiters</li>
            <li>Continuous Learning and Adaptation</li>
            <li>Career Consultation</li>
            <li>Community Engagement</li>
          </ul>
        </div>
        </AnimatedSection>
      </div>

      {/* Why Choose Us Section */}
      <AnimatedSection>
      <div className="max-w-6xl mx-auto mb-20 px-2">
        {/* <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-4 tracking-wide">Why Choose Us</span> */}
        {/* <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-10 text-center">Why AARK Connect?</h2> */}
        <div className="grid gap-8 md:grid-cols-4">
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center text-center border-t-4 border-green-600">
            <div className="mb-3 text-green-600">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-green-700">Industry Expertise</h4>
            <p className="text-gray-600 text-sm">Deep knowledge of the IT industry and a proven ability to deliver results.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center text-center border-t-4 border-blue-600">
            <div className="mb-3 text-blue-600">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M7 17v-2a4 4 0 00-4-4H1a4 4 0 00-4 4v2" /></svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-blue-700">Customized Solutions</h4>
            <p className="text-gray-600 text-sm">Tailored staffing and consulting solutions for every client and candidate.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center text-center border-t-4 border-purple-700">
            <div className="mb-3 text-purple-700">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-purple-700">Proven Track Record</h4>
            <p className="text-gray-600 text-sm">A history of successful placements and satisfied clients.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center text-center border-t-4 border-yellow-500">
            <div className="mb-3 text-yellow-500">
              <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" /><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /></svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-yellow-600">Global Network</h4>
            <p className="text-gray-600 text-sm">Access to a wide network of IT professionals and opportunities worldwide.</p>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
    </AnimatedSection>
  )
}

export default About