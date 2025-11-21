'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNo: '',
    email: '',
    organizationName: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-300/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-pink-200/20 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Enhanced */}
          <div className="animate-fade-in-up">
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 via-purple-500 to-blue-500 mb-6 rounded-full" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Ready to
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-8">
              Future-Proof Your IT?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Let's transform your business with cutting-edge technology solutions. Get in touch with our experts today.
            </p>
          </div>

          {/* Right Form - Highly Enhanced */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            {/* Advanced Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 -right-4 w-24 h-24 bg-gradient-to-bl from-cyan-400/15 to-blue-500/15 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}} />
            
            {/* Main Form Container with Advanced Glassmorphism */}
            <div className="relative overflow-hidden rounded-3xl group">
              {/* Multi-layer Glassmorphism */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:shadow-purple-500/10">
                {/* Gradient Background Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/40 to-cyan-50/50 rounded-3xl group-hover:from-blue-100/60 group-hover:via-indigo-100/50 group-hover:to-cyan-100/60 transition-all duration-700" />
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-3xl p-[3px] bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 group-hover:from-blue-500/50 group-hover:via-purple-500/50 group-hover:to-cyan-500/50 transition-all duration-700">
                  <div className="w-full h-full bg-white/95 backdrop-blur-sm rounded-3xl" />
                </div>

                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Form Content */}
                <div className="relative z-10 p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1 - Enhanced Inputs */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="group/input">
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name*"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gradient-to-br from-gray-50/80 to-blue-50/40 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/70 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-blue-300/60 hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
                        />
                      </div>
                      <div className="group/input">
                        <input
                          type="tel"
                          name="phoneNo"
                          placeholder="Phone No*"
                          value={formData.phoneNo}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gradient-to-br from-gray-50/80 to-purple-50/40 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400/70 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-purple-300/60 hover:shadow-lg hover:shadow-purple-500/10 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2 - Enhanced Inputs */}
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="group/input">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email*"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gradient-to-br from-gray-50/80 to-indigo-50/40 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400/70 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-indigo-300/60 hover:shadow-lg hover:shadow-indigo-500/10 backdrop-blur-sm"
                        />
                      </div>
                      <div className="group/input">
                        <input
                          type="text"
                          name="organizationName"
                          placeholder="Organization Name*"
                          value={formData.organizationName}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-gradient-to-br from-gray-50/80 to-cyan-50/40 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/70 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-500/10 backdrop-blur-sm"
                        />
                      </div>
                    </div>

                    {/* Message - Enhanced */}
                    <div className="group/input">
                      <textarea
                        name="message"
                        placeholder="Type your message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-5 py-4 bg-gradient-to-br from-gray-50/80 to-pink-50/40 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400/70 transition-all duration-300 text-gray-900 placeholder-gray-500 resize-none hover:border-pink-300/60 hover:shadow-lg hover:shadow-pink-500/10 backdrop-blur-sm"
                      />
                    </div>

                    {/* Submit Button - Ultra Enhanced */}
                    <div className="flex justify-end pt-4">
                      <button
                        type="submit"
                        className="group/btn relative overflow-hidden rounded-full transition-all duration-700 hover:scale-110 hover:-translate-y-1"
                      >
                        {/* Button Background with Glassmorphism */}
                        <div className="relative bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 backdrop-blur-sm border border-white/20 rounded-full px-12 py-4 shadow-xl hover:shadow-2xl transition-all duration-700 group-hover/btn:shadow-purple-500/20">
                          {/* Animated Border */}
                          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700">
                            <div className="w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />
                          </div>

                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 rounded-full" />
                          </div>

                          {/* Button Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
                            <span className="relative bg-white/20 rounded-full p-2 opacity-0 -translate-x-8 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-700 backdrop-blur-sm">
                              <svg className="w-4 h-4 text-white transform rotate-180 group-hover/btn:rotate-0 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                            
                            <span className="text-white font-bold text-base lg:text-lg group-hover/btn:-translate-x-2 transition-transform duration-700">Submit</span>
                            
                            {/* Arrow on Right (visible initially pointing right, hides on hover) */}
                            <span className="bg-white/20 rounded-full p-2 opacity-100 translate-x-0 group-hover/btn:opacity-0 group-hover/btn:translate-x-8 transition-all duration-700 backdrop-blur-sm">
                              <svg className="w-4 h-4 text-white transform group-hover/btn:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
