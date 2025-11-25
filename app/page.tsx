"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Weddings",
      subtitle: "Creating Unforgettable Moments",
      image: "/images/wedding.jpg",
    },
    {
      title: "Celebrations",
      subtitle: "Joyful Memories",
      image: "/images/celebration.jpg",
    },
    {
      title: "Corporate Events",
      subtitle: "Professional Impressions",
      image: "/images/corporateevents.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />

      {/* Hero Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentSlide === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="text-xl md:text-2xl">{slides[currentSlide].subtitle}</p>
          </div>
        </div>

        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Welcome to Elegance Events</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            We specialize in creating extraordinary events that leave lasting impressions. From intimate gatherings to
            grand celebrations, we bring your vision to life with elegance and precision.
          </p>
          <Link href="/contact">
            <button className="bg-[#C9A961] text-white px-8 py-3 rounded-md hover:bg-[#B8984E] transition-colors font-medium">
              Start Planning Your Event
            </button>
          </Link>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">Our Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Weddings Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Weddings</h3>
              <p className="text-gray-600 leading-relaxed">
                From ceremony to reception, we handle every detail of your special day with care and sophistication.
              </p>
            </div>

            {/* Celebrations Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Celebrations</h3>
              <p className="text-gray-600 leading-relaxed">
                Birthday parties, anniversaries, and milestone events designed to create joyful memories.
              </p>
            </div>

            {/* Corporate Events Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg className="w-12 h-12 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Corporate Events</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional events that impress clients and inspire teams, from conferences to galas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A961] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                &ldquo;Elegance Events made our wedding absolutely perfect. Every detail was thoughtfully planned and
                executed flawlessly. We couldn&apos;t have asked for better!&rdquo;
              </p>
              <p className="font-semibold text-gray-900">— Sarah & Michael</p>
            </div>

            {/* Testimonial 2 */}
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A961] fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                &ldquo;Professional, creative, and attentive. Our corporate event was a huge success thanks to their
                expertise and dedication.&rdquo;
              </p>
              <p className="font-semibold text-gray-900">— Jennifer L., CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Plan Your Event?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Let&apos;s bring your vision to life. Contact us today for a consultation.
          </p>
          <Link href="/contact">
            <button className="bg-[#C9A961] text-white px-8 py-3 rounded-md hover:bg-[#B8984E] transition-colors font-medium">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
