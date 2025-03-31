import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.png" alt="S.G Associates Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400">Precision Gifts, Elevating Business Brilliance.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Trophies & Awards</li>
              <li className="text-gray-400">Corporate Gifts</li>
              <li className="text-gray-400">Promotional Items</li>
              <li className="text-gray-400">Office Stationery</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <a href="tel:+917506465298" className="hover:text-white transition-colors">
                  +91 7506465298
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <a href="mailto:sgassociates.mumbai@gmail.com" className="hover:text-white transition-colors">
                  sgassociates.mumbai@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>
                  G-24 Siddhik Mohammad, Gaondevi Road, Near Sai Baba Mandir, Poisar Kandivali (E) Mumbai - 400101
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} S.G Associates. All rights reserved.</p>
          <p className="mt-2">
            Made with ❤️ by{" "}
            <a
              href="https://wa.me/8756365339"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Suditya Group
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

