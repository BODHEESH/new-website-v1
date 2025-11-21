'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function WeEvolve() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-blue-50/20 to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 via-purple-100/10 to-cyan-100/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Decorative Line with Animation */}
            <div className={`w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} />
            
            {/* Title with Staggered Animation */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className={`inline-block text-cyan-500 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                We{' '}
              </span>
              <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Evolve
              </span>
            </h2>

            {/* Subtitle with Animation */}
            <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              We're rewriting the rules of data: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">smarter, faster, future-ready.</span>
            </h3>

            {/* Description Paragraphs with Staggered Animation */}
            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                At Ahana, we tailor-build data solutions that align with your business ambitions.
              </p>
              <p className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Our team of <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">data nerds</span>, <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">cloud architects</span>, and <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">engineers</span> has spent years helping businesses realize <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">their full potential</span> across finance, healthcare, retail, and beyond. We don't just implement technology, we build IT that's simple to use, powerful, and built to last.
              </p>
              <p className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Whether it's <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">modernizing your data infrastructure</span>, <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">automating workflows</span>, or <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">making sense</span> of complex analytics, we help turn technology into a competitive advantage that moves your business forward.
              </p>
              <p className={`font-semibold text-gray-900 border-l-4 border-cyan-500 pl-4 py-2 bg-cyan-50/50 rounded-r-lg transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                Our mission is simple: to build technology that works as hard as you do without the complexity.
              </p>
            </div>

            {/* Button with Enhanced Animation */}
            <button className={`group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-glow-lg transition-all duration-500 text-base lg:text-lg font-semibold inline-flex items-center gap-3 overflow-hidden hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '800ms'}}>
              {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
              <span className="relative z-10 bg-white rounded-full p-2 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <svg className="w-4 h-4 text-blue-600 transform rotate-180 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              
              <span className="relative z-10 group-hover:-translate-x-2 transition-transform duration-500">About Us</span>
              
              {/* Arrow on Right (visible initially pointing right, hides on hover) */}
              <span className="relative z-10 bg-white rounded-full p-2 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-8 transition-all duration-500">
                <svg className="w-4 h-4 text-blue-600 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
            </button>
          </div>

          {/* Right Content */}
          <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            {/* Top Description with Background */}
            <div className={`mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border-l-4 border-cyan-500 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Modern, <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">scalable</span>, and high-performing solutions. Whether it's cloud-native <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">architectures</span>, <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">real-time analytics</span>, or seamless integrations, we create the foundation for resilient and future-proof <span className="text-cyan-600 font-bold hover:text-cyan-700 transition-colors cursor-default">digital ecosystems</span>.
              </p>
            </div>

            {/* Decorative Elements with Animation */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-2xl animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-400/30 to-pink-500/30 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />

            {/* Image with Data Modernization Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow-xl transition-all duration-700 transform hover:scale-[1.02] border-4 border-white group">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                alt="Data Analytics Dashboard"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-purple-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Floating Card with Enhanced Glassmorphism */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-glow-lg p-6 max-w-xs border-2 border-cyan-200/70 animate-float hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 animate-pulse">72%</span>
                  <span className="text-xs text-green-700 bg-gradient-to-r from-green-50 to-green-100 px-3 py-1.5 rounded-full font-bold shadow-md border border-green-200 animate-bounce">
                    +3 Week Shift
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                  Data modernized
                </p>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-3 rounded-full relative overflow-hidden" style={{ width: '72%' }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
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
