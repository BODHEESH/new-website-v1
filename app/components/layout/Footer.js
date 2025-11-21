'use client'
import Link from 'next/link'

export default function Footer() {
  const dataAtCore = [
    { name: 'Data & Analytics Advisory', href: '#' },
    { name: 'Data Modernization', href: '#' },
    { name: 'Data Management', href: '#' },
    { name: 'Data Governance', href: '#' },
  ]

  const services = [
    { name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure' },
    { name: 'Intelligent Automation', href: '/services/intelligent-automation' },
    { name: 'Modern Workplace', href: '/services/modern-workplace' },
    { name: 'Enterprise Integration', href: '/services/enterprise-integration' },
    { name: 'Application Dev & Maintenance', href: '#' },
    { name: 'Ahana.AI', href: '#' },
  ]

  const industries = [
    { name: 'Banking & Finance', href: '/industries/banking-finance' },
    { name: 'Insurance', href: '/industries/insurance' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
    { name: 'Healthcare', href: '#' },
    { name: 'Automobile', href: '/industries/automobile' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Career', href: '/careers' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Terms Of Use', href: '#' },
    { name: 'Compliance & Governance', href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">ahana</h2>
              <p className="text-sm text-blue-200">creating possibilities</p>
            </div>
          </div>

          {/* Data at the core */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Data at the core</h4>
            <ul className="space-y-2">
              {dataAtCore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white transition text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 pb-8 border-b border-blue-700">
          <div className="bg-white rounded-lg p-3">
            <div className="w-32 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm text-center">ISO<br/>27001</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="w-32 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">UKAS</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="w-32 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm text-center">ISO<br/>9001</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="w-32 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">UKAS</span>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <div className="w-40 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">NASSCOM</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">
            © 2025, Ahana Systems and Solutions Private Limited
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-900 p-2 rounded-full hover:bg-blue-100 transition"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
