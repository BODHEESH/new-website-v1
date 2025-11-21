'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function WeEmpower() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: '14+', label: 'Years' },
    { number: '100+', label: 'Clients' },
    { number: '20+', label: 'Technologies' },
    { number: '10+', label: 'Services' },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-blue-200/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/30 to-purple-200/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-cyan-400" style={{ WebkitTextStroke: '2px currentColor', WebkitTextFillColor: 'transparent', paintOrder: 'stroke fill' }}>
                  We
                </span>
                <span className="text-blue-600" style={{ WebkitTextStroke: '2px currentColor', WebkitTextFillColor: 'transparent', paintOrder: 'stroke fill' }}>
                  Empower
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Building tomorrow's data solutions, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">today</span>.
              </h3>
            </div>

            {/* Description */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Innovation that transforms technology designed to break barriers and redefine possibilities. At Ahana, we build <span className="text-cyan-600 font-semibold">trailblazing</span> data solutions that drive modernization and spark curiosity.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                From cutting-edge tools to a <span className="text-cyan-600 font-semibold">culture</span> of continuous experimentation, we empower breakthroughs that shape the <span className="text-cyan-600 font-semibold">future</span>. When technology evolves, impact follows.
              </p>
            </div>

            {/* Stats Grid */}
            <div className={`grid grid-cols-2 gap-5 md:gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-cyan-300 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.number}
                  </div>
                  <div className="relative z-10 text-sm md:text-base text-purple-600 font-semibold">
                    {stat.label}
                  </div>
                  {/* Animated gradient underline */}
                  <div className="relative z-10 mt-4 h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>

          </div>

          {/* Right Content - 3 Column Image Layout */}
          <div className="relative">
            
            {/* Quote Box */}
            <div className={`mb-16 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 rounded-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <p className="text-base md:text-lg text-gray-800 italic font-medium">
                "Our mission is simple: to build technology that works as hard as you do without the complexity."
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Column 1 */}
              <div className="space-y-4">
                <div className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=400&fit=crop"
                      alt="Team collaboration"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '700ms' }}>
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=500&fit=crop"
                      alt="Team meeting"
                      width={300}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 mt-8">
                <div className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=500&fit=crop"
                      alt="Team discussion"
                      width={300}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=400&fit=crop"
                      alt="Team brainstorming"
                      width={300}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                <div className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
                  <div className="relative h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=450&fit=crop"
                      alt="Team collaboration"
                      width={300}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1100ms' }}>
                  <div className="relative h-56">
                    <Image
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=450&fit=crop"
                      alt="Team working"
                      width={300}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
