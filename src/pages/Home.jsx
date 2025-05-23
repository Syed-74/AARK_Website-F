import React, { useState } from 'react'
import ConsultationModal from '../components/ConsultationModal.jsx'
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {/* Hero Section */}
            <AnimatedSection>
            <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden">
                {/* Decorative SVG Wave */}
                <svg className="absolute bottom-0 left-0 w-full h-24 text-green-100" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,197.3C672,224,768,224,864,197.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                {/* Left Card */}
                <div className="relative z-10 m-6 md:ml-16 md:my-0 bg-white rounded-[40px] shadow-2xl max-w-xl w-full p-8 md:p-12 flex flex-col"
                    style={{
                        clipPath: 'polygon(0 0, 90% 0, 100% 15%, 100% 100%, 0 100%, 0 0)',
                    }}
                >
                    {/* Top right green accent */}
                    <div className="absolute -top-6 -right-6 w-32 h-16 bg-green-700 rounded-tl-[100px] rounded-br-[40px] z-[-1]"></div>
                    {/* Bottom left blue accent */}
                    {/* <div className="absolute -bottom-8 -left-8 w-40 h-16 bg-blue-500 rounded-tl-[40px] rounded-br-[40px] z-[-1] rotate-[-10deg]"></div> */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                        YOUR <span className="text-green-700">WELCOME TO </span><br /> AARK CONNECT
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-2">
                        Our vision is to be our clients' most valuable technology services partner, an industry-thought leader, and generously give back to our communities.
                    </p>
                    <p className="text-base sm:text-lg text-gray-500 mb-6">Empowering businesses and careers through technology and talent.</p>
                    <div className="flex gap-4 flex-wrap">
                        {/* <button className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold w-max hover:bg-green-800 transition text-lg sm:text-xl">
                            Apply Today
                        </button> */}
                        <button
                            className="bg-green-700 text-white px-6 py-3 rounded-md font-semibold w-max hover:bg-green-800 transition text-lg sm:text-xl"
                            onClick={() => setShowModal(true)}
                        >
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
                {/* Right Video */}
                <div className="flex-1 flex justify-center items-center md:mr-16 px-4 py-6">
                    <div className="w-full max-w-3xl aspect-video rounded-lg shadow-xl overflow-hidden">
                        <video
                            src="/videoIT.mp4"
                            title="Intro Video"
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>

                {/* <div className="flex-1 flex justify-center items-center md:mr-16 px-4 py-6">
                        <img
                            src="/boy1-removebg-preview.png"
                            alt="People"
                            className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[600px] max-w-full h-auto object-cover drop-shadow-xl"
                        />
                    </div> */}

            </section>
            </AnimatedSection>

            {/* Overview, Job Seekers, Employers Section */}
            <AnimatedSection>
            <section id="overview" className="w-full bg-gray-50 py-14 px-2 sm:px-4">
                <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0 text-center">
                    {/* <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2">What We Do</span> */}
                    {/* <h2 className="text-2xl sm:text-4xl font-bold text-green-700 mb-4">Overview</h2> */}
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-justify bg-white rounded-xl shadow p-4 sm:p-6">
                        AARK Connect is a Software Development and Consulting Company founded by proficient performers in the technical solutions and consulting optimization space. We provide on-time, on-budget and quality service to our clients and consistently meet their expectations. Our mission is to be the number one choice of companies seeking technology solutions, and to deliver, reinforce and maintain our passionate commitment to our clients'​ success.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2 px-2 sm:px-0">
                    {/* Job Seekers Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center border-t-4 border-blue-600 transition-transform hover:scale-[1.025] hover:shadow-xl">
                        <div className="mb-2 text-blue-600">
                            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </div>
                        <h3 className="mb-2 text-lg sm:text-2xl font-semibold text-blue-600">Job Seekers</h3>
                        <h4 className="mb-4 text-base sm:text-lg md:text-xl font-medium text-gray-800">Why Join AARK Connect</h4>
                        <ul className="text-gray-600 text-sm sm:text-base md:text-lg space-y-2 text-left list-disc list-inside w-full max-w-xs mx-auto">
                            <li>1:1 Career Consultation</li>
                            <li>Diverse IT Career Options</li>
                            <li>Personalized Career Growth Plans</li>
                            <li>Professional Training and Coaching</li>
                            <li>Competitive Compensation Packages</li>
                        </ul>
                    </div>
                    {/* Employers Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center border-t-4 border-purple-700 transition-transform hover:scale-[1.025] hover:shadow-xl">
                        <div className="mb-2 text-purple-700">
                            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v4a1 1 0 001 1h3m10-5v4a1 1 0 01-1 1h-3m-4 4h6m-6 4h6" /></svg>
                        </div>
                        <h3 className="mb-2 text-lg sm:text-2xl font-semibold text-purple-700">Employers</h3>
                        <h4 className="mb-4 text-base sm:text-lg md:text-xl font-medium text-gray-800">Why Partner with AARK Connect</h4>
                        <ul className="text-gray-600 text-sm sm:text-base md:text-lg space-y-2 text-left list-disc list-inside w-full max-w-xs mx-auto">
                            <li>Tailored Staffing Solutions</li>
                            <li>Swift and Efficient Hiring Processes</li>
                            <li>Industry-Savvy Recruitment Experts</li>
                            <li>Proven Excellence in Talent Acquisition</li>
                            <li>Global Network and Client Centric Focus</li>
                        </ul>
                    </div>
                </div>
            </section>
            </AnimatedSection>

            {/* How We Work Section */}
            <AnimatedSection>
            <section className="w-full bg-white py-14 px-2 sm:px-4">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    {/* <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-2">How We Work</span> */}
                    {/* <h2 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-4">Our Process</h2> */}
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6">Why Choose AARK Connect for IT Services?</p>
                </div>
                <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                        <div className="mb-3 text-green-600">
                            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 16v-4m8-4h-4m-8 0H4" /></svg>
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-2 text-green-700">Industry Expertise</h4>
                        <p className="text-gray-600 text-sm text-justify sm:text-base">Our team has in-depth experience in the IT industry, enabling us to understand your unique staffing needs and drive the success and growth of your business.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                        <div className="mb-3 text-blue-600">
                            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2M7 17v-2a4 4 0 00-4-4H1a4 4 0 00-4 4v2" /></svg>
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-2 text-blue-700">Customized Solutions.</h4>
                        <p className="text-gray-600 text-sm text-justify sm:text-base">We provide tailored staffing strategies that align with your specific requirements, ensuring a seamless and effective experience for both employers and candidates.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
                        <div className="mb-3 text-purple-700">
                            <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <h4 className="text-lg sm:text-xl font-semibold mb-2 text-purple-700">Certified Expertise.</h4>
                        <p className="text-gray-600 text-justify text-sm sm:text-base">Our team includes certified professionals with real-world engineering experience, delivering dependable and knowledgeable support.</p>
                    </div>

                </div>
            </section>
            </AnimatedSection>
            <ConsultationModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </>
    )
}

export default Home