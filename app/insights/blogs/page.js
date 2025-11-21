import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

export const metadata = {
  title: 'Blogs - Ahana',
  description: 'Expert insights and thought leadership',
}

export default function BlogsPage() {
  const blogs = [
    {
      title: 'The Future of Intelligent Automation',
      author: 'John Doe',
      date: 'Nov 15, 2024',
      category: 'Automation',
      excerpt: 'Explore the latest trends in intelligent automation and how they are shaping the future of business.',
    },
    {
      title: 'Cloud Migration Best Practices',
      author: 'Jane Smith',
      date: 'Nov 10, 2024',
      category: 'Cloud',
      excerpt: 'Learn the essential strategies for a successful cloud migration journey.',
    },
    {
      title: 'AI in Enterprise: A Comprehensive Guide',
      author: 'Mike Johnson',
      date: 'Nov 5, 2024',
      category: 'AI',
      excerpt: 'Discover how artificial intelligence is transforming enterprise operations.',
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
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, trends, and best practices from our experts
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {blogs.map((blog, index) => (
                <article
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full">
                      {blog.category}
                    </span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {blog.author}</span>
                    <button className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                      Read More
                      <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
