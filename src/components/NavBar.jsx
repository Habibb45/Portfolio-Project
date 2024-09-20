import React, { useState } from 'react'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-2xl font-bold">
          Portfolio Website
        </a>

        {/* Menu for large screens */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>

          {/* Sign In / Sign Up Buttons */}
          <div className="flex space-x-2 ml-4"></div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-4 py-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-4 py-2"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-4 py-2"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-gray-300 hover:text-white px-4 py-2"
          >
            Contact
          </a>
          <div className="flex flex-col space-y-2 mt-2"></div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
