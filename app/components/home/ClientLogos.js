'use client'
import Image from 'next/image'

export default function ClientLogos() {
  const logos = [
    { name: 'ICICI Prudential', src: '/images/Ahana Client Logos_TransaparentBG/ICICI Prudential Life Insurance.png' },
    { name: 'JK Tyres', src: '/images/Ahana Client Logos_TransaparentBG/JK Tyres.png' },
    { name: 'CheQ', src: '/images/Ahana Client Logos_TransaparentBG/CheQ.png' },
    { name: 'Raychem', src: '/images/Ahana Client Logos_TransaparentBG/Raychem.png' },
    { name: 'KBL', src: '/images/Ahana Client Logos_TransaparentBG/KBL.png' },
    { name: 'Ferro Alloys', src: '/images/Ahana Client Logos_TransaparentBG/Ferro alloys.png' },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-purple-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <p className="text-sm md:text-base text-gray-700 font-semibold tracking-wide uppercase">
              Trusted By Industry Leaders
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 mb-6">
            Our Clients
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            We thrive by putting our clients and their success at the heart of everything we do.
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10" />

          {/* Logos Container */}
          <div className="flex overflow-hidden py-4">
            <div className="flex animate-scroll-left">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
                  style={{ width: '200px', height: '100px' }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-glow-md transition-all duration-500 border border-gray-100 hover:border-cyan-200 hover:-translate-y-2 w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={180}
                      height={80}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Browse Link */}
        <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <a
            href="/case-studies"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-glow-lg transition-all duration-500 text-base lg:text-lg font-semibold overflow-hidden"
          >
            <span className="relative z-10">Browse Client Success Stories</span>
            <span className="relative z-10 bg-white rounded-full p-2 group-hover:translate-x-1 transition-transform duration-300">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 15s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
