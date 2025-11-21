'use client'
import { useState, useEffect } from 'react'

export default function WhyAhana() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    projects: 0,
    continents: 0,
    savings: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    // Start counter animation after component becomes visible
    const timer = setTimeout(() => {
      animateCounter('projects', 52810)
      animateCounter('continents', 5)
      animateCounter('savings', 60) // for percentage
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  const animateCounter = (key, target) => {
    const duration = 2000 // 2 seconds
    const steps = 60 // 60 fps
    const increment = target / steps
    let current = 0
    let step = 0
    
    const timer = setInterval(() => {
      step++
      current += increment
      
      if (step >= steps) {
        current = target
        clearInterval(timer)
      }
      
      setCounters(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }))
    }, duration / steps)
  }

  const stats = [
    {
      id: 1,
      value: counters.projects,
      target: 52810,
      label: 'Database Objects Successfully Migrated to Postgres in Just 4 Months',
      description: 'Enterprise-scale migration completed ahead of schedule'
    },
    {
      id: 2,
      value: counters.continents,
      target: 5,
      label: 'Enterprise CDP\'s Built in 6 Months, 50+ NBFC/BFSI Apps Integrated',
      description: 'Comprehensive data platform with industry integrations'
    },
    {
      id: 3,
      value: counters.savings,
      target: 60,
      label: 'Reduction in TCO via 3rd Party Support for Sybase ASE, IQ & Replication System',
      description: 'Cost optimization through modern database solutions',
      isPercentage: true
    }
  ]

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Why Ahana?
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{transitionDelay: `${200 + index * 150}ms`}}
            >
              {/* Main Card with Glassmorphism */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:shadow-purple-500/10">
                {/* Modern Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-cyan-50/40 rounded-3xl group-hover:from-blue-100/50 group-hover:via-indigo-100/40 group-hover:to-cyan-100/50 transition-all duration-700" />
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 group-hover:from-blue-500/40 group-hover:via-purple-500/40 group-hover:to-cyan-500/40 transition-all duration-700">
                  <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-3xl" />
                </div>

                {/* Floating Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-sm animate-float" style={{animationDelay: `${index * 0.3}s`}} />
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-sm animate-float" style={{animationDelay: `${index * 0.3 + 1}s`}} />
                
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content Container */}
                <div className="relative z-10">
                  {/* Value with Modern Typography */}
                  <div className="mb-6">
                    <h3 className="text-5xl md:text-6xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-700 transform group-hover:scale-105">
                      {stat.isPercentage ? `${stat.value}%` : stat.value.toLocaleString()}
                    </h3>
                  </div>

                  {/* Label with Better Typography */}
                  <div className="mb-6">
                    <h4 className="text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-4 group-hover:text-gray-900 transition-colors duration-500">
                      {stat.label}
                    </h4>
                    
                    {/* Modern Gradient Underline */}
                    <div className="relative">
                      <div className="h-1.5 bg-gradient-to-r from-red-400 via-purple-500 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                      {/* <div className="h-1.5 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200" /> */}
                    </div>
                  </div>

                  {/* Modern Bottom Accent */}
                  <div className="flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
