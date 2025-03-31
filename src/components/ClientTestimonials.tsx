"use client"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
      content:
        "S.G Associates has been instrumental in helping us create meaningful corporate gifts that truly represent our brand values.",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, Global Inc",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
      content:
        "The quality of products and attention to detail is exceptional. Our clients love the personalized touch in every gift.",
    },
    {
      name: "Michael Chen",
      role: "HR Manager, Innovation Labs",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
      content:
        "Working with S.G Associates has made our employee recognition program much more impactful and meaningful.",
    },
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientTestimonials

