'use client'
import Image from 'next/image'

export default function Ecosystem() {
  // Top row logos (moving right)
  const topRowLogos = [
    { name: 'VMware', src: '/logos/VMware.webp' },
    { name: 'Zoho', src: '/logos/Zoho.webp' },
    { name: 'Zscaler', src: '/logos/Zscaler.webp' },
    { name: 'Arctera', src: '/logos/Arctera.webp' },
  ]

  // Bottom row logos (moving left)
  const bottomRowLogos = [
    { name: 'Microsoft', src: '/logos/Microsoft.webp' },
    { name: 'Oracle', src: '/logos/Oracle.webp' },
    { name: 'Palo Alto', src: '/logos/Paloalto.webp' },
    { name: 'UiPath', src: '/logos/Resolve.webp' },
  ]

  // Duplicate logos for seamless loop
  const duplicatedTopRow = [...topRowLogos, ...topRowLogos, ...topRowLogos]
  const duplicatedBottomRow = [...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-tl from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-sm md:text-base text-gray-700 font-semibold tracking-wide uppercase">
              Technology Partners
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-900 mb-6">
            Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Global partnerships that support co-creation, co-development of solutions and enable us to enhance our service offerings.
          </p>
        </div>

        {/* Top Row - Moving Right */}
        <div className="relative mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Logos Container */}
          <div className="flex overflow-hidden py-4">
            <div className="flex animate-scroll-right">
              {duplicatedTopRow.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center group"
                  style={{ width: '220px', height: '110px' }}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-glow-md transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={150}
                      height={60}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Moving Left */}
        <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {/* Enhanced Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Logos Container */}
          <div className="flex overflow-hidden py-4">
            <div className="flex animate-scroll-left">
              {duplicatedBottomRow.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center group"
                  style={{ width: '220px', height: '110px' }}
                >
                  <div className="relative bg-white/90 backdrop-blur-sm border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-glow-md transition-all duration-500 hover:border-cyan-200 hover:-translate-y-2 w-full h-full flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={150}
                      height={60}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
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

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 8s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 8s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
