'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef(null)

  const baseImages = [
    'https://ahana.technology/wp-content/uploads/2025/09/image-46-m-1024x612.png',
    'https://ahana.technology/wp-content/uploads/2025/09/image-47-m-1024x611.png',
    'https://ahana.technology/wp-content/uploads/2025/09/image-49-m-1024x611.png',
    'https://ahana.technology/wp-content/uploads/2025/09/image-48-m-1024x612.png',
    'https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?t=st=1763636797~exp=1763640397~hmac=9dc4518d3950b106bb3b26217a5c6e826d348b62e061437246a7d234141f59f1&w=1480',
    'https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252447.jpg?t=st=1763641708~exp=1763645308~hmac=0120f8d0ff24c22391cba242c6ac3754a10181544fd712fde90850e9a60a474b&w=1480'
  ]

  const tabs = [
    {
      id: 0,
      title: 'Automation in Action',
      description: 'Join us for a hands-on workshop with UiPath exploring real-world RPA applications across BFSI and manufacturing sectors.',
      image: baseImages[5],
      buttonText: 'Join us'
    },
    {
      id: 1,
      title: 'Unified Observability',
      description: 'Ahana partners with Rakuten to bring in the Unified Observability as part of our Data and Platform Solutions.',
      image: baseImages[1],
      buttonText: 'Contact Us'
    },
    {
      id: 2,
      title: 'Cloud Efficiency',
      description: 'Optimize your cloud infrastructure with our comprehensive solutions designed for modern businesses.',
      image: baseImages[2],
      buttonText: 'Learn More'
    },
    {
      id: 3,
      title: 'Data Report Made Easy',
      description: 'Transform your data into actionable insights with our advanced reporting and analytics solutions.',
      image: baseImages[3],
      buttonText: 'Get Started'
    },
    {
      id: 4,
      title: 'Digital Transformation',
      description: 'Accelerate your digital transformation journey with our comprehensive technology solutions.',
      image: baseImages[0],
      buttonText: 'Explore'
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI and machine learning to drive innovation and business growth.',
      image: baseImages[1],
      buttonText: 'Discover'
    },
    {
      id: 6,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise solutions designed to meet the demands of modern businesses.',
      image: baseImages[2],
      buttonText: 'Learn More'
    },
    {
      id: 7,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with our advanced analytics platform.',
      image: baseImages[3],
      buttonText: 'Get Started'
    },
    {
      id: 8,
      title: 'Process Optimization',
      description: 'Streamline your business processes with intelligent automation and optimization.',
      image: baseImages[0],
      buttonText: 'Optimize'
    },
    {
      id: 9,
      title: 'Innovation Hub',
      description: 'Explore cutting-edge technologies and innovative solutions for your business.',
      image: baseImages[1],
      buttonText: 'Innovate'
    }
  ]

  // Auto-advance carousel with proper timing
  useEffect(() => {
    if (isPaused) return

    // Reset progress to 0 when starting
    setProgress(0)

    // Each tab displays for 5 seconds (5000ms)
    // Update progress every 50ms for smooth animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100 // Keep at 100 until tab changes
        }
        return prev + 1
      })
    }, 50)

    // After 5 seconds, move to next tab
    const timeout = setTimeout(() => {
      setActiveTab((current) => (current + 1) % tabs.length)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [activeTab, isPaused, tabs.length])

  const handleTabClick = (index) => {
    setActiveTab(index)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' })
      setTimeout(updateScrollButtons, 300)
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' })
      setTimeout(updateScrollButtons, 300)
    }
  }

  // Auto-scroll to active tab (horizontal only)
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const activeTabElement = container.children[0]?.children[activeTab]
      if (activeTabElement) {
        const containerRect = container.getBoundingClientRect()
        const elementRect = activeTabElement.getBoundingClientRect()
        const scrollLeft = elementRect.left - containerRect.left + container.scrollLeft - (containerRect.width / 2) + (elementRect.width / 2)
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        })
      }
      updateScrollButtons()
    }
  }, [activeTab])

  // Update scroll buttons on mount and scroll
  useEffect(() => {
    updateScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', updateScrollButtons)
      return () => container.removeEventListener('scroll', updateScrollButtons)
    }
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800 animate-gradient-x" />
      
      {/* Full Width Image Background */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <Image 
          src={tabs[activeTab].image}
          alt={tabs[activeTab].title}
          fill
          className="object-cover transition-opacity duration-700 ease-in-out"
          priority
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Animated Particles Effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float" style={{animationDelay: '1s'}} />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-float" style={{animationDelay: '2s'}} />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl animate-fade-in-up">
              {/* Decorative Line */}
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full" />
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-fade-in-down">
                  {tabs[activeTab].title}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 lg:mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                {tabs[activeTab].description}
              </p>
              
              <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-glow-lg transition-all duration-500 text-base lg:text-lg font-semibold inline-flex items-center gap-3 overflow-hidden hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
                <span className="relative z-10 bg-white rounded-full p-2 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <svg className="w-4 h-4 text-blue-600 transform rotate-180 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                
                <span className="relative z-10 group-hover:-translate-x-2 transition-transform duration-500">{tabs[activeTab].buttonText}</span>
                
                {/* Arrow on Right (visible initially pointing right, hides on hover) */}
                <span className="relative z-10 bg-white rounded-full p-2 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-8 transition-all duration-500">
                  <svg className="w-4 h-4 text-blue-600 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section - Positioned at Bottom with Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-md">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-2 md:gap-4 max-w-8xl mx-auto">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`flex-shrink-0 bg-white/10 backdrop-blur-md text-white p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-white/10 ${
                  !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
                }`}
                aria-label="Scroll left"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Scrollable Tabs Container */}
              <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-x-auto scrollbar-hide"
              >
                <div className="flex gap-3 md:gap-4 min-w-max pr-4">
                  {tabs.map((tab, index) => (
                    <div key={tab.id} className="relative w-48 md:w-56 flex-shrink-0">
                      {/* Progress Bar with Gradient */}
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden mb-3">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-100 ease-linear rounded-full"
                          style={{ 
                            width: activeTab === index ? `${progress}%` : activeTab > index ? '100%' : '0%' 
                          }}
                        />
                      </div>
                      
                      {/* Tab Button with Glassmorphism */}
                      <button
                        onClick={() => handleTabClick(index)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                          activeTab === index
                            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 text-white shadow-glow-cyan'
                            : 'bg-white/5 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                        }`}
                      >
                        <span className="text-xs md:text-sm font-semibold block truncate">
                          {tab.title}
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`flex-shrink-0 bg-white/10 backdrop-blur-md text-white p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-white/10 ${
                  !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
                }`}
                aria-label="Scroll right"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Pause/Play Button */}
              <button
                onClick={togglePause}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md text-white p-3 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 flex-shrink-0 border border-cyan-400/30 hover:scale-110 hover:shadow-glow-cyan"
                aria-label={isPaused ? 'Play' : 'Pause'}
              >
                {isPaused ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
