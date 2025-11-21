import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Image from 'next/image'
import { IMAGES } from '../../utils/constants'

export const metadata = {
  title: 'Intelligent Automation - Ahana',
  description: 'Automate processes with AI-powered solutions',
}

export default function IntelligentAutomationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Intelligent Automation
                </h1>
                <p className="text-xl text-purple-100 mb-8">
                  Transform your business processes with AI-powered automation solutions that drive efficiency and innovation.
                </p>
                <button className="bg-white text-purple-900 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
                  Learn More
                </button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.hero}
                  alt="Intelligent Automation"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Increased Efficiency', description: 'Automate repetitive tasks and boost productivity' },
                { title: 'Cost Reduction', description: 'Reduce operational costs significantly' },
                { title: 'Error Reduction', description: 'Minimize human errors in processes' },
                { title: 'Faster Processing', description: 'Process tasks at unprecedented speeds' },
                { title: 'Scalability', description: 'Scale automation across your organization' },
                { title: 'Better Insights', description: 'Gain valuable insights from automated data' },
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
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
