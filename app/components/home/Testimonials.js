'use client'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Venkat Krishnan',
      role: 'Chief Information Officer - Karnataka Bank',
      content: 'At Karnataka Bank, we faced challenges that required a partner who could take full ownership of our managed services, especially in areas like patch management and system upgrades. Their quick learning curve and empathetic approach have helped us tackle longstanding challenges, particularly around system updates and patch management. Ahana\'s responsiveness and understanding have not only reduced our downtime but also contributed to smoother banking operations and better customer experiences.',
    },
    {
      id: 2,
      name: 'Ganessan Soundiram',
      role: 'Chief Technology Officer - ICICI Prudential Life Insurance',
      content: 'ICICI Prudential has partnered with Ahana for more than four years and they are playing a vital role in our digital transformation journey. They have brought their expertise in Database Services, Infrastructure Management, Business Analytics, and Data Engineering to help us to envision, develop, and deploy new capabilities on our cloud-native platform. What sets Team Ahana apart from others is their team of experienced professionals who approach challenges with a positive and proactive attitude.',
    },
    {
      id: 3,
      name: 'Vinod Kochu',
      role: 'VP-Kotak Securities',
      content: 'Ahana has been a huge help with their Managed Services for our MSSQL, Sybase ASE, Sybase Replication, and Document DB environments. Their team brought their expertise have been fantastic—they keep everything running smoothly and quickly fix any issues. Their approach to updates and patches is really thoughtful, making sure everything work perfectly. We really appreciate their hard work and expertise–it\'s made a big difference for us. Ahana has played an important role in optimizing our database infrastructure.Ahana has become a trusted partner for our team, and we look forward to continuing our successful partnership with them.',
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1.5s'}} />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <p className="text-sm md:text-base text-gray-700 font-semibold tracking-wide uppercase">
              What Our Clients Say
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-glow-lg transition-all duration-500 hover:-translate-y-3 overflow-hidden animate-fade-in-up"
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-bl-full" />
              
              {/* Quote Icon */}
              <div className="relative z-10 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg className="w-12 h-12 text-gradient-to-r from-purple-400 to-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <p className="relative z-10 text-gray-600 text-sm md:text-base leading-relaxed mb-8 line-clamp-6">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="relative z-10 border-t-2 border-gradient-to-r from-purple-200 to-blue-200 pt-6">
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 text-lg mb-2">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  {testimonial.role}
                </p>
              </div>
              
              {/* Decorative Bottom Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
