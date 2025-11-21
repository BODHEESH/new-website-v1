import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Link from 'next/link'
import { INDUSTRIES } from '../utils/constants'

export const metadata = {
  title: 'Industries - Ahana',
  description: 'Industry-specific solutions tailored to your needs',
}

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized solutions designed for your industry's unique challenges
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <span className="text-blue-600 font-semibold flex items-center">
                    Explore Solutions
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
