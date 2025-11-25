import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#1C1C1C] mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg">Let's start planning your perfect event together</p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl text-[#1C1C1C] mb-8">Get In Touch</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-0 py-2 bg-transparent border-b border-gray-300 focus:border-[#C9A961] outline-none transition-colors placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-0 py-2 bg-transparent border-b border-gray-300 focus:border-[#C9A961] outline-none transition-colors placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-0 py-2 bg-transparent border-b border-gray-300 focus:border-[#C9A961] outline-none transition-colors placeholder-gray-400"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  className="w-full px-0 py-2 bg-transparent border-b border-gray-300 focus:border-[#C9A961] outline-none transition-colors text-gray-600"
                >
                  <option value="">Select type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="social">Social Celebration</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-300 focus:border-[#C9A961] outline-none transition-colors text-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Guest Count
                  </label>
                  <input
                    type="text"
                    id="guests"
                    className="w-full px-0 py-2 bg-transparent border-b border-gray-300 focus:border-[#C9A961] outline-none transition-colors placeholder-gray-400"
                    placeholder="Approx. number"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Event *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-0 py-2 bg-transparent border-b border-gray-300 focus:border-[#C9A961] outline-none transition-colors placeholder-gray-400 resize-none"
                  placeholder="Share your vision, preferences, and any special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A961] text-white px-6 py-3 rounded hover:bg-[#B8984E] transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <h2 className="font-serif text-3xl text-[#1C1C1C] mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 text-[#C9A961]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-[#1C1C1C] font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri, 9am-6pm</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 text-[#C9A961]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-[#1C1C1C] font-medium mb-1">Email</h3>
                  <p className="text-gray-600">hello@eleganceevents.com</p>
                  <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-[#F5F0E8] flex items-center justify-center flex-shrink-0 text-[#C9A961]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl text-[#1C1C1C] font-medium mb-1">Office</h3>
                  <p className="text-gray-600">
                    123 Event Plaza, Suite 200
                    <br />
                    Downtown, CA 90210
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F0E8] p-8 rounded-lg mt-8">
              <h3 className="text-xl text-[#1C1C1C] mb-6">Office Hours</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>

            <div className="border border-[#F5F0E8] p-8 rounded-lg bg-white">
              <h3 className="text-xl text-[#1C1C1C] mb-4">Schedule a Consultation</h3>
              <p className="text-gray-600 mb-4">
                Prefer to meet in person? We offer complimentary initial consultations at our office or a location of
                your choice.
              </p>
              <p className="text-sm text-gray-500 italic">
                Mention "website inquiry" when you contact us for a special gift!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-sm">
          <iframe
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086542490009!2d-122.42163222342765!3d37.774929679759404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1732223333333"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  )
}
