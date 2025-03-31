"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface Category {
  name: string
  subcategories: string[]
}

interface ProductSidebarProps {
  categories: Category[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
  isOpen: boolean
  onToggle: () => void
}

const ProductSidebar = ({ categories, selectedCategory, onSelectCategory, isOpen, onToggle }: ProductSidebarProps) => {
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-20 left-4 z-50 bg-blue-600 text-white p-2 rounded-md flex items-center"
        onClick={onToggle}
      >
        <ChevronDown className={`h-5 w-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`} />
        <span className="ml-2">Categories</span>
      </button>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: isOpen ? 0 : "-100%",
          width: isOpen ? "100%" : "0%",
        }}
        className={`fixed lg:static top-0 left-0 h-screen lg:h-auto bg-white z-40 lg:block shadow-lg lg:shadow-md rounded-lg
          ${isOpen ? "block" : "hidden"} lg:w-full overflow-y-auto`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <button
                  onClick={() => {
                    onSelectCategory(category.name)
                    if (window.innerWidth < 1024) onToggle()
                  }}
                  className={`w-full text-left font-medium px-3 py-2 rounded-md transition-colors
                    ${selectedCategory === category.name ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
                >
                  {category.name}
                </button>
                {category.subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => {
                      onSelectCategory(sub)
                      if (window.innerWidth < 1024) onToggle()
                    }}
                    className={`w-full text-left text-sm pl-6 py-1.5 rounded-md transition-colors
                      ${selectedCategory === sub ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={onToggle} />}
    </>
  )
}

export default ProductSidebar

