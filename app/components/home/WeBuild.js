'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function WeBuild() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const resources = [
    {
      id: 1,
      title: 'Case Studies',
      subtitle: 'Real problems. Real solutions. Real impact.',
      description: 'See how we help businesses embrace AI, automate smarter, and modernize for the future. Our success stories showcase faster workflows, smarter decisions, and real business growth.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      link: '/insights/case-studies',
      gradient: 'from-blue-900 via-blue-800 to-indigo-900',
      accentColor: 'cyan'
    },
    {
      id: 2,
      title: 'Blogs',
      subtitle: 'Expert insights, minus the jargon.',
      description: 'From AI breakthroughs to automation best practices, our thought leaders share what matters. Whether it\'s intelligent automation or enterprise transformation, we break it down so you can stay ahead.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      link: '/insights/blogs',
      gradient: 'from-indigo-900 via-purple-800 to-purple-900',
      accentColor: 'purple'
    },
    {
      id: 3,
      title: 'News & Events',
      subtitle: 'Where innovation meets action.',
      description: 'Stay updated on Ahana\'s latest innovations, events, and expert insights. From keynotes to product updates, see how we\'re shaping the future of intelligent automation and enterprise tech.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      link: '/insights/news-events',
      gradient: 'from-purple-900 via-blue-800 to-blue-900',
      accentColor: 'blue'
    }
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-md">
              {/* Animated Line */}
              <div className={`w-16 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-6 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} style={{transformOrigin: 'left'}} />
              
              {/* Title with Stagger Animation */}
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-0 leading-tight">
                <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 drop-shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  We{' '}
                </span>
                <span className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 drop-shadow-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Build
                </span>
              </h2>
            </div>
            
            {/* Description with Floating Animation */}
            <div className={`lg:max-w-xl relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Floating Decorative Element */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}} />
              
              <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-100/50 shadow-lg hover:shadow-xl transition-all duration-500">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Technology never stands still, and neither do we. By leveraging AI-driven automation, predictive analytics, and intelligent data processing, we help businesses stay ahead with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-bold hover:from-cyan-500 hover:to-blue-500 transition-all cursor-default">agility</span>, efficiency, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-bold hover:from-cyan-500 hover:to-blue-500 transition-all cursor-default">innovation</span> at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mb-12">
          <h3 className={`text-3xl md:text-4xl font-bold text-gray-900 mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our Resources
          </h3>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {resources.map((resource, index) => (
              <div
                key={resource.id}
                onMouseEnter={() => setHoveredCard(resource.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-gradient-to-br ${resource.gradient} rounded-3xl p-8 text-white hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 overflow-hidden border-2 border-${resource.accentColor}-500/20 hover:border-${resource.accentColor}-400/60 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{transitionDelay: `${500 + index * 150}ms`}}
              >
                {/* Animated Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${resource.accentColor}-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Animated Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                {/* Decorative Corner with Pulse */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-${resource.accentColor}-400/30 to-transparent rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
                
                {/* Floating Particles */}
                <div className="absolute top-10 right-10 w-2 h-2 bg-cyan-400/50 rounded-full animate-float" style={{animationDelay: '0.5s'}} />
                <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-purple-400/50 rounded-full animate-float" style={{animationDelay: '1.5s'}} />
                <div className="absolute top-1/2 right-20 w-1 h-1 bg-blue-400/50 rounded-full animate-float" style={{animationDelay: '2.5s'}} />
                
                {/* Icon with Enhanced Animation */}
                <div className={`relative z-10 mb-6 text-${resource.accentColor}-400 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 ${hoveredCard === resource.id ? 'animate-bounce' : ''}`}>
                  {resource.icon}
                </div>

                {/* Title with Gradient on Hover */}
                <h4 className={`relative z-10 text-2xl md:text-3xl font-bold mb-3 transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-${resource.accentColor}-300 group-hover:to-white`}>
                  {resource.title}
                </h4>

                {/* Subtitle with Underline Animation */}
                <div className="relative z-10 mb-5">
                  <p className={`text-${resource.accentColor}-300 font-bold text-sm md:text-base`}>
                    {resource.subtitle}
                  </p>
                  <div className={`h-0.5 bg-gradient-to-r from-${resource.accentColor}-400 to-transparent mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>

                {/* Description with Better Spacing */}
                <p className="relative z-10 text-blue-100 text-sm md:text-base leading-relaxed mb-8 group-hover:text-white transition-colors duration-500">
                  {resource.description}
                </p>

                {/* Enhanced Link Button */}
                <Link
                  href={resource.link}
                  className="relative z-10 inline-flex items-center gap-3 text-white font-bold hover:gap-5 transition-all duration-500 group/link"
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">View More</span>
                  <span className={`bg-gradient-to-r from-${resource.accentColor}-500/40 to-blue-500/40 backdrop-blur-sm rounded-full p-2.5 group-hover/link:bg-gradient-to-r group-hover/link:from-${resource.accentColor}-400/60 group-hover/link:to-blue-400/60 transition-all duration-500 border border-${resource.accentColor}-400/40 group-hover/link:border-${resource.accentColor}-300/60 group-hover/link:shadow-lg group-hover/link:scale-110`}>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>

                {/* Bottom Glow Effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${resource.accentColor}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
