import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Insights - Ahana',
  description: 'Latest insights, case studies, and industry news',
}

export default function InsightsPage() {
  const insightCategories = [
    {
      title: 'Case Studies',
      description: 'Real-world success stories from our clients',
      href: '/insights/case-studies',
      icon: '📊',
    },
    {
      title: 'Blogs',
      description: 'Expert insights and thought leadership',
      href: '/insights/blogs',
      icon: '✍️',
    },
    {
      title: 'News and Events',
      description: 'Latest updates and upcoming events',
      href: '/insights/news-events',
      icon: '📰',
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
                Insights & Resources
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with our latest insights, case studies, and industry news
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {insightCategories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 text-center"
                >
                  <div className="text-6xl mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <span className="text-blue-600 font-semibold inline-flex items-center">
                    View All
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
