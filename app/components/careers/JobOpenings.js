'use client'
import { useState, useEffect, useRef } from 'react'

export default function JobOpenings() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isLocationOpen, setIsLocationOpen] = useState(false)
  
  const categoryRef = useRef(null)
  const locationRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setIsCategoryOpen(false)
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const categories = ['All', 'Business Executive', 'Engineering']
  const locations = ['All', 'Ahmedabad', 'Bangalore', 'Chennai', 'Hubli', 'Hyderabad', 'Mumbai']

  const jobOpenings = [
    {
      id: 1,
      title: 'Openings of Senior Engineer',
      department: 'Engineering',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '5+ years',
      postedDate: '2 days ago'
    },
    {
      id: 2,
      title: 'Data Modeler',
      department: 'Engineering',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '3+ years',
      postedDate: '1 week ago'
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4+ years',
      postedDate: '3 days ago'
    },
    {
      id: 4,
      title: 'ORACLE DBA CONSULTANT 3.1.2',
      department: 'Engineering',
      location: 'Pune',
      type: 'Contract',
      experience: '6+ years',
      postedDate: '1 day ago'
    },
    {
      id: 5,
      title: 'MSSQL Specialist',
      department: 'Engineering',
      location: 'Pune',
      type: 'Full-time',
      experience: '5+ years',
      postedDate: '5 days ago'
    },
    {
      id: 6,
      title: 'SAP Engineer 3.2',
      department: 'Engineering',
      location: 'Pune',
      type: 'Full-time',
      experience: '4+ years',
      postedDate: '1 week ago'
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const categoryMatch = selectedCategory === 'All' || job.department === selectedCategory
    const locationMatch = selectedLocation === 'All' || job.location === selectedLocation
    return categoryMatch && locationMatch
  })

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-visible">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Job Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover exciting career opportunities and join our team of innovators
          </p>
        </div>

        {/* Filter Section */}
        <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-lg border border-white/30 transition-all duration-1000 delay-200 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Category Dropdown */}
            <div className="relative" ref={categoryRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Category
              </label>
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300 min-w-64"
              >
                <span className="text-gray-700 font-medium">{selectedCategory}</span>
                <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCategoryOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border-2 border-gray-300 rounded-lg shadow-2xl z-[999] max-h-60 overflow-y-auto scrollbar-hide">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setIsCategoryOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                        selectedCategory === category ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-800 font-medium'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Dropdown */}
            <div className="relative" ref={locationRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Location
              </label>
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-300 min-w-64"
              >
                <span className="text-gray-700 font-medium">{selectedLocation}</span>
                <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isLocationOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLocationOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border-2 border-gray-300 rounded-lg shadow-2xl z-[999] max-h-60 overflow-y-auto scrollbar-hide">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location)
                        setIsLocationOpen(false)
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                        selectedLocation === location ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-800 font-medium'
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className={`group bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100/50 hover:shadow-2xl hover:border-blue-200/50 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{transitionDelay: `${400 + index * 100}ms`}}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        {job.postedDate}
                      </span>
                    </div>
                  </div>
                  
                  {/* Job Description Preview */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Join our innovative team and contribute to cutting-edge solutions in the technology industry. We're looking for passionate professionals who are ready to make an impact.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:min-w-48">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm">
                    Apply Now
                  </button>
                  <button className="w-full px-6 py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
            Load More Jobs
          </button>
        </div>
      </div>
    </section>
  )
}
