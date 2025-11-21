import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Image from 'next/image'
import { IMAGES } from '../../utils/constants'

export const metadata = {
  title: 'Cloud & Infrastructure - Ahana',
  description: 'Scalable cloud solutions for modern businesses',
}

export default function CloudInfrastructurePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Cloud & Infrastructure
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Build, deploy, and scale your applications with our comprehensive cloud infrastructure solutions.
                </p>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
                  Get Started
                </button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.hero}
                  alt="Cloud Infrastructure"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Scalability', description: 'Scale your infrastructure on demand' },
                { title: 'Security', description: 'Enterprise-grade security measures' },
                { title: 'Performance', description: 'Optimized for high performance' },
                { title: 'Cost Optimization', description: 'Reduce infrastructure costs' },
                { title: '24/7 Support', description: 'Round-the-clock technical support' },
                { title: 'Migration', description: 'Seamless cloud migration services' },
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
