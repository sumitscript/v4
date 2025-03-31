"use client"
import { motion } from "framer-motion"

const PartnerLogos = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1583418855871-c6f838e6e336?w=200&h=100&fit=crop&q=80",
    },
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop&q=80",
    },
    {
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=100&fit=crop&q=80",
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop&q=80",
    },
    {
      name: "IBM",
      logo: "https://images.unsplash.com/photo-1569017388730-020b5f80a004?w=200&h=100&fit=crop&q=80",
    },
    {
      name: "Intel",
      logo: "https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?w=200&h=100&fit=crop&q=80",
    },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Leading Companies</h2>
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />
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

export default PartnerLogos

