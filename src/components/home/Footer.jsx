import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Reviews",
      link: "/reviews",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <h2 className="text-2xl font-bold">Darkft</h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Discover our carefully curated collection of premium mobile
              accessories designed to elevate your device and enhance your
              everyday experience.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Trusted by 50,000+ customers
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              {Links.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="block text-gray-300 hover:text-green-500 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm">
                Have questions? We're here to help you find the perfect
                accessories for your device.
              </p>
              <div className="space-y-2">
                <p className="text-sm">Available on:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Amazon
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    Flipkart
                  </span>
                  <span className="px-2 py-1 bg-gray-700 rounded text-xs">
                    darkfit.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shop Now CTA */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">
              Ready to Elevate Your Device?
            </h3>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
            >
              Shop Now
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Darkft. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-green-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-green-500 transition-colors duration-200"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
