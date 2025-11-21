'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/home/ContactForm'

export default function AboutPage() {
  const [activeTeamTab, setActiveTeamTab] = useState('board')
  const [hoveredCSR, setHoveredCSR] = useState(null)

  // Team data
  const teamCategories = [
    { id: 'board', label: 'Board Of Directors' },
    { id: 'advisory', label: 'Advisory Team' },
    { id: 'management', label: 'Management Team' },
    { id: 'subsidiaries', label: 'Subsidiaries/ Affiliates' },
    { id: 'partners', label: 'Partners' },
  ]

  const teamMembers = {
    board: [
      {
        name: 'Vivek Hegde',
        role: 'Director & CEO',
        image: '/images/about-us/Vivek Hegde.webp',
        linkedin: '#'
      },
      {
        name: 'Umashankar Malligere',
        role: 'Founder & Managing Director',
        image: '/images/about-us/umashankar.webp',
        linkedin: '#'
      },
    ],
    advisory: [
      {
        name: 'Ravindra Narasimhamurthy',
        role: 'Senior Advisor',
        image: '/images/about-us/Ravindra Narasimhamurthy.webp',
        linkedin: '#'
      },
      {
        name: 'Ashwin Khorana',
        role: 'Senior Advisor',
        image: '/images/about-us/Ashwin Khorana.webp',
        linkedin: '#'
      },
      {
        name: 'Raghavendra Prasad',
        role: 'Advisory',
        image: '/images/about-us/Raghavendra Prasad.webp',
        linkedin: 'https://linkedin.com/in/rp'
      },
    ],
    management: [
      {
        name: 'Vivek Hegde',
        role: 'Founder Director & CEO',
        image: '/images/about-us/vivek.webp',
        linkedin: '#'
      },
      {
        name: 'Chidananda Murthy',
        role: 'SVP Presales',
        image: '/images/about-us/chidanda murthy.webp',
        linkedin: '#'
      },
      {
        name: 'Pradeep Naduvalath',
        role: 'Dy. Head - Presales',
        image: '/images/about-us/pradeep naduvalath.webp',
        linkedin: '#'
      },
      {
        name: 'Rajesh Gowda HC',
        role: 'Chief Architect',
        image: '/images/about-us/rajesh gowda.webp',
        linkedin: '#'
      },
      {
        name: 'Subramanya G',
        role: 'Head Accounts',
        image: '/images/about-us/subrahmanya.webp',
        linkedin: '#'
      },
      {
        name: 'Sujatha Prakash',
        role: 'VP- PMO',
        image: '/images/about-us/sujatha.webp',
        linkedin: '#'
      },
      {
        name: 'Jeevan Somaiah',
        role: 'AVP- HR',
        image: '/images/about-us/jeevan.webp',
        linkedin: '#'
      },
      {
        name: 'Ansuman Palit',
        role: 'Account Delivery Head',
        image: '/images/about-us/ansuman palit.webp',
        linkedin: '#'
      },
      {
        name: 'Chethna',
        role: 'VP- Delivery',
        image: '/images/about-us/Chaithra-WS-Image1.webp',
        linkedin: '#' // LinkedIn pending
      },
      {
        name: 'Sudheendra Gururaj',
        role: 'Head TPESQ/HAST',
        image: '/images/about-us/Sudheendra gururaj.webp',
        linkedin: '#'
      },
      {
        name: 'Manmohan',
        role: 'Senior BDM, UK',
        image: '/images/about-us/Manmohan-1-1424x1536.webp',
        linkedin: '#'
      },
      {
        name: 'Ajay',
        role: 'Senior BDM, Western Region',
        image: '/images/about-us/Ajay.webp',
        linkedin: '#'
      },
      {
        name: 'Vijay',
        role: 'Senior VP- Sales',
        image: '/images/about-us/Vijay-1-1-1546x2048.webp',
        linkedin: '#'
      },
      {
        name: 'Akhil Nair',
        role: 'Account Delivery Head',
        image: '/images/about-us/AKhil-1-1-1296x1536.webp',
        linkedin: '#'
      },
      {
        name: 'Sangeetha',
        role: 'Account Delivery Head',
        image: '/images/about-us/Sangeetha-Raveendran.webp',
        linkedin: '#' // LinkedIn pending
      },
      {
        name: 'Chaitra K C',
        role: 'Finance Controller',
        image: '/images/about-us/Chaithra-WS-Image1.webp',
        linkedin: '#'
      },
      {
        name: 'Mallika',
        role: 'Head- QA & GRC',
        image: '/images/about-us/Mallika1.webp',
        linkedin: '#'
      },
      {
        name: 'Srinath',
        role: 'Head - Automation & AI Initiatives',
        image: '/images/about-us/Srinath.webp',
        linkedin: '#'
      },
    ],
    subsidiaries: [
      {
        name: 'Vivek Hegde',
        role: 'Director, Ahana Systems and Solutions Inc (US)',
        image: '/images/about-us/Vivek Hegde.webp',
        linkedin: '#'
      },
      {
        name: 'Bageshwar Kumar',
        role: 'Director, Ahana Systems and Solutions Limited (UK)',
        image: '/images/about-us/Bageshwar Kumar.webp',
        linkedin: '#'
      },
      {
        name: 'Praveen Prasad',
        role: 'Director, Ahana Systems and Solutions B.V (EU)',
        image: '/images/about-us/Praveen Prasad.webp',
        linkedin: '#'
      },
      {
        name: 'Babji V S',
        role: 'UAE Sales Head',
        image: '/images/about-us/Babji V S.webp',
        linkedin: '#'
      },
    ],
    partners: [
      {
        name: 'Raju Chidambaram',
        role: 'CEO- RalanTech, An Ahana Systems and Solutions Partner Company',
        image: '/images/about-us/Raju Chidambaram.webp',
        linkedin: '#'
      },
    ],
  }

  // CSR Initiatives data
  const csrInitiatives = [
    {
      title: 'Academic Upliftment with Right to Live',
      description: 'Established in 2020, the PM CARES Fund supports emergency relief efforts and public health crises. As part of our CSR commitment, we contributed to the fund to aid national recovery efforts during the COVID-19 pandemic and strengthen the country\'s healthcare response.',
      image: '/images/csr/academic.jpg',
      tag: 'Academic Upliftment with Right to Live'
    },
    {
      title: 'PM CARES Fund Contribution',
      description: 'Established in 2020, the PM CARES Fund supports emergency relief efforts and public health crises. As part of our CSR commitment, we contributed to the fund to aid national recovery efforts during the COVID-19 pandemic.',
      image: '/images/csr/pm-cares.jpg',
      tag: 'PM CARES Fund Contribution'
    },
    {
      title: 'School Infrastructure Development with Right to Live',
      description: 'We are committed to making a positive impact on our people, clients, communities, and the environment—working collectively toward a more sustainable and inclusive future.',
      image: '/images/csr/school.jpg',
      tag: 'School Infrastructure Development with Right to Live'
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    We are Ahana
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Where purpose, technology, and people come together to create meaningful change with innovation and care.
                </p>
                <p className="text-gray-600">
                  At Ahana, we are driven by a shared vision to create a meaningful impact through technology. We believe in the power of collaboration, innovation, and empathy to transform businesses and communities. Our team is dedicated to delivering solutions that not only meet today's challenges but also pave the way for a sustainable and inclusive future.
                </p>
                <p className="text-gray-600">
                  As a trusted partner to organizations worldwide, we combine deep industry expertise with cutting-edge technology to co-engineer excellence. Together, we build possibilities that drive growth, efficiency, and positive change.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
                >
                  <span>Get in Touch</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100">
                  <Image
                    src="/images/about-us/aboutus-first-image.webp"
                    alt="Team Ahana"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Values Section - 3 Column 2 Row Layout */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-50/30 via-purple-50/30 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* First Row - Image, Vision, Image */}
            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Left Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-cyan-100">
                <Image
                  src="/images/about-us/aboutus1.webp"
                  alt="Team Collaboration"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Our Vision - Center with Dialogue Box */}
              <div className="relative flex items-center">
                <div className="w-full">
                  <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">Our Vision</h3>
                  <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200">
                    {/* Red curved arrow pointing down to center image */}
                    {/* <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 10 Q40 25, 30 40 L30 50" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"/>
                        <path d="M30 50 L25 43 M30 50 L35 43" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                    </div> */}
                    <p className="text-gray-700 leading-relaxed relative z-10">
                      To become a global IT Services and Solutions provider, delivering innovation-led best-in-class technology solutions by leveraging data, AI, and emerging technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-purple-100 to-pink-100">
                <Image
                  src="/images/about-us/aboutus3.webp"
                  alt="Team Success"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second Row - Mission, Center Image, Values */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Our Mission - Left with Dialogue Box */}
              <div className="relative flex items-center">
                <div className="w-full">
                  <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">Our Mission</h3>
                  <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200">
                    {/* Red curved arrow pointing up-right to center image */}
                    {/* <div className="absolute -top-12 right-4 z-10">
                      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 50 Q30 30, 60 10" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"/>
                        <path d="M60 10 L52 13 M60 10 L57 18" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                    </div> */}
                    <p className="text-gray-700 leading-relaxed relative z-10">
                      To co-engineer excellence for our customers with their transformation journey and in the process create value for all our stakeholders.
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-100 to-purple-100">
                <Image
                  src="/images/about-us/aboutus2.webp"
                  alt="Team Vision"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Our Values - Right with Dialogue Box */}
              <div className="relative flex items-center">
                <div className="w-full">
                  <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6">Our Values</h3>
                  <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-gray-200">
                    {/* Red curved arrow pointing up-left to center image */}
                    {/* <div className="absolute -top-12 left-4 z-10">
                      <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M70 50 Q50 30, 20 10" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"/>
                        <path d="M20 10 L28 13 M20 10 L23 18" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
                      </svg>
                    </div> */}
                    <ul className="space-y-2 text-gray-700 relative z-10">
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Empathy</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Integrity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Sincerity</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Excellence</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-purple-600">•</span>
                        <span>Innovation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Tabs */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Team Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {teamCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTeamTab(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTeamTab === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Team Members Grid - 4 Cards Per Row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers[activeTeamTab].map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  {/* Circular Member Image */}
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                    </div>
                    {/* LinkedIn Icon - Top Right of Circle */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 right-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                  {/* Member Info */}
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accomplishments & Recognitions */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Accomplishments & Recognitions
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Awards</h3>
                <p className="text-gray-600">Recognized for excellence in technology innovation and customer service</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Client Success</h3>
                <p className="text-gray-600">Delivered transformative solutions to Fortune 500 companies worldwide</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Presence</h3>
                <p className="text-gray-600">Serving clients across multiple continents with local expertise</p>
              </div>
            </div>
          </div>
        </section>

        {/* CSR Initiatives Carousel */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our CSR Initiatives
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Investing in a Brighter Tomorrow
              </p>
              <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
                We are committed to making a positive impact on our people, clients, communities, and the environment—working collectively toward a more sustainable and inclusive future.
              </p>
            </div>

            {/* CSR Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {csrInitiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  onMouseEnter={() => setHoveredCSR(index)}
                  onMouseLeave={() => setHoveredCSR(null)}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl">🤝</div>
                    </div>
                    {/* Overlay with content on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/90 to-blue-900/80 p-6 flex flex-col justify-end transition-all duration-300 ${hoveredCSR === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <h3 className="text-xl font-bold text-white mb-2">{initiative.title}</h3>
                      <p className="text-white/90 text-sm">{initiative.description}</p>
                    </div>
                  </div>
                  {/* Tag */}
                  <div className="p-6">
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {initiative.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ready to Future-Proof Your IT CTA */}
        {/* <section className="relative py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future-Proof Your IT?
              </span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how Ahana can help transform your business with innovative technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium text-lg"
            >
              <span>Get Started</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section> */}
        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
