'use client'

export default function DataAtCore() {
  const services = [
    {
      id: 1,
      title: 'Data & Analytics Advisory',
      description: 'Realize the full potential of your data with expert guidance for strategic, impactful decisions.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pie Chart */}
          <rect x="12" y="12" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Circle with segment */}
          <circle cx="40" cy="28" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 40 28 L 40 16 A 12 12 0 0 1 48 22 Z" fill="currentColor" opacity="0.3" />
          <path d="M 40 28 L 48 22 A 12 12 0 0 1 50 32 Z" fill="currentColor" opacity="0.5" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Data Modernization',
      description: 'Upgrade legacy systems to modern, scalable, and high-performing data architecture.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Database */}
          <ellipse cx="28" cy="20" rx="10" ry="4" stroke="currentColor" strokeWidth="2" />
          <path d="M 18 20 L 18 32 Q 18 36 28 36 Q 38 36 38 32 L 38 20" stroke="currentColor" strokeWidth="2" fill="none" />
          <ellipse cx="28" cy="26" rx="10" ry="4" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="28" cy="32" rx="10" ry="4" stroke="currentColor" strokeWidth="2" />
          {/* Gear */}
          <circle cx="44" cy="36" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="44" cy="36" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 44 28 L 44 30 M 44 42 L 44 44 M 36 36 L 38 36 M 50 36 L 52 36" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Data Management',
      description: 'Manage, organize, and transform data into real-time insights for smarter decisions.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Network nodes */}
          <circle cx="32" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="20" cy="40" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="44" cy="40" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="32" cy="48" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
          {/* Connecting lines */}
          <line x1="32" y1="30" x2="26" y2="34" stroke="currentColor" strokeWidth="2" />
          <line x1="32" y1="30" x2="38" y2="34" stroke="currentColor" strokeWidth="2" />
          <line x1="26" y1="40" x2="26" y2="42" stroke="currentColor" strokeWidth="2" />
          <line x1="38" y1="40" x2="32" y2="42" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Data Governance',
      description: 'Ensure data integrity, security, and compliance with robust governance frameworks.',
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Document */}
          <rect x="20" y="16" width="18" height="24" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="24" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="27" x2="34" y2="27" stroke="currentColor" strokeWidth="2" />
          <line x1="24" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="2" />
          {/* Shield */}
          <path d="M 42 20 L 42 28 Q 42 36 50 38 Q 58 36 58 28 L 58 20 L 50 18 Z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M 48 28 L 50 30 L 54 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-purple-50/50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <p className="text-sm md:text-base text-gray-700 font-semibold tracking-wide uppercase">
              Data At The Core
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
            Raw data to real impact
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-glow-md transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-3 border border-gray-100 hover:border-cyan-200 animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Icon */}
              <div className="relative z-10 text-cyan-500 mb-6 group-hover:text-blue-600 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>
              
              {/* Title - Always visible */}
              <h3 className="relative z-10 text-lg md:text-xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-all duration-500">
                {service.title}
              </h3>
              
              {/* Description Box - Appears on hover */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-95 group-hover:scale-100 z-20">
                <div className="bg-gradient-to-br from-white via-cyan-50/80 to-blue-50/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-cyan-200">
                  <h4 className="text-base md:text-lg font-bold text-cyan-600 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
