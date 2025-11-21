'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeatureInsights() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredPost = {
    title: 'RPA trends for 2021: A look at how end-to-end process automation will transform the Indian BFSI sector',
    description: 'Explore the transformative power of RPA in reshaping the banking, financial services, and insurance landscape across India.',
    image: 'https://img.freepik.com/free-photo/financial-technology-concept-with-icons_53876-120621.jpg',
    link: '/insights/blogs',
    date: 'Featured This Month'
  }

  const popularBlogs = [
    {
      id: 1,
      title: 'Achieving Operational Excellence with RPA and Intelligent Automation: Essential Metrics and KPIs to Track',
      description: 'Discover the key performance indicators and metrics that drive successful RPA implementation and operational excellence.',
      image: 'https://img.freepik.com/free-photo/business-performance-concept-with-icons_53876-120622.jpg',
      link: '/insights/blogs',
      date: 'February 19, 2025'
    },
    {
      id: 2,
      title: 'How effective is RPA for a Business?',
      description: 'Understanding the business impact and ROI of Robotic Process Automation across different industry verticals.',
      image: 'https://img.freepik.com/free-photo/business-growth-concept-with-icons_53876-120623.jpg',
      link: '/insights/blogs',
      date: 'January 7, 2021'
    }
  ]

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Feature Insights
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured This Month */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Featured This Month
            </h3>
            
            <Link
              href={featuredPost.link}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border-2 border-gray-100 hover:border-blue-200 block"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold rounded-full shadow-lg">
                  ⭐ Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                  {featuredPost.title}
                </h4>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {featuredPost.description}
                </p>

                {/* Read More Link */}
                <div className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </div>

          {/* Popular Blogs */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Popular Blogs
            </h3>
            
            <div className="space-y-6">
              {popularBlogs.map((blog, index) => (
                <Link
                  key={blog.id}
                  href={blog.link}
                  className="group flex gap-4 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200 p-4"
                >
                  {/* Image */}
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-500 line-clamp-2">
                      {blog.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-2">
                      {blog.description}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      {blog.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-8">
              <Link
                href="/insights/blogs"
                className="group inline-flex items-center gap-3 text-blue-600 font-semibold hover:gap-5 transition-all duration-300"
              >
                <span>View All Blogs</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
