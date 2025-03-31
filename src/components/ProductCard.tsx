"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, ChevronLeft, ChevronRight, X } from "lucide-react"

interface ProductCardProps {
  name: string
  image: string | string[]
  description: string
  category: string
  moq?: number
  price?: string
  features?: string[]
}

const ProductCard = ({ name, image, description, category, moq = 1, price, features = [] }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const images = Array.isArray(image) ? image : [image]

  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent(`Hi, I'm interested in ${name}. Please share me quotation.`)
    window.open(`https://wa.me/917506465298?text=${message}`, "_blank")
  }

  const handleEmailQuote = () => {
    const subject = encodeURIComponent(`Quote Request: ${name}`)
    const body = encodeURIComponent(`Hi,\n\nI'm interested in ${name}. Please share me quotation.\n\nThank you`)
    window.location.href = `mailto:sgassociates.mumbai@gmail.com?subject=${subject}&body=${body}`
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="h-64 overflow-hidden relative">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>

              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 w-2 rounded-full ${idx === currentImageIndex ? "bg-blue-600" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <h3 className="text-xl font-semibold mt-2 mb-3">{name}</h3>
          <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>

          <div className="flex space-x-4 mb-4">
            <button
              onClick={handleWhatsAppQuote}
              className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              WhatsApp Quote
            </button>
            <button
              onClick={handleEmailQuote}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Email Quote
            </button>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            View Details
          </button>
        </div>
      </motion.div>

      {/* Product Detail Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold">{name}</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="relative">
                    <img
                      src={images[currentImageIndex] || "/placeholder.svg"}
                      alt={name}
                      className="w-full h-auto rounded-lg"
                    />

                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
                        >
                          <ChevronLeft className="h-6 w-6 text-gray-800" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-all"
                        >
                          <ChevronRight className="h-6 w-6 text-gray-800" />
                        </button>

                        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`h-2 w-2 rounded-full ${idx === currentImageIndex ? "bg-blue-600" : "bg-gray-300"}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 mb-4">{description}</p>

                  {price && (
                    <div className="mb-2">
                      <span className="font-semibold">Price:</span> {price}
                    </div>
                  )}

                  <div className="mb-4">
                    <span className="font-semibold">MOQ:</span> {moq} {moq === 1 ? "unit" : "units"}
                  </div>

                  {features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {features.map((feature, idx) => (
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
                      onClick={handleWhatsAppQuote}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                    >
                      WhatsApp Quote
                    </button>
                    <button
                      onClick={handleEmailQuote}
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
    </>
  )
}

export default ProductCard

