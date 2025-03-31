"use client"
import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

interface Category {
  name: string
  description: string
  products: Array<{
    name: string
    image: string | string[]
    description: string
    moq?: number
    price?: string
    features?: string[]
  }>
}

const CategorySection = ({ category }: { category: Category }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
          <p className="mt-4 text-gray-600">{category.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              description={product.description}
              category={category.name}
              moq={product.moq}
              price={product.price}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategorySection

