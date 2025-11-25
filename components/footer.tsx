import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#3D2817] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Elegance Events</h3>
            <p className="text-gray-300 text-sm mb-2">Creating unforgettable moments since 2010.</p>
            <p className="text-gray-300 text-sm">Your vision, our expertise.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="text-gray-300 hover:text-white">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Wedding Planning</li>
              <li className="text-gray-300">Corporate Events</li>
              <li className="text-gray-300">Social Occasions</li>
              <li className="text-gray-300">Event Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>(555) 123-4567</li>
              <li>hello@eleganceevents.com</li>
              <li>123 Event Plaza, Suite 200</li>
              <li>Downtown, CA 90210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 Elegance Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
