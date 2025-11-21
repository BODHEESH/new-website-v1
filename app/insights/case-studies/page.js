import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

export const metadata = {
  title: 'Case Studies - Ahana',
  description: 'Real-world success stories from our clients',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Banking Automation Success',
      client: 'Major Financial Institution',
      industry: 'Banking',
      result: '70% reduction in processing time',
      description: 'Implemented intelligent automation to streamline loan processing and customer onboarding.',
    },
    {
      title: 'Manufacturing Efficiency',
      client: 'Global Manufacturing Company',
      industry: 'Manufacturing',
      result: '50% cost reduction',
      description: 'Deployed IoT and automation solutions to optimize production lines and reduce downtime.',
    },
    {
      title: 'Insurance Claims Processing',
      client: 'Leading Insurance Provider',
      industry: 'Insurance',
      result: '80% faster claims processing',
      description: 'Automated claims processing workflow with AI-powered document analysis.',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped businesses transform through technology
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-600 mb-1">Result</div>
                    <div className="text-lg font-bold text-blue-600">{study.result}</div>
                  </div>
                  <button className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                    Read Full Story
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
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
