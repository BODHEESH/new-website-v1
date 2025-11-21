'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SuccessStories() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stories = [
    {
      id: 1,
      title: "Ahana's High Availability PostgreSQL Deployment for Leading HealthCare",
      description: 'Transforming healthcare data management with enterprise-grade PostgreSQL solutions that ensure 99.9% uptime and seamless patient data access.',
      image: 'https://img.freepik.com/free-photo/healthcare-medical-concept-healthcare-workers-protecting-patient-data-digital-medical-reports-created-by-doctors-nurses-staff-healthcare-settings_53876-124683.jpg',
      link: '/insights/case-studies',
      tag: 'Healthcare & PostgreSQL'
    },
    {
      id: 2,
      title: 'Ahana Implemented Mainframe Automation to Reduce Costs',
      description: 'Revolutionary mainframe automation solutions that slashed operational costs by 60% while maintaining critical legacy system functionality.',
      image: 'https://img.freepik.com/free-photo/businessman-using-tablet-computer-with-digital-layer-icons-technology_53876-124667.jpg',
      link: '/insights/case-studies',
      tag: 'Mainframe Automation'
    },
    {
      id: 3,
      title: "From Delays to Efficiency: How Ahana Streamlined Data Management for a Leading Insurance Company's New Product",
      description: 'Accelerated product launch timelines by 75% through intelligent data management and automated workflows for insurance data processing.',
      image: 'https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg',
      link: '/insights/case-studies',
      tag: 'Insurance & Data Management'
    }
  ]

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Link
              key={story.id}
              href={story.link}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-2 border-gray-100 hover:border-blue-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{transitionDelay: `${200 + index * 150}ms`}}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-blue-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                  {story.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {story.description}
                </p>

                {/* Read More Link */}
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore Success Story</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
