import { useState } from "react";
import { Menu, X, Activity } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#benefits", label: "Benefits" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#pricing", label: "Pricing" }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo with Icon */}
          <div className="flex items-center space-x-3 group cursor-pointer flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              CalTrack
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center max-w-md mx-8">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium text-gray-700 rounded-lg transition-all duration-300 hover:text-green-600 hover:bg-green-50 group whitespace-nowrap ${
                    activeLink === link.href ? "text-green-600 bg-green-50" : ""
                  }`}
                  onMouseEnter={() => setActiveLink(link.href)}
                  onMouseLeave={() => setActiveLink("")}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            <a
              href="/signin"
              className="relative px-4 py-2 text-sm font-semibold text-gray-700 rounded-lg hover:text-green-600 transition-all duration-300 hover:bg-gray-50 group whitespace-nowrap"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
            <a
              href="/signup"
              className="relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden whitespace-nowrap"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? (
                <X size={24} className="text-gray-700 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu size={24} className="text-gray-700 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:text-green-600 hover:bg-green-50 transition-all duration-200 transform hover:translate-x-1"
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <a
              href="/signin"
              className="block px-4 py-3 text-sm font-semibold text-gray-700 rounded-lg hover:text-green-600 hover:bg-gray-50 transition-all duration-200 text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="block px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-semibold rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}