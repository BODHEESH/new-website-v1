'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CareersHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    { id: 1, image: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg', position: 'top-10 left-10' },
    { id: 2, image: 'https://img.freepik.com/free-photo/portrait-woman-smiling_23-2148859449.jpg', position: 'top-10 right-20' },
    { id: 3, image: 'https://img.freepik.com/free-photo/portrait-businessman_23-2148859450.jpg', position: 'top-32 right-10' },
    { id: 4, image: 'https://img.freepik.com/free-photo/portrait-businesswoman_23-2148859451.jpg', position: 'bottom-32 left-20' },
    { id: 5, image: 'https://img.freepik.com/free-photo/portrait-man_23-2148859452.jpg', position: 'bottom-10 left-10' },
    { id: 6, image: 'https://img.freepik.com/free-photo/portrait-woman_23-2148859453.jpg', position: 'bottom-10 right-10' },
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Floating Team Member Avatars */}
      <div className="absolute inset-0 hidden lg:block">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`absolute ${member.position} animate-float`}
            style={{animationDelay: `${index * 0.5}s`}}
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-110 transition-transform duration-300">
              <Image
                src={member.image}
                alt="Team member"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Driven by Innovation,
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-8">
            Powered by You
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            At Ahana, we believe in empowering our people to drive innovation and create meaningful impact. Join a team that values creativity, collaboration, and continuous growth.
          </p>

          {/* Search Bar */}
          <div className={`max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for jobs..."
                className="w-full px-6 py-4 pl-14 bg-white border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-blue-300 shadow-lg"
              />
              <svg className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
