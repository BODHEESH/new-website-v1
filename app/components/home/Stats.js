'use client'

export default function Stats() {
  const stats = [
    { value: '500+', label: 'Companies Trained' },
    { value: '10K+', label: 'Professionals Certified' },
    { value: '95%', label: 'Satisfaction Rate' },
    { value: '24/7', label: 'Support Available' }
  ]

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
