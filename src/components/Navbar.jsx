import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [dropdown, setDropdown] = useState({ services: false, programs: false })
    const navigate = useNavigate()
    const location = useLocation()

    const handleDropdown = (name) => {
        setDropdown((prev) => ({
            ...prev,
            [name]: !prev[name],
        }))
    }

    // Close mobile menu on link click
    const handleMenuClose = () => setMenuOpen(false)

    const handleNavClick = (section) => {
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: section } })
            setMenuOpen(false) // close mobile menu if open
        } else {
            scroller.scrollTo(section, {
                smooth: true,
                duration: 500,
                offset: -70,
            })
            setMenuOpen(false) // close mobile menu if open
        }
    }

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                smooth: true,
                duration: 500,
                offset: -70,
            });
        }
    }, [location]);

    return (
        <nav className="bg-white shadow-md px-2 sm:px-6 py-2 sm:py-3 sticky top-0 z-50">
            <div className="flex items-center justify-between">
                {/* Left: Logo/Image */}
                <div className="flex items-center gap-3 px-2 py-2 sm:py-3">
                    <img
                        src="/logo-removebg-preview.png"
                        alt="Logo"
                        className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-2xl bg-green-700 p-2"
                    />
                    <h1 className="text-lg sm:text-2xl font-semibold text-green-700 whitespace-nowrap">
                        AARK CONNECT
                    </h1>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
                    <button
                        onClick={() => handleNavClick('home')}
                        className="cursor-pointer text-gray-600 hover:text-blue-600 font-medium transition bg-transparent border-none"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavClick('about')}
                        className="cursor-pointer text-gray-600 hover:text-blue-600 font-medium transition bg-transparent border-none"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleNavClick('gallery')}
                        className="cursor-pointer text-gray-600 hover:text-blue-600 font-medium transition bg-transparent border-none"
                    >
                        Gallery
                    </button>
                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button
                            className="text-gray-600 hover:text-blue-600 font-medium transition flex items-center focus:outline-none"
                            onClick={() => handleDropdown('services')}
                            type="button"
                            tabIndex={0}
                        >
                            Services
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg z-10 ${dropdown.services ? '' : 'hidden'} group-hover:block`}>
                            <a href="/careers-support" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition">Careers support</a>
                            <a href="/development-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition">Development Services</a>
                            <a href="/cybersecurity-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition">Cybersecurity Services</a>
                            <a href="/AI-&-data-intelligence" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition">AI & Data Intelligence</a>
                            <a href="/UI/UX-design-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition">UI/UX Design Services</a>
                            <a href="/cloud-solutions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition">Cloud Solutions</a>
                        </div>
                    </div>
                    
                    <button
                        onClick={() => handleNavClick('Out-team')}
                        className="cursor-pointer text-gray-600 hover:text-blue-600 font-medium transition bg-transparent border-none"
                    >
                        Our Leadership
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-gray-600 hover:text-blue-600 focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Nav */}
            {menuOpen && (
                <div className="md:hidden mt-3 space-y-2 bg-white rounded-xl shadow-lg p-4 border">
                    <button
                        onClick={() => handleNavClick('home')}
                        className="block px-2 py-2 text-gray-600 hover:text-blue-600 font-medium transition rounded bg-transparent border-none w-full text-left"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavClick('about')}
                        className="block px-2 py-2 text-gray-600 hover:text-blue-600 font-medium transition rounded bg-transparent border-none w-full text-left"
                    >
                        About
                    </button>
                    <button
                        onClick={() => handleNavClick('gallery')}
                        className="block px-2 py-2 text-gray-600 hover:text-blue-600 font-medium transition rounded bg-transparent border-none w-full text-left"
                    >
                        Gallery
                    </button>
                    <button
                        onClick={() => handleNavClick('Out-team')}
                        className="block px-2 py-2 text-gray-600 hover:text-blue-600 font-medium transition rounded bg-transparent border-none w-full text-left"
                    >
                        Our Leadership
                    </button>
                    {/* Services Dropdown */}
                    <div>
                        <button
                            className="w-full flex justify-between items-center px-2 py-2 text-gray-600 hover:text-blue-600 font-medium transition rounded focus:outline-none"
                            onClick={() => handleDropdown('services')}
                            type="button"
                        >
                            Services
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {dropdown.services && (
                            <div className="pl-4">
                                 <a href="/careers-support" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 transition rounded">Careers support</a>
                                <a href="/development-services" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 transition rounded">Development Services</a>
                                <a href="/cybersecurity-services" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 transition rounded">Cybersecurity Services</a>
                                <a href="/AI-&-data-intelligence" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 transition rounded">AI & Data Intelligence</a>
                                <a href="/UI/UX-design-services" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 transition rounded">UI/UX Design Services</a>
                                <a href="/cloud-solutions" className="block px-2 py-2 text-gray-700 hover:bg-blue-50 transition rounded">Cloud Solutions</a>
                            </div>
                        )}
                    </div>
                   
                </div>
            )}
        </nav>
    )
}

export default Navbar