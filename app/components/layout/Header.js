'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAVIGATION } from '../../utils/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ahana-logo/Ahana-logo-1.svg"
              alt="Ahana - Creating possibilities"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAVIGATION.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition font-medium text-sm flex items-center"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Us Button */}
          <div className="hidden lg:flex items-center">
            <button className="group relative bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-500 shadow-md text-sm font-medium inline-flex items-center gap-2 overflow-hidden hover:scale-105">
              {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
              <span className="relative z-10 bg-white rounded-full p-1 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <svg className="w-2.5 h-2.5 text-blue-600 transform rotate-180 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              
              <span className="relative z-10 group-hover:-translate-x-1 transition-transform duration-500">Contact Us</span>
              
              {/* Arrow on Right (visible initially pointing right, hides on hover) */}
              <span className="relative z-10 bg-white rounded-full p-1 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-6 transition-all duration-500">
                <svg className="w-2.5 h-2.5 text-blue-600 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {NAVIGATION.main.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition py-1"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="group relative bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-500 shadow-md mt-4 inline-flex items-center gap-2 overflow-hidden hover:scale-105">
                {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
                <span className="relative z-10 bg-white rounded-full p-1 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <svg className="w-2.5 h-2.5 text-blue-600 transform rotate-180 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                
                <span className="relative z-10 group-hover:-translate-x-1 transition-transform duration-500">Contact Us</span>
                
                {/* Arrow on Right (visible initially pointing right, hides on hover) */}
                <span className="relative z-10 bg-white rounded-full p-1 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-6 transition-all duration-500">
                  <svg className="w-2.5 h-2.5 text-blue-600 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
