import { siteConfig } from '@/site.config'

export default function Pricing() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-primary to-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Pricing & Packages</h1>
          <p className="text-xl">Affordable surf lessons for every skill level</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.pricing.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-8 ${
                  index === 1 ? 'ring-4 ring-primary transform scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="bg-primary text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">IDR {pkg.price}</span>
                  <span className="text-gray-600 ml-2 block text-sm mt-1">{pkg.duration} lesson</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-bold transition ${
                    index === 1
                      ? 'bg-primary text-white hover:bg-sky-700'
                      : 'bg-gray-100 text-primary hover:bg-gray-200'
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p><strong>Flexible Scheduling:</strong> Lessons available daily from 7:00 AM to 5:00 PM</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p><strong>Group Discounts:</strong> 10% off for groups of 3 or more</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <p><strong>Payment Options:</strong> Cash, bank transfer, or credit card accepted</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-primary mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <p><strong>Cancellation Policy:</strong> Free cancellation up to 24 hours before your lesson</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
