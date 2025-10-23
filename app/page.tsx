import { siteConfig } from '@/site.config'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-surf.jpg"
            alt="Surfing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Surf Lessons at {siteConfig.beachName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the thrill of surfing in Bali's stunning {siteConfig.beachName} with professional instructors
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-sand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition"
            >
              Book Your Lesson
            </a>
            <a
              href="/pricing"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Meet Jack Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/jack-profile.jpg"
                alt="Jack - Surf Instructor"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Hey, I'm Jack</h2>
              <p className="text-lg text-gray-700 mb-2">Owner of Bali Bisa Surf School.</p>
              <p className="text-gray-600 mb-4">
                Bali Bisa Surf School is based on Dreamland Beach, a beautiful area suitable for all levels of surfing and offers spectacular views along the coast from Dreamland Beach to Balangan. We really enjoy what we do, share our love of the sea, and help beginner surfers and intermediate surfers improve their skills.
              </p>
              <p className="text-gray-600 font-semibold">
                Join our qualified and friendly staff for the best surfing experience you'll ever have and let us take your surfing skills to the next level.
              </p>
              <p className="text-xl font-bold mt-4 text-cyan-600">
                Enjoy the Waves, Surf Like a Pro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Beach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Surf at {siteConfig.beachName}?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {siteConfig.about.beach}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Instructors</h3>
              <p className="text-gray-600">Certified surf instructors with years of experience teaching all skill levels.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">All equipment provided and comprehensive safety briefings before every lesson.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-ocean rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect Conditions</h3>
              <p className="text-gray-600">{siteConfig.about.conditions}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lesson Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect package for your skill level</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.pricing.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">IDR {pkg.price}</span>
                  <span className="text-gray-600 ml-2">/ {pkg.duration}</span>
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
                  className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-sky-700 transition"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Google Reviews</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-3">a month ago</p>
              <p className="text-gray-700">
                Jack is a legend! We stayed at a friends villa and she recommended Jack for surf lessons for my 8 and 10 year old boys. The boys loved the experience and picked up surfing so quickly with Jack's instruction and encouragement.
              </p>
              <p className="font-semibold mt-4">- Hilal Ayhan</p>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-3">2 months ago</p>
              <p className="text-gray-700">
                Jack is an amazing instructor! He was very patient and made the experience comfortable for beginners while also catering to more advanced surfers. His English is excellent and instructions are very clear.
              </p>
              <p className="font-semibold mt-4">- Eva Roorda</p>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mb-3">1 month ago</p>
              <p className="text-gray-700">
                Best surf lessons I've ever had! Jack's 1-on-1 approach is way better than group surf camps. He really knows how to read the waves and put you in the right position. Highly recommend!
              </p>
              <p className="font-semibold mt-4">- Jon Ward</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Catch Your First Wave?</h2>
          <p className="text-xl mb-8">
            Book your surf lesson today and experience the beauty of {siteConfig.beachName} from the water!
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-block bg-sand text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition"
            >
              Book Your Lesson
            </a>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
