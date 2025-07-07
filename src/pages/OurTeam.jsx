import React from 'react'

const OurTeam = () => {
  return (
    <div className="max-w-6xl mx-auto mb-10 pt-20 px-2">
      <span className="block bg-purple-100 text-purple-700 px-5 py-4 rounded-full text-xl font-semibold mb-4 tracking-wide text-center w-full">
        Our Leadership
      </span>


      {/* <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-6 text-center">Our Leadership</h2> */}
      <p className="text-gray-700 text-lg sm:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-10 px-4 sm:px-0 text-justify">
        At AARK Connect, our leadership team brings together decades of experience in technology, consulting, and talent management. We foster a culture of innovation, collaboration, and client success. Meet the people who drive our vision and empower our clients and candidates every day.
      </p>


      <div className="grid gap-8 md:grid-cols-3">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-green-600">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team Member" className="w-24 h-24 rounded-full mb-3 border-4 border-green-100 object-cover" />
          <h4 className="text-2xl font-bold text-green-700 mb-1">John Doe</h4>
          <span className="text-green-600 font-medium mb-2">CEO & Founder</span>
          <p className="text-gray-600 text-base mb-3 text-justify">Visionary leader with 15+ years in IT consulting. John is passionate about building high-performing teams and delivering innovative solutions that drive client growth and satisfaction.</p>
          <div className="flex space-x-3 justify-center ">
            <a href="#" aria-label="LinkedIn" className="hover:text-green-600 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.098-.021-2.509-1.531-2.509-1.531 0-1.767 1.197-1.767 2.432v4.681h-3v-9h2.881v1.229h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v4.733z" /></svg></a>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-blue-600">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team Member" className="w-24 h-24 rounded-full mb-3 border-4 border-blue-100 object-cover" />
          <h4 className="text-2xl font-bold text-blue-700 mb-1">Priya Sharma</h4>
          <span className="text-blue-600 font-medium mb-2">Head of Talent</span>
          <p className="text-gray-600 text-base mb-3 text-justify">Priya specializes in talent acquisition and career development. She is dedicated to connecting top IT professionals with opportunities that match their skills and aspirations.</p>
          <div className="flex space-x-3 justify-center">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.098-.021-2.509-1.531-2.509-1.531 0-1.767 1.197-1.767 2.432v4.681h-3v-9h2.881v1.229h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v4.733z" /></svg></a>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-purple-700">
          <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Team Member" className="w-24 h-24 rounded-full mb-3 border-4 border-purple-100 object-cover" />
          <h4 className="text-2xl font-bold text-purple-700 mb-1">Alex Kim</h4>
          <span className="text-purple-600 font-medium mb-2">CTO</span>
          <p className="text-gray-600 text-base mb-3 text-justify">Alex leads our technology strategy and innovation. He is committed to delivering scalable solutions and driving digital transformation for our clients.</p>
          <div className="flex space-x-3 justify-center">
            <a href="#" aria-label="LinkedIn" className="hover:text-purple-700 transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.098-.021-2.509-1.531-2.509-1.531 0-1.767 1.197-1.767 2.432v4.681h-3v-9h2.881v1.229h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v4.733z" /></svg></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam