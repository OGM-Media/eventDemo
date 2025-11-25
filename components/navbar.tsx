import Link from "next/link"

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A961] flex items-center justify-center">
              <span className="text-white font-semibold text-lg font-serif">É</span>
            </div>
            <span className="font-medium text-gray-800">Élégance Events</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-600 hover:text-[#C9A961] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-[#C9A961] font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-[#C9A961] font-medium transition-colors">
              Services
            </Link>
            <Link href="/packages" className="text-gray-600 hover:text-[#C9A961] font-medium transition-colors">
              Packages
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#C9A961] font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
