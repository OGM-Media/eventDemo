import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#FAF8F5] py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl mb-4 text-gray-900">Our Services</h1>
          <p className="text-gray-600 text-lg">Comprehensive event planning solutions tailored to your needs</p>
        </div>
      </section>

      {/* Wedding Planning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-4 text-gray-900">Wedding Planning</h2>
              <p className="text-gray-600 mb-6">Complete wedding planning services to make your special day perfect.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Full-service wedding planning & coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Venue selection & contract negotiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Vendor sourcing & management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Design & decor consultation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Timeline creation & day-of coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Budget management & tracking</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/bride-holding-wedding-bouquet-with-sparklers-at-ev.jpg" alt="Wedding Planning" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden order-2 md:order-1">
              <Image src="/elegant-conference-banquet-hall-with-round-tables-.jpg" alt="Corporate Events" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl mb-4 text-gray-900">Corporate Events</h2>
              <p className="text-gray-600 mb-6">
                Professional events that elevate your brand and engage your audience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Conference & seminar planning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Product launch events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Team building activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Annual galas & award ceremonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Trade show coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Virtual & hybrid event management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Celebrations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-4 text-gray-900">Social Celebrations</h2>
              <p className="text-gray-600 mb-6">Personalized parties and gatherings for life's special moments.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Birthday parties & milestones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Anniversary celebrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Engagement & bridal showers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Graduation parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Retirement parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Holiday gatherings</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/colorful-party-balloons-ceiling-decoration-celebra.jpg" alt="Social Celebrations" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Event Design & Styling */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden order-2 md:order-1">
              <Image src="/elegant-event-table-setting-with-blue-and-white-de.jpg" alt="Event Design & Styling" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl mb-4 text-gray-900">Event Design & Styling</h2>
              <p className="text-gray-600 mb-6">Creative design services to bring your vision to life.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Color palette & theme development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Custom decor & arrangements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Lighting design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Custom signage & stationery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Furniture & decor rentals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Selection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl mb-4 text-gray-900">Venue Selection</h2>
              <p className="text-gray-600 mb-6">Finding the perfect location for your event.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Personalized venue recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Site visits & walkthroughs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Contract review & negotiation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Floor plan development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Backup venue options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Accessibility assessment</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image src="/woman-in-elegant-pink-dress-outdoors-mountain-scen.jpg" alt="Venue Selection" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Coordination */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-lg overflow-hidden order-2 md:order-1">
              <Image src="/event-planning-workspace-with-laptop-tablet-docume.jpg" alt="Vendor Coordination" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-serif text-3xl mb-4 text-gray-900">Vendor Coordination</h2>
              <p className="text-gray-600 mb-6">Managing relationships with trusted vendors and suppliers.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Vendor sourcing & vetting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Contract management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Timeline coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Day-of vendor management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Payment processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A961] mt-1">✓</span>
                  <span className="text-gray-600">Quality control & oversight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-[#F5EFE7]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-4xl text-center mb-12 text-gray-900">Our Process</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Initial Consultation</h3>
                <p className="text-gray-600">
                  We start with a detailed conversation to understand your vision, preferences, and budget.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Concept Development</h3>
                <p className="text-gray-600">
                  Our team creates a custom concept with design boards, timelines, and vendor recommendations.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Planning & Coordination</h3>
                <p className="text-gray-600">
                  We handle all logistics, coordination, confirmations, and details leading up to your event.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A961] flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">Event Execution</h3>
                <p className="text-gray-600">
                  On the day of your event, we manage every aspect so you can relax and enjoy the moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
