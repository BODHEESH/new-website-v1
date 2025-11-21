'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TechnologyStack() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const technologies = [
    { name: 'SAP', src: '/logos/Arctera.webp' },
    { name: 'Snowflake', src: '/logos/HP.webp' },
    { name: 'Palo Alto', src: '/logos/Paloalto.webp' },
    { name: 'Presto', src: '/logos/Red-Hat.webp' },
    { name: 'Trino', src: '/logos/Veeam.webp' },
    { name: 'Ahana', src: '/logos/Zoho.webp' },
  ]

  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies, ...technologies]

  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-100/30 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Technology Stack
          </h2>
        </div>

        {/* Scrolling Logos */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Logos Container */}
          <div className="flex overflow-hidden py-8">
            <div className="flex animate-scroll-tech">
              {duplicatedTechs.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center group"
                  style={{ width: '180px', height: '90px' }}
                >
                  <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:border-blue-200 hover:-translate-y-2 hover:scale-110 w-full h-full flex items-center justify-center">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={120}
                      height={50}
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-tech {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll-tech {
          animation: scroll-tech 20s linear infinite;
        }

        .animate-scroll-tech:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
