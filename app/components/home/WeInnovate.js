'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function WeInnovate() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: 0,
      name: 'Cloud and Infrastructure',
      title: 'Cloud Infrastructure: Optimize. Accelerate. Uptime.',
      description: 'We turn complex data chaos into intelligent, scalable solutions that actually work for you. Eliminate inefficiencies with AI-driven automation that enhances precision, speed, and scalability. From intelligent workflows to self-learning systems, we help businesses cut downtime, reduce costs, and boost productivity. No fluff, no unnecessary extras – just smart automation, rock-solid security, and digital transformation for the future.',
      image: 'https://ahana.technology/wp-content/uploads/2025/09/image-49-m-1024x611.png'
    },
    {
      id: 1,
      name: 'Intelligent Automation',
      title: 'Intelligent Automation: Transform. Optimize. Scale.',
      description: 'Automate repetitive tasks and streamline workflows with our intelligent automation solutions. Leverage AI and machine learning to create self-optimizing processes that adapt to your business needs. Reduce manual effort, minimize errors, and free up your team to focus on strategic initiatives that drive real business value.',
      image: 'https://ahana.technology/wp-content/uploads/2025/09/image-46-m-1024x612.png'
    },
    {
      id: 2,
      name: 'Modern Workplace Support',
      title: 'Modern Workplace: Collaborate. Innovate. Succeed.',
      description: 'Enable your workforce with cutting-edge collaboration tools and cloud-based platforms. Create a seamless digital workplace that empowers employees to work from anywhere, on any device. Enhance productivity, improve communication, and foster innovation with modern workplace solutions designed for the future of work.',
      image: 'https://ahana.technology/wp-content/uploads/2025/09/image-47-m-1024x611.png'
    },
    {
      id: 3,
      name: 'Enterprise Integration',
      title: 'Enterprise Integration: Connect. Streamline. Unify.',
      description: 'Break down data silos and connect your entire technology ecosystem. Our enterprise integration solutions enable seamless data flow between applications, systems, and platforms. Create a unified digital infrastructure that improves efficiency, enhances visibility, and enables better decision-making across your organization.',
      image: 'https://ahana.technology/wp-content/uploads/2025/09/image-48-m-1024x612.png'
    },
    {
      id: 4,
      name: 'Application Development & Maintenance',
      title: 'Application Development: Build. Deploy. Evolve.',
      description: 'Develop custom applications that perfectly align with your business objectives. From concept to deployment and beyond, we create scalable, secure, and user-friendly applications. Our agile development approach ensures rapid delivery while maintaining the highest quality standards and providing ongoing support and maintenance.',
      image: 'https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg'
    },
    {
      id: 5,
      name: 'Ahana.AI',
      title: 'Ahana.AI: Intelligent. Adaptive. Transformative.',
      description: 'Harness the power of artificial intelligence to transform your business operations. Our AI solutions provide predictive analytics, natural language processing, and machine learning capabilities that unlock new insights from your data. Make smarter decisions faster and stay ahead of the competition with AI-powered innovation.',
      image: 'https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252447.jpg'
    }
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/20 to-pink-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="lg:max-w-md">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-0 leading-tight">
              <span className="text-cyan-400" style={{
                WebkitTextStroke: '2px currentColor',
                WebkitTextFillColor: 'transparent',
                paintOrder: 'stroke fill'
              }}>
                We{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600" style={{
                WebkitTextStroke: '2px #7c3aed',
                paintOrder: 'stroke fill'
              }}>
                Innovate
              </span>
            </h2>
          </div>
          <div className="lg:max-w-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              From scattered data to strategic intelligence, we turn information into an asset. By unlocking new insights, we empower businesses to make smarter, faster decisions that drive growth and competitive advantage.
            </p>
          </div>
        </div>

        {/* Service Tabs - Single Line with All Visible */}
        <div className="relative mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-5 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-500 transform hover:scale-105 whitespace-nowrap ${activeTab === index
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-glow-md'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg'
                  }`}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {services[activeTab].title}
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10">
              {services[activeTab].description}
            </p>
            <button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-glow-lg transition-all duration-500 text-base lg:text-lg font-semibold inline-flex items-center gap-3 overflow-hidden hover:scale-105">
              {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
              <span className="relative z-10 bg-white rounded-full p-2 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <svg className="w-4 h-4 text-blue-600 transform rotate-180 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              
              <span className="relative z-10 group-hover:-translate-x-2 transition-transform duration-500">Explore</span>
              
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

          {/* Right Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-2xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow-lg transition-all duration-500 transform hover:scale-105 border-4 border-white">
              <Image
                src={services[activeTab].image}
                alt={services[activeTab].name}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
