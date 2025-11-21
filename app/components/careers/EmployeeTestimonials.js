'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function EmployeeTestimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      id: 1,
      name: 'Akash VP',
      role: 'Sr. Data Specialist',
      image: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg',
      quote: 'Collaboration & Projects',
      highlight: 'Impact Growth',
      description: 'Working at Ahana has been transformative. The collaborative environment and challenging projects have significantly accelerated my professional growth.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Lead DevOps Engineer',
      image: 'https://img.freepik.com/free-photo/portrait-woman-smiling_23-2148859449.jpg',
      quote: 'Innovation & Learning',
      highlight: 'Career Excellence',
      description: 'The culture of continuous learning and innovation at Ahana has helped me stay at the forefront of technology and deliver exceptional results.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Senior Software Architect',
      image: 'https://img.freepik.com/free-photo/portrait-businessman_23-2148859450.jpg',
      quote: 'Leadership & Mentorship',
      highlight: 'Team Success',
      description: 'Ahana provides an excellent platform for leadership development and mentoring the next generation of tech professionals.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ]

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className="relative py-8 md:py-12 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-100/30 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Employee Testimonials
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Video/Image */}
              <div className="relative h-96 md:h-auto bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover opacity-90"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Logo Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-blue-600 font-bold text-lg">ahana</span>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Quote */}
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {currentTestimonial.quote}
                  </h3>
                  <h4 className="text-3xl md:text-4xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                      {currentTestimonial.highlight}
                    </span>
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {currentTestimonial.description}
                </p>

                {/* Author Info */}
                <div className="mb-6">
                  <h5 className="text-xl font-bold text-gray-900">
                    {currentTestimonial.name}
                  </h5>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>

                {/* Watch Full Story Button */}
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300">
                  <span>Watch Our Full Story</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
