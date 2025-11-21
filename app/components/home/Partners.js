'use client'

export default function Partners() {
  const partners = [
    'Microsoft', 'Google', 'Amazon', 'IBM', 'Oracle', 
    'Salesforce', 'SAP', 'Adobe', 'Cisco', 'Intel'
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Join companies that have transformed their operations
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-4 md:p-6 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-300"
            >
              <span className="text-gray-600 font-semibold text-sm md:text-lg">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
