'use client'

import { useState } from 'react'

export default function IndustrySection({ id, title, description, image, offerings }) {
  const [selectedOffering, setSelectedOffering] = useState(null)
  const [showFullDescription, setShowFullDescription] = useState(false)

  const handleOfferingClick = (offering) => {
    if (selectedOffering?.id === offering.id) {
      setSelectedOffering(null)
      setShowFullDescription(false)
    } else {
      setSelectedOffering(offering)
      setShowFullDescription(false)
    }
  }

  const toggleReadMore = () => {
    setShowFullDescription(!showFullDescription)
  }

  return (
    <section id={id} className="relative py-8 md:py-12 lg:py-16 mb-8 md:mb-12">
      {/* Background Separation with Rounded Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/50 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-gray-200/50 shadow-lg" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column - Industry Info (5 columns) */}
          <div className="lg:col-span-5 space-y-3 md:space-y-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>

          {/* Middle Column - Offerings List (3 columns) */}
          <div className="lg:col-span-3 space-y-2">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
              Our Offerings
            </h3>
            <div className="space-y-2">
              {offerings.map((offering) => (
                <button
                  key={offering.id}
                  onClick={() => handleOfferingClick(offering)}
                  className={`group w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 flex items-center justify-between ${
                    selectedOffering?.id === offering.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200'
                  }`}
                >
                  <span className="font-medium text-sm">{offering.title}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ml-2`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Image/Content Display (4 columns) */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-2xl p-[2px] shadow-2xl transition-all duration-500">
              <div className="relative bg-gradient-to-br from-slate-900/95 via-indigo-900/95 to-purple-900/95 backdrop-blur-xl rounded-2xl h-[400px] overflow-hidden">
                {selectedOffering ? (
                  /* Content Display - Fixed Height with Scroll */
                  <div className="h-full flex flex-col animate-fade-in relative z-10">
                    {/* Scrollable Content Area */}
                    <div className={`flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide ${showFullDescription ? 'pb-4' : ''}`}>
                      <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                          {selectedOffering.title}
                        </h3>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-3">
                            {showFullDescription 
                              ? selectedOffering.fullDescription 
                              : selectedOffering.description
                            }
                          </p>
                          
                          {selectedOffering.fullDescription && 
                           selectedOffering.fullDescription !== selectedOffering.description && (
                            <button
                              onClick={toggleReadMore}
                              className="inline-flex items-center gap-1 text-blue-300 hover:text-blue-200 font-semibold text-sm transition-colors duration-300"
                            >
                              <span>{showFullDescription ? '... less' : '... more'}</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Fixed Bottom Button */}
                    <div className="p-6 pt-4 border-t border-white/10">
                      <a 
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full font-medium text-sm transition-all duration-300 border border-white/20 hover:border-white/30 hover:scale-105"
                      >
                        <span>Know more</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                  </div>
              ) : (
                /* Default State - Select an Offering */
                <div className="relative h-full min-h-[350px] flex flex-col items-center justify-center animate-fade-in p-8">
                  <div className="text-center space-y-6 relative z-10">
                    {/* Large Centered Icon */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="text-[120px] leading-none opacity-80 transform hover:scale-110 transition-transform duration-300">
                        {id === 'banking' && '🏦'}
                        {id === 'insurance' && '🛡️'}
                        {id === 'manufacturing' && '🏭'}
                        {id === 'logistics' && '🚚'}
                        {id === 'automotive' && '🚗'}
                      </div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="space-y-3">
                      <p className="text-white text-lg md:text-xl font-semibold">
                        Select an offering to view details
                      </p>
                      <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span>Click any solution on the left</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}
