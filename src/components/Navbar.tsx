'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 lg:space-x-3">
              <div className="relative w-18 h-18 sm:w-24 sm:h-24 lg:w-30 lg:h-30">
                <Image
                  src="/logo.png"
                  alt="HTC Hanuman Construction Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 px-2 xl:px-3 py-2 text-sm xl:text-base font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 ml-4 pl-4 border-l border-gray-200">
            <a
              href="tel:+919876543210"
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm xl:text-base">+91 9876543210</span>
            </a>
            <a
              href="mailto:constructionhanuman99@gmail.com"
              className="flex items-center text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span className="text-sm xl:text-base hidden xl:inline">Email Us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <a
                href="tel:+919876543210"
                className="flex items-center text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md hover:bg-gray-50"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:constructionhanuman99@gmail.com"
                className="flex items-center text-gray-600 hover:text-orange-600 px-3 py-2 rounded-md hover:bg-gray-50"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">constructionhanuman99@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
