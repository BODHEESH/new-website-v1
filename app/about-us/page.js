import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'About Us - Ahana',
  description: 'Learn more about Ahana and our mission',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Ahana
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Creating possibilities through innovation and technology
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Ahana is a leading technology solutions provider dedicated to empowering businesses 
                through intelligent automation and digital transformation. With years of experience 
                and a team of expert professionals, we help organizations achieve their goals through 
                innovative technology solutions.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To create possibilities for businesses by delivering cutting-edge technology solutions 
                that drive efficiency, innovation, and growth.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Values</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Innovation:</strong> We constantly push boundaries to deliver innovative solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Excellence:</strong> We strive for excellence in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Integrity:</strong> We maintain the highest standards of integrity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Collaboration:</strong> We believe in the power of teamwork</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
