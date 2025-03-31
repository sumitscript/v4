"use client"
import { motion } from "framer-motion"

interface BrandRibbonProps {
  title: string
  brands: Array<{
    name: string
    logo: string
  }>
}

const BrandRibbon = ({ title, brands }: BrandRibbonProps) => {
  return (
    <div className="relative bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">{title}</h2>
        <div className="relative">
          {/* Fade overlay left */}
          <div className="absolute left-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-white to-transparent z-10" />

          {/* Fade overlay right */}
          <div className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex space-x-12 animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="h-16 w-auto object-contain" />
                <p className="text-sm text-gray-600 text-center mt-2">{brand.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default BrandRibbon

