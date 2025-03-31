"use client"
import { motion } from "framer-motion"
import { Trophy, Gift, Package, ArrowRight, Award, Briefcase, Check, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import BrandRibbon from "../components/BrandRibbon"
import ClientTestimonials from "../components/ClientTestimonials"
import CounterAnimation from "../components/CounterAnimation"
import TypeWriter from "../components/TypeWriter"

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [showTypewriter, setShowTypewriter] = useState(false)

  useEffect(() => {
    // Delay the typewriter effect to make it more noticeable
    const timer = setTimeout(() => {
      setShowTypewriter(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { icon: Trophy, name: "Trophies", description: "Premium quality trophies for all occasions" },
    { icon: Gift, name: "Corporate Gifts", description: "Exclusive corporate gifting solutions" },
    { icon: Package, name: "Promotional Items", description: "Custom promotional merchandise" },
  ]

  const featuredProducts = [
    {
      name: "Executive Crystal Award",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
      price: "₹2,999 onwards",
      description: "Premium crystal award with custom engraving",
      moq: 5,
      features: [
        "Optical crystal construction",
        "Custom laser engraving",
        "Presentation box included",
        "Multiple size options",
      ],
    },
    {
      name: "Premium Gift Set",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
      price: "₹4,999 onwards",
      description: "Luxury corporate gift set with premium items",
      moq: 10,
      features: ["Leather portfolio", "Executive pen set", "Wireless charger", "Custom branding"],
    },
    {
      name: "Championship Trophy",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
      price: "₹3,999 onwards",
      description: "Prestigious metal trophy for special achievements",
      moq: 3,
      features: ["Premium metal construction", "Custom nameplate", "Multiple finish options", "Wooden base included"],
    },
  ]

  const services = [
    {
      icon: Award,
      title: "Custom Design",
      description:
        "Work with our design team to create unique, personalized awards and gifts that perfectly represent your brand.",
    },
    {
      icon: Briefcase,
      title: "Corporate Programs",
      description:
        "Comprehensive corporate gifting programs tailored to your organization's recognition and rewards needs.",
    },
    {
      icon: Package,
      title: "Bulk Orders",
      description:
        "Special pricing and dedicated support for large volume orders with consistent quality and timely delivery.",
    },
  ]

  const partners = [
    {
      name: "Microsoft",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Google",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Apple",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Amazon",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "IBM",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Intel",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
  ]

  const brands = [
    {
      name: "Van Heusen",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Allen Solly",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Adidas",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Diesel",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
    {
      name: "Gradio",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
    },
  ]

  const handleWhatsAppQuote = (product: any) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${product.name}. Please share me quotation.`)
    window.open(`https://wa.me/917506465298?text=${message}`, "_blank")
  }

  const handleEmailQuote = (product: any) => {
    const subject = encodeURIComponent(`Quote Request: ${product.name}`)
    const body = encodeURIComponent(`Hi,\n\nI'm interested in ${product.name}. Please share me quotation.\n\nThank you`)
    window.location.href = `mailto:sgassociates.mumbai@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50" />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Blob Shapes */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-blue-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 -ml-40 -mb-40">
          <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa28"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-indigo-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa28)" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center z-10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Elevate Your Corporate Image</h1>
            <p className="text-xl text-gray-200 mb-8">
              Premium corporate gifts and promotional items for your business
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <CounterAnimation end={1000} duration={2000} suffix="+" />
                <p className="mt-2 text-gray-600">Products</p>
              </div>
              <div className="text-center">
                <CounterAnimation end={500} duration={2000} suffix="+" />
                <p className="mt-2 text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <CounterAnimation end={15} duration={2000} suffix="+" />
                <p className="mt-2 text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <CounterAnimation end={2000} duration={2000} suffix="+" />
                <p className="mt-2 text-gray-600">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600">Discover our most popular premium offerings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  </div>
                  <div className="flex space-x-4 mb-4">
                    <button
                      onClick={() => handleWhatsAppQuote(product)}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                    >
                      WhatsApp Quote
                    </button>
                    <button
                      onClick={() => handleEmailQuote(product)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Email Quote
                    </button>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600">Comprehensive solutions for all your corporate needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md text-center"
              >
                <service.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Product Categories</h2>
            <p className="text-gray-600">Discover our wide range of premium products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <category.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Partners Ribbon */}
      <div className="relative z-10">
        <BrandRibbon title="Our Brand Partners" brands={brands} />
      </div>

      {/* Slogan with Typewriter Effect */}
      <section className="py-12 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {showTypewriter ? (
            <TypeWriter
              text="Precision Gifts, Elevating Business Brilliance."
              speed={80}
              className="text-3xl md:text-4xl font-bold text-blue-600"
            />
          ) : (
            <div className="text-3xl md:text-4xl font-bold text-blue-600 h-[40px]"></div>
          )}
        </div>
      </section>

      {/* Partner Logos Ribbon */}
      <div className="relative z-10">
        <BrandRibbon title="Trusted by Leading Companies" brands={partners} />
      </div>

      {/* Client Testimonials Section */}
      <div className="relative z-10">
        <ClientTestimonials />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Corporate Gifting?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us today for personalized solutions</p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>
              <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{selectedProduct.price}</span>
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">MOQ:</span> {selectedProduct.moq}{" "}
                    {selectedProduct.moq === 1 ? "unit" : "units"}
                  </div>

                  {selectedProduct.features && selectedProduct.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex space-x-4 mt-6">
                    <button
                      onClick={() => handleWhatsAppQuote(selectedProduct)}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                    >
                      WhatsApp Quote
                    </button>
                    <button
                      onClick={() => handleEmailQuote(selectedProduct)}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Email Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

