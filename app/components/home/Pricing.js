'use client'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      period: 'per person',
      features: [
        '2-day workshop access',
        'Basic automation training',
        'Course materials',
        'Certificate of completion',
        'Email support'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Pro',
      price: '$599',
      period: 'per person',
      popular: true,
      features: [
        '5-day intensive workshop',
        'Advanced automation techniques',
        'Hands-on projects',
        'Certificate of completion',
        'Priority support',
        '3 months mentorship'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Custom training program',
        'On-site or remote options',
        'Dedicated instructor',
        'Unlimited participants',
        '24/7 support',
        '1 year mentorship',
        'Custom integrations'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Choose Your Plan
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Flexible pricing options for individuals and teams
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition ${
                plan.popular ? 'ring-4 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-center py-2 font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`group relative w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-full hover:shadow-lg transition-all duration-500 font-semibold inline-flex items-center justify-center gap-3 overflow-hidden hover:scale-105`}>
                  {/* Arrow on Left (hidden initially, appears on hover pointing right) */}
                  <span className="relative z-10 bg-white rounded-full p-1.5 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <svg className="w-3 h-3 text-blue-600 transform rotate-180 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  
                  <span className="relative z-10 group-hover:-translate-x-2 transition-transform duration-500">Get Started</span>
                  
                  {/* Arrow on Right (visible initially pointing right, hides on hover) */}
                  <span className="relative z-10 bg-white rounded-full p-1.5 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-8 transition-all duration-500">
                    <svg className="w-3 h-3 text-blue-600 transform group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
