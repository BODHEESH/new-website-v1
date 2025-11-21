'use client'

import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Image from 'next/image'

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('india')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  })

  const locations = {
    india: [
      {
        city: 'Bangalore',
        phone: '+91 9148724605',
        email: 'info@ahana.com',
        address: 'Regd Off: #103/37, 2nd Floor, Sri Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011'
      },
      {
        city: 'Mumbai',
        phone: '+91 9148724605',
        email: 'info@ahana.com',
        address: 'No. 4/12, 2nd Floor, Crescent Business Square, Sakinaka, SN Road, West, Maharashtra - 400072'
      },
      {
        city: 'Hubballi',
        phone: '+91 9148724605',
        email: 'info@ahana.com',
        address: 'No. 4/45, 2nd floor, Ashwini building, Nehru nagar, Gokul road, Hubballi, Karnataka - 580030'
      }
    ],
    world: [
      {
        city: 'USA',
        phone: '+1 9089527387',
        email: 'info@ahanait.com',
        address: 'C\\O 70-26 Groton Street, Forest Hills, NY 13375'
      },
      {
        city: 'UK',
        phone: '+44 7424 565225',
        email: 'info@ahanait.com',
        address: '128 City Road, London, United Kingdom, EC1V 2NX'
      },
      {
        city: 'Netherlands',
        phone: '+91 9148724605',
        email: 'info@ahanait.com',
        address: 'Staringstraat 28 H, 1054VR, Amsterdam, The Netherlands'
      },
      {
        city: 'UAE',
        phone: '+971-54-759-2113',
        email: 'info@ahanait.com',
        address: 'Office 86, Rigga Business Center, Al Muraqabat, Dubai, UAE'
      }
    ]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Hero Section with SVG Wave */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
          {/* SVG Wave Background */}
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="rgba(147, 197, 253, 0.15)"
                d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Have a Challenge?
                </span>
                <br />
                <span className="text-gray-900">Let's Solve it Together!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Contact us for tailored solutions, expert guidance or collaboration opportunities. Whether you have a question, need support or want to collaborate – just drop us a message!
              </p>
            </div>
          </div>
        </section>

        {/* Location Tabs & Contact Info */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('india')}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'india'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="text-2xl">🇮🇳</span>
                <span>India</span>
              </button>
              <button
                onClick={() => setActiveTab('world')}
                className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'world'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="text-2xl">🌍</span>
                <span>World</span>
              </button>
            </div>

            {/* Location Cards - Full Width Grid */}
            <div className={`grid gap-6 ${activeTab === 'india' ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'}`}>
              {locations[activeTab].map((location, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-4">{location.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700 text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700 text-sm">{location.email}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700 text-sm">{location.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build Digital Future Section */}
        <section className="relative py-12 md:py-16 bg-gradient-to-br from-blue-50/50 to-purple-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Build a Better Digital Future
                  </span>
                  <br />
                  <span className="text-gray-900">With Us.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're enabling businesses with the power they need, only, whether you need to streamline operations, enhance customer experiences, or drive innovation. We offer a one-stop solution that brings a spark to work together. Join us in shaping the future of digital innovation.
                </p>
                <p className="text-gray-700 font-semibold">
                  Ready to collaborate and create impact?
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <span>Explore Our Services</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/contact-us/contact-us.webp"
                    alt="Our Team Ready to Help"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-3xl"
                    priority={false}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="relative py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="text-gray-900">Ready to</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Future-Proof Your IT?
                  </span>
                </h2>
              </div>

              {/* Right Form */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  />
                  <input
                    type="text"
                    name="organization"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                  <textarea
                    name="message"
                    placeholder="Type your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
