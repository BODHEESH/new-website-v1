// Navigation menu items
export const NAVIGATION = {
  main: [
    { name: 'Data at the core', href: '/data-at-the-core' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Cloud & Infrastructure', href: '/services/cloud-infrastructure' },
        { name: 'Intelligent Automation', href: '/services/intelligent-automation' },
        { name: 'Modern Workplace', href: '/services/modern-workplace' },
        { name: 'Enterprise Integration', href: '/services/enterprise-integration' },
        { name: 'Application Development & Maintenance', href: '/services/application-development' },
        { name: 'Ahana.AI', href: '/services/ahana-ai' },
      ],
    },
    {
      name: 'Industries',
      href: '/industries',
      dropdown: [
        { name: 'Banking and Finance', href: '/industries/banking-finance' },
        { name: 'Insurance', href: '/industries/insurance' },
        { name: 'Manufacturing', href: '/industries/manufacturing' },
        { name: 'Logistics', href: '/industries/logistics' },
        { name: 'Automobile', href: '/industries/automobile' },
      ],
    },
    {
      name: 'Insights',
      href: '/insights',
      dropdown: [
        { name: 'Case Studies', href: '/insights/case-studies' },
        { name: 'Blogs', href: '/insights/blogs' },
        { name: 'News and Events', href: '/insights/news-events' },
      ],
    },
    { name: 'About us', href: '/about-us' },
    { name: 'Careers', href: '/careers' },
  ],
}

// Services list
export const SERVICES = [
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure',
    slug: 'cloud-infrastructure',
    description: 'Scalable cloud solutions for modern businesses',
  },
  {
    id: 'intelligent-automation',
    name: 'Intelligent Automation',
    slug: 'intelligent-automation',
    description: 'Automate processes with AI-powered solutions',
  },
  {
    id: 'modern-workplace',
    name: 'Modern Workplace',
    slug: 'modern-workplace',
    description: 'Transform your workplace with modern tools',
  },
  {
    id: 'enterprise-integration',
    name: 'Enterprise Integration',
    slug: 'enterprise-integration',
    description: 'Seamless integration across your enterprise',
  },
  {
    id: 'application-development',
    name: 'Application Development & Maintenance',
    slug: 'application-development',
    description: 'Custom application development and support',
  },
  {
    id: 'ahana-ai',
    name: 'Ahana.AI',
    slug: 'ahana-ai',
    description: 'AI-powered solutions for intelligent business',
  },
]

// Industries list
export const INDUSTRIES = [
  {
    id: 'banking-finance',
    name: 'Banking and Finance',
    slug: 'banking-finance',
    description: 'Digital transformation for financial services',
  },
  {
    id: 'insurance',
    name: 'Insurance',
    slug: 'insurance',
    description: 'Innovative solutions for insurance industry',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    slug: 'manufacturing',
    description: 'Smart manufacturing solutions',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    slug: 'logistics',
    description: 'Optimize your supply chain',
  },
  {
    id: 'automobile',
    name: 'Automobile',
    slug: 'automobile',
    description: 'Drive innovation in automotive industry',
  },
]

// Company info
export const COMPANY = {
  name: 'Ahana',
  tagline: 'Creating possibilities',
  description: 'Empowering businesses through intelligent automation and expert training.',
  email: 'info@ahana.com',
  phone: '+1 (555) 123-4567',
  address: '123 Business Street, Tech City, TC 12345',
}

// Social media links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ahana',
  linkedin: 'https://linkedin.com/company/ahana',
  github: 'https://github.com/ahana',
  facebook: 'https://facebook.com/ahana',
}

// Image URLs
export const IMAGES = {
  hero: 'https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?t=st=1763636797~exp=1763640397~hmac=9dc4518d3950b106bb3b26217a5c6e826d348b62e061437246a7d234141f59f1&w=1480',
  placeholder: 'https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?t=st=1763636797~exp=1763640397~hmac=9dc4518d3950b106bb3b26217a5c6e826d348b62e061437246a7d234141f59f1&w=1480',
}
