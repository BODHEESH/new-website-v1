'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function WhyAhanaCareer() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({
    employees: 0,
    projects: 0,
    countries: 0,
    satisfaction: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    // Start counter animation after component becomes visible
    const timer = setTimeout(() => {
      animateCounter('employees', 650)
      animateCounter('projects', 20)
      animateCounter('countries', 25)
      animateCounter('satisfaction', 500)
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
      value: counters.employees,
      suffix: '+',
      label: 'Employees',
      description: 'Talented professionals driving innovation'
    },
    {
      id: 2,
      value: counters.projects,
      suffix: '+',
      label: 'Tech Experts',
      description: 'Specialized in cutting-edge technologies'
    },
    {
      id: 3,
      value: counters.countries,
      suffix: 'K+',
      label: 'Hours of Skill and Career Development',
      description: 'Continuous learning and growth opportunities'
    },
    {
      id: 4,
      value: counters.satisfaction,
      suffix: '+',
      label: 'Projects Delivered Successfully',
      description: 'Delivering excellence across industries'
    }
  ]

  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`group relative overflow-hidden rounded-3xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{transitionDelay: `${200 + index * 150}ms`}}
              >
                {/* Main Card with Glassmorphism */}
                <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover:shadow-purple-500/10">
                  {/* Gradient Background Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-indigo-50/30 to-cyan-50/40 rounded-3xl group-hover:from-blue-100/50 group-hover:via-indigo-100/40 group-hover:to-cyan-100/50 transition-all duration-700" />
                  
                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Value with Modern Typography */}
                    <div className="mb-4">
                      <h3 className="text-4xl md:text-5xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-700">
                        {stat.value}{stat.suffix}
                      </h3>
                    </div>

                    {/* Label */}
                    <div className="mb-4">
                      <h4 className="text-sm md:text-base text-gray-700 leading-relaxed font-medium group-hover:text-gray-900 transition-colors duration-500">
                        {stat.label}
                      </h4>
                      
                      {/* Gradient Underline */}
                      <div className="relative mt-3">
                        <div className="h-1 w-16 bg-gradient-to-r from-red-400 via-purple-500 to-blue-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Team Images */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://img.freepik.com/free-photo/diverse-people-working-office_23-2149341549.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg"
                    alt="Team meeting"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://img.freepik.com/free-photo/colleagues-working-together-project_23-2149341548.jpg"
                    alt="Team working"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377171.jpg"
                    alt="Team analysis"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
