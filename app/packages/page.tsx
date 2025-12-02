import { Check, X } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#FAF8F5] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Our Packages</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexible planning packages designed to fit your needs and budget
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Essential Package */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Essential</h3>
                <div className="text-4xl font-serif text-[#C9A961] mb-2">$2,500</div>
                <p className="text-sm text-gray-500">Perfect for intimate gatherings and simple celebrations</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Up to 50 guests</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>4 hours of planning consultation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Vendor recommendations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Basic timeline creation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Day-of coordination (4 hours)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Email & phone support</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Custom design concepts</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Venue selection assistance</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Vendor contract negotiation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Unlimited revisions</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-[#C9A961] text-[#C9A961] rounded hover:bg-[#C9A961] hover:text-white transition-colors font-medium">
                Get Started
              </button>
            </div>

            {/* Premium Package */}
            <div className="bg-white border-2 border-[#C9A961] rounded-lg p-8 relative shadow-lg transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A961] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Premium</h3>
                <div className="text-4xl font-serif text-[#C9A961] mb-2">$5,500</div>
                <p className="text-sm text-gray-500">Comprehensive planning for memorable events</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Up to 150 guests</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Unlimited planning consultations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Vendor sourcing & management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Custom design concept</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Venue selection assistance</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Detailed timeline & checklists</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Budget management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Day-of coordination (8 hours)</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Rehearsal coordination</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Email, phone & in-person support</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Destination event planning</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-400">
                  <X className="w-5 h-5 shrink-0" />
                  <span>Custom rentals & décor</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-[#C9A961] text-white rounded hover:bg-[#b09350] transition-colors font-medium">
                Get Started
              </button>
            </div>

            {/* Luxury Package */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl text-gray-900 mb-4">Luxury</h3>
                <div className="text-4xl font-serif text-[#C9A961] mb-2">$10,000+</div>
                <p className="text-sm text-gray-500">Full-service planning for extraordinary celebrations</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Unlimited guests</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Unlimited planning consultations</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Full vendor sourcing & management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Custom design & styling</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Venue selection & negotiation</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Complete budget management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Guest list management</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>RSVP tracking</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Invitation design coordination</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Multiple site visits</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Rehearsal coordination</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Full day-of coordination</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Weekend coordination available</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Post-event follow-up</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>Dedicated planning team</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <Check className="w-5 h-5 text-[#C9A961] shrink-0" />
                  <span>24/7 support</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-[#C9A961] text-[#C9A961] rounded hover:bg-[#C9A961] hover:text-white transition-colors font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">Add-On Services</h2>
            <p className="text-gray-600">Enhance your package with these additional services</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg flex justify-between items-center">
              <span className="text-gray-800 font-medium">Additional Planning Hours</span>
              <span className="text-[#C9A961] font-semibold">$150/hour</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex justify-between items-center">
              <span className="text-gray-800 font-medium">Extra Coordination Staff</span>
              <span className="text-[#C9A961] font-semibold">$75/hour per person</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex justify-between items-center">
              <span className="text-gray-800 font-medium">Custom Design Consultation</span>
              <span className="text-[#C9A961] font-semibold">$500</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex justify-between items-center">
              <span className="text-gray-800 font-medium">Guest List Management</span>
              <span className="text-[#C9A961] font-semibold">$300</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex justify-between items-center">
              <span className="text-gray-800 font-medium">Invitation Design & Coordination</span>
              <span className="text-[#C9A961] font-semibold">$750</span>
            </div>
            <div className="bg-white p-6 rounded-lg flex justify-between items-center">
              <span className="text-gray-800 font-medium">Rehearsal Dinner Planning</span>
              <span className="text-[#C9A961] font-semibold">$1,200</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-6">Need a Custom Package?</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Every event is unique, and we're happy to create a custom package tailored specifically to your needs and
            budget. Contact us to discuss your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#C9A961] text-white rounded hover:bg-[#b09350] transition-colors font-medium"
          >
            Request Custom Quote
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">What's included in day-of coordination?</h3>
              <p className="text-gray-600 leading-relaxed">
                Day-of coordination includes managing vendors, overseeing setup, handling the timeline, troubleshooting
                issues, and ensuring everything runs smoothly so you can enjoy your event stress-free.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Can I upgrade my package later?</h3>
              <p className="text-gray-600 leading-relaxed">
                You can upgrade your package at any time during the planning process, or add individual services as
                needed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Do you require a deposit?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we require a 50% deposit to secure your date, with the remaining balance due 30 days before your
                event.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">How far in advance should I book?</h3>
              <p className="text-gray-600 leading-relaxed">
                We recommend booking 6-12 months in advance for weddings and large events, though we can accommodate
                shorter timelines depending on availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}
