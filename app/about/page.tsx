import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Sparkles, Award, Users } from "lucide-react"
import sofia from '../../public/images/sofia.jpg'
import david from '../../public/images/david.jpg'
import emma from '../../public/images/emma.jpg'

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />

      {/* Header */}
      <header className="bg-[#FAF8F5] py-20 text-center px-6">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">About Elegance Events</h1>
        <p className="text-gray-600 text-xl font-light">Crafting extraordinary experiences since 2010</p>
      </header>

      {/* Our Story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Elegance Events was founded with a simple yet powerful vision: to transform ordinary moments into
                extraordinary memories. What started as a passion project has grown into a premier event planning
                company trusted by clients across the region.
              </p>
              <p>
                With over a decade of experience, we&apos;ve planned hundreds of events, from intimate gatherings to
                grand celebrations. Each event is unique, and we pride ourselves on our ability to understand our
                clients&apos; visions and bring them to life with creativity and precision.
              </p>
              <p>
                Our team of dedicated professionals brings expertise in design, logistics, and hospitality to ensure
                every detail is perfect. We believe that the best events are those that reflect the personality and
                style of our clients.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/about.jpg" alt="Elegant conference hall setup" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center text-gray-900 mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Passion */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5EFE6] flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We pour our hearts into every event, ensuring each detail reflects our dedication to excellence.
              </p>
            </div>

            {/* Creativity */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5EFE6] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Creativity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Innovation and originality drive our designs, creating unique experiences that stand out.
              </p>
            </div>

            {/* Excellence */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5EFE6] flex items-center justify-center">
                <Award className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We maintain the highest standards in everything we do, from planning to execution.
              </p>
            </div>

            {/* Partnership */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#F5EFE6] flex items-center justify-center">
                <Users className="w-8 h-8 text-[#C9A961]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We work closely with our clients, building relationships based on trust and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            Our talented team of event planners, designers, and coordinators work together to create seamless
            experiences. With diverse backgrounds and years of expertise, we bring fresh ideas and flawless execution to
            every project.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 - Emma */}
            <div className="border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#F5EFE6] relative overflow-hidden">
                <Image
                  src={emma}
                  alt="Emma Richardson"
                  fill
                  className="object-cover object-top"
                  style={{ objectPosition: "50% 15%" }}
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">Emma Richardson</h3>
              <p className="text-gray-500 text-sm mb-4">Founder & Lead Planner</p>
              <p className="text-gray-600 text-sm">15+ years of experience</p>
            </div>

            {/* Team Member 2 - David */}
            <div className="border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#F5EFE6] relative overflow-hidden">
                <Image
                  src={david}
                  alt="David Chen"
                  fill
                  className="object-cover object-top"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">David Chen</h3>
              <p className="text-gray-500 text-sm mb-4">Creative Director</p>
              <p className="text-gray-600 text-sm">Award-winning designer</p>
            </div>

            {/* Team Member 3 - Sofia */}
            <div className="border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#F5EFE6] relative overflow-hidden">
                <Image
                  src={sofia}
                  alt="Sofia Martinez"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 15%" }}
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-1">Sofia Martinez</h3>
              <p className="text-gray-500 text-sm mb-4">Event Coordinator</p>
              <p className="text-gray-600 text-sm">Logistics expert</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
