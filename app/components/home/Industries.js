'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Industries() {
  const [hoveredId, setHoveredId] = useState(null)

  const industries = [
    {
      id: 1,
      name: 'Banking & Finance',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="36" width="32" height="4" fill="currentColor" />
          <rect x="16" y="44" width="32" height="6" fill="currentColor" />
          <path d="M32 12 L48 24 L16 24 Z" fill="currentColor" />
          <rect x="20" y="24" width="4" height="12" fill="currentColor" />
          <rect x="28" y="24" width="4" height="12" fill="currentColor" />
          <rect x="36" y="24" width="4" height="12" fill="currentColor" />
          <rect x="44" y="24" width="4" height="12" fill="currentColor" />
        </svg>
      ),
      link: '/industries/banking-finance'
    },
    {
      id: 2,
      name: 'Logistics',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="20" width="24" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="16" y="24" width="6" height="6" fill="currentColor" />
          <rect x="26" y="24" width="6" height="6" fill="currentColor" />
          <rect x="16" y="32" width="6" height="6" fill="currentColor" />
          <rect x="26" y="32" width="6" height="6" fill="currentColor" />
          <path d="M36 28 L52 28 L52 40 L36 40 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="42" cy="44" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="30" cy="44" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      link: '/industries/logistics'
    },
    {
      id: 3,
      name: 'Manufacturing',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="24" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="32" cy="24" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M32 16 L32 12 M32 32 L32 36 M24 24 L20 24 M40 24 L44 24" stroke="currentColor" strokeWidth="2" />
          <path d="M26 18 L23 15 M38 18 L41 15 M26 30 L23 33 M38 30 L41 33" stroke="currentColor" strokeWidth="2" />
          <rect x="16" y="40" width="32" height="8" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      link: '/industries/manufacturing'
    },
    {
      id: 4,
      name: 'Insurance',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 12 L20 18 L20 28 C20 36 26 42 32 44 C38 42 44 36 44 28 L44 18 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M28 28 L30 30 L36 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="24" cy="38" r="3" fill="currentColor" />
          <circle cx="32" cy="42" r="3" fill="currentColor" />
          <circle cx="40" cy="38" r="3" fill="currentColor" />
        </svg>
      ),
      link: '/industries/insurance'
    },
    {
      id: 5,
      name: 'Automobile',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 32 L20 24 L28 24 L32 20 L36 24 L44 24 L48 32 L48 40 L16 40 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="24" cy="40" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="40" cy="40" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <rect x="20" y="28" width="8" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <rect x="36" y="28" width="8" height="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      ),
      link: '/industries/automobile'
    },
    {
      id: 6,
      name: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 44 L20 32 C16 28 16 22 20 18 C24 14 30 14 32 18 C34 14 40 14 44 18 C48 22 48 28 44 32 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M28 24 L36 24 M32 20 L32 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      link: '/industries/healthcare'
    }
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <p className="text-sm md:text-base text-gray-700 font-semibold tracking-wide uppercase">
                Industries We Serve
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              <span className="text-gray-900">
                Democratizing
              </span>
              <br />
              <span className="text-gray-900">
                Technologies
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600">
                across Industries
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Empowering diverse sectors with cutting-edge technology solutions tailored to drive innovation and growth.
            </p>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {industries.map((industry, index) => (
                <a
                  key={industry.id}
                  href={industry.link}
                  onMouseEnter={() => setHoveredId(industry.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-2 border-transparent hover:border-purple-200"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-purple-900/80 group-hover:via-blue-900/40 transition-all duration-500" />
                    
                    {/* Icon Overlay - Appears on Hover */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      hoveredId === industry.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="bg-white/90 backdrop-blur-md rounded-full p-6 transform scale-0 group-hover:scale-100 transition-transform duration-500 shadow-2xl border-4 border-purple-200">
                        <div className="text-purple-600">
                          {industry.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base md:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
                      {industry.name}
                    </h3>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
