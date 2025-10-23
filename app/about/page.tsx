import { siteConfig } from '@/site.config'

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-primary to-ocean text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About {siteConfig.beachName}</h1>
          <p className="text-xl">Discover one of Bali's hidden surfing gems</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Beach</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.about.beach}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Surf Conditions</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.about.conditions}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Instructors</h2>
            <p className="text-gray-600 mb-6">
              Our team of certified surf instructors brings years of experience and a passion for teaching.
              We understand that every student is unique, and we tailor our lessons to match your skill level,
              goals, and comfort in the water.
            </p>
            <p className="text-gray-600 mb-6">
              All instructors are ISA (International Surfing Association) certified and trained in water safety,
              first aid, and CPR. Your safety and enjoyment are our top priorities.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What We Provide</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>High-quality surfboards suitable for all skill levels</li>
              <li>Rash guards and safety equipment</li>
              <li>Comprehensive insurance coverage</li>
              <li>Professional photography (optional add-on)</li>
              <li>Post-lesson feedback and improvement tips</li>
              <li>Beach facilities access</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Location</h2>
            <p className="text-gray-600 mb-6">
              {siteConfig.beachName} is located in {siteConfig.location}. We meet directly at the beach,
              with easy parking available nearby. Detailed directions will be provided upon booking.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Surfing Journey?</h2>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-sky-700 transition"
          >
            Book Your First Lesson
          </a>
        </div>
      </section>
    </main>
  )
}
