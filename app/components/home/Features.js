'use client'
import Image from 'next/image'

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Process Discovery',
      description: 'Identify and analyze business processes to find automation opportunities'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapid Development',
      description: 'Build automation workflows quickly with intuitive drag-and-drop interface'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: 'Seamless Integration',
      description: 'Connect with your existing tools and systems effortlessly'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics & Insights',
      description: 'Track performance and ROI with comprehensive dashboards'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Why Choose Our Workshop?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Learn from industry experts and gain hands-on experience with the world's leading automation platform
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="text-blue-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                I am an enterprise robot
              </h3>
              <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
                Discover how enterprise-grade automation can transform your business operations and drive unprecedented efficiency.
              </p>
              <button className="group relative bg-white text-blue-600 px-6 md:px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-500 font-semibold shadow-lg inline-flex items-center gap-3 overflow-hidden hover:scale-105">
                {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
                <span className="relative z-10 bg-blue-600 rounded-full p-1.5 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <svg className="w-3 h-3 text-white transform rotate-180 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                
                <span className="relative z-10 group-hover:-translate-x-2 transition-transform duration-500">Learn More</span>
                
                {/* Arrow on Right (visible initially pointing right, hides on hover) */}
                <span className="relative z-10 bg-blue-600 rounded-full p-1.5 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-8 transition-all duration-500">
                  <svg className="w-3 h-3 text-white transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?t=st=1763636797~exp=1763640397~hmac=9dc4518d3950b106bb3b26217a5c6e826d348b62e061437246a7d234141f59f1&w=1480"
                alt="Enterprise automation"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
