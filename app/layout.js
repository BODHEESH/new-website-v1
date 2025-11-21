import './globals.css'

export const metadata = {
  title: 'Ahana Technology - Intelligent Automation & Cloud Solutions | Digital Transformation',
  description: 'Transform your business with Ahana\'s cutting-edge intelligent automation, cloud infrastructure, data analytics, and AI solutions. We help enterprises across BFSI, manufacturing, healthcare, and logistics achieve digital excellence.',
  keywords: 'intelligent automation, cloud infrastructure, data analytics, AI solutions, digital transformation, RPA, enterprise integration, modern workplace, Ahana Technology',
  authors: [{ name: 'Ahana Technology' }],
  creator: 'Ahana Technology',
  publisher: 'Ahana Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ahana.technology'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ahana Technology - Intelligent Automation & Cloud Solutions',
    description: 'Transform your business with cutting-edge intelligent automation, cloud infrastructure, and AI-powered solutions. Empowering enterprises across multiple industries.',
    url: 'https://ahana.technology',
    siteName: 'Ahana Technology',
    images: [
      {
        url: 'https://ahana.technology/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahana Technology - Digital Transformation Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahana Technology - Intelligent Automation & Cloud Solutions',
    description: 'Transform your business with cutting-edge intelligent automation, cloud infrastructure, and AI-powered solutions.',
    images: ['https://ahana.technology/twitter-image.jpg'],
    creator: '@ahanatechnology',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ahana Technology',
              url: 'https://ahana.technology',
              logo: 'https://ahana.technology/logo.png',
              description: 'Leading provider of intelligent automation, cloud infrastructure, and digital transformation solutions',
              sameAs: [
                'https://www.linkedin.com/company/ahana-technology',
                'https://twitter.com/ahanatechnology',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['English'],
              },
              areaServed: 'Worldwide',
              serviceType: [
                'Intelligent Automation',
                'Cloud Infrastructure',
                'Data Analytics',
                'AI Solutions',
                'Enterprise Integration',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
