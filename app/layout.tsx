import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords.join(', '),
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: `https://${siteConfig.subdomain}`,
    siteName: `Surf Lessons ${siteConfig.beachName}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Surf Lessons ${siteConfig.beachName}`,
    "description": siteConfig.seo.description,
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.location,
      "addressCountry": "ID"
    },
    "priceRange": "IDR 500,000 - 750,000",
    "areaServed": siteConfig.beachName
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-primary">
                  {siteConfig.beachName} Surf
                </a>
              </div>
              <div className="flex items-center space-x-8">
                <a href="/" className="text-gray-700 hover:text-primary transition">Home</a>
                <a href="/about" className="text-gray-700 hover:text-primary transition">About</a>
                <a href="/pricing" className="text-gray-700 hover:text-primary transition">Pricing</a>
                <a href="/contact" className="text-gray-700 hover:text-primary transition">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Surf Lessons {siteConfig.beachName}</h3>
                <p className="text-gray-400">Professional surf instruction in Bali's beautiful {siteConfig.beachName}.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact</h3>
                <p className="text-gray-400">Phone: {siteConfig.contact.phone}</p>
                <p className="text-gray-400">Email: {siteConfig.contact.email}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/" className="block text-gray-400 hover:text-white transition">Home</a>
                  <a href="/about" className="block text-gray-400 hover:text-white transition">About</a>
                  <a href="/pricing" className="block text-gray-400 hover:text-white transition">Pricing</a>
                  <a href="/contact" className="block text-gray-400 hover:text-white transition">Contact</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Surf Lessons {siteConfig.beachName}. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
