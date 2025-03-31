"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import CategorySection from "../components/CategorySection"
import ProductSidebar from "../components/ProductSidebar"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const categories = [
    {
      name: "Apparels",
      subcategories: ["Corporate Uniforms", "Executive Suits", "Casual Wear"],
      description: "Premium branded clothing and accessories",
      products: [
        {
          name: "Executive Suit Collection",
          image: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          ],
          description:
            "Premium suits from top brands like Van Heusen and Allen Solly, perfect for corporate executives and business professionals.",
          moq: 5,
          price: "₹8,999 onwards",
          features: [
            "Premium fabric quality",
            "Custom tailoring available",
            "Multiple color options",
            "Corporate branding options",
          ],
        },
        {
          name: "Corporate Uniforms",
          image: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          ],
          description:
            "Customized uniforms for your entire organization with options for different departments and roles.",
          moq: 20,
          price: "₹1,499 onwards",
          features: ["Durable fabric construction", "Custom embroidery", "Size customization", "Bulk order discounts"],
        },
      ],
    },
    {
      name: "Cosmetics",
      subcategories: ["Skincare", "Makeup", "Gift Sets"],
      description: "Premium cosmetic products for corporate gifting",
      products: [
        {
          name: "Luxury Skincare Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium skincare collection perfect for executive gifts and corporate rewards.",
          moq: 10,
          price: "₹2,999 onwards",
          features: ["Natural ingredients", "Elegant packaging", "Custom branding available", "Gift wrapping options"],
        },
        {
          name: "Executive Makeup Kit",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Professional makeup collection in elegant packaging for corporate gifting.",
          moq: 5,
          price: "₹3,499 onwards",
          features: [
            "Premium quality products",
            "Elegant carrying case",
            "Custom branding options",
            "Suitable for all skin types",
          ],
        },
      ],
    },
    {
      name: "Electronics",
      subcategories: ["Power Banks", "Audio Devices", "Smart Gadgets"],
      description: "High-quality electronic gadgets and accessories",
      products: [
        {
          name: "Premium Power Bank",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description:
            "10000mAh capacity with fast charging support, perfect for corporate gifting and employee rewards.",
          moq: 10,
          price: "₹1,299 onwards",
          features: ["10000mAh capacity", "Fast charging support", "Multiple ports", "Custom branding available"],
        },
        {
          name: "Wireless Earbuds",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "High-quality sound with noise cancellation, ideal for executives and corporate gifts.",
          moq: 5,
          price: "₹2,499 onwards",
          features: ["Active noise cancellation", "Bluetooth 5.0", "Custom carrying case", "Logo printing available"],
        },
      ],
    },
    {
      name: "Food & Beverage",
      subcategories: ["Gourmet Hampers", "Premium Chocolates", "Specialty Teas"],
      description: "Delicious food and beverage gifts for corporate occasions",
      products: [
        {
          name: "Luxury Chocolate Box",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium assorted chocolates in elegant packaging for corporate gifting.",
          moq: 20,
          price: "₹999 onwards",
          features: ["Gourmet chocolates", "Elegant packaging", "Custom branding available", "Long shelf life"],
        },
        {
          name: "Executive Tea Collection",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium tea assortment in elegant packaging for corporate gifting.",
          moq: 15,
          price: "₹1,499 onwards",
          features: [
            "Premium tea varieties",
            "Elegant wooden box",
            "Custom branding options",
            "Perfect for executives",
          ],
        },
      ],
    },
    {
      name: "Deo's & Edt's",
      subcategories: ["Premium Deodorants", "Luxury Perfumes", "Gift Sets"],
      description: "Premium fragrances for corporate gifting",
      products: [
        {
          name: "Executive Perfume Collection",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium fragrances for executives and corporate gifting.",
          moq: 10,
          price: "₹2,499 onwards",
          features: ["Long-lasting fragrance", "Elegant packaging", "Custom branding available", "Gift box included"],
        },
        {
          name: "Luxury Deodorant Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium deodorants in elegant packaging for corporate gifting.",
          moq: 20,
          price: "₹999 onwards",
          features: [
            "24-hour protection",
            "Elegant packaging",
            "Custom branding options",
            "Suitable for all skin types",
          ],
        },
      ],
    },
    {
      name: "Gift Articles",
      subcategories: ["Trophies", "Awards", "Luxury Gifts"],
      description: "Elegant corporate gifts for all occasions",
      products: [
        {
          name: "Crystal Trophy Set",
          image: [
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          ],
          description: "Premium crystal awards for recognition, perfect for corporate events and annual functions.",
          moq: 3,
          price: "₹3,999 onwards",
          features: [
            "Premium crystal material",
            "Custom engraving",
            "Multiple designs available",
            "Presentation box included",
          ],
        },
        {
          name: "Luxury Pen Collection",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Executive pen sets from renowned brands, ideal for corporate gifting and executive rewards.",
          moq: 10,
          price: "₹999 onwards",
          features: [
            "Premium metal construction",
            "Smooth writing experience",
            "Gift box packaging",
            "Custom engraving available",
          ],
        },
      ],
    },
    {
      name: "Grooming Range",
      subcategories: ["Men's Grooming", "Women's Grooming", "Gift Sets"],
      description: "Premium grooming products for corporate gifting",
      products: [
        {
          name: "Executive Grooming Kit",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium grooming essentials for executives and corporate gifting.",
          moq: 5,
          price: "₹2,999 onwards",
          features: [
            "Premium quality tools",
            "Elegant leather case",
            "Custom branding available",
            "Perfect for executives",
          ],
        },
        {
          name: "Luxury Shaving Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium shaving kit in elegant packaging for corporate gifting.",
          moq: 10,
          price: "₹1,999 onwards",
          features: ["Premium razor", "Shaving cream and aftershave", "Elegant wooden box", "Custom branding options"],
        },
      ],
    },
    {
      name: "Health Care",
      subcategories: ["Fitness Products", "Wellness Kits", "Health Monitors"],
      description: "Health and wellness products for corporate gifting",
      products: [
        {
          name: "Executive Fitness Kit",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium fitness essentials for executives and corporate gifting.",
          moq: 10,
          price: "₹2,499 onwards",
          features: [
            "Quality fitness tools",
            "Elegant carrying case",
            "Custom branding available",
            "Perfect for wellness programs",
          ],
        },
        {
          name: "Digital Health Monitor",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium health monitoring device for executives and corporate gifting.",
          moq: 5,
          price: "₹3,999 onwards",
          features: [
            "Accurate measurements",
            "Multiple health metrics",
            "Elegant packaging",
            "Custom branding options",
          ],
        },
      ],
    },
    {
      name: "Home Care/Essentials",
      subcategories: ["Home Decor", "Kitchen Essentials", "Home Appliances"],
      description: "Premium home products for corporate gifting",
      products: [
        {
          name: "Luxury Home Decor Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium home decor items for executives and corporate gifting.",
          moq: 5,
          price: "₹3,999 onwards",
          features: ["Elegant design", "Premium materials", "Custom packaging available", "Perfect for home office"],
        },
        {
          name: "Executive Kitchen Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium kitchen essentials for executives and corporate gifting.",
          moq: 10,
          price: "₹2,999 onwards",
          features: ["Premium quality tools", "Elegant packaging", "Custom branding options", "Practical and stylish"],
        },
      ],
    },
    {
      name: "Hygiene Care",
      subcategories: ["Personal Hygiene", "Sanitization Products", "Travel Kits"],
      description: "Premium hygiene products for corporate gifting",
      products: [
        {
          name: "Executive Hygiene Kit",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium hygiene essentials for executives and corporate gifting.",
          moq: 20,
          price: "₹999 onwards",
          features: [
            "Essential hygiene products",
            "Elegant packaging",
            "Custom branding available",
            "Perfect for travel",
          ],
        },
        {
          name: "Premium Sanitization Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium sanitization products for executives and corporate gifting.",
          moq: 50,
          price: "₹599 onwards",
          features: [
            "Effective sanitization",
            "Elegant packaging",
            "Custom branding options",
            "Essential for office use",
          ],
        },
      ],
    },
    {
      name: "Personal Care",
      subcategories: ["Skincare", "Haircare", "Body Care"],
      description: "Premium personal care products for corporate gifting",
      products: [
        {
          name: "Luxury Skincare Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium skincare essentials for executives and corporate gifting.",
          moq: 10,
          price: "₹2,499 onwards",
          features: [
            "Premium ingredients",
            "Elegant packaging",
            "Custom branding available",
            "Suitable for all skin types",
          ],
        },
        {
          name: "Executive Haircare Kit",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium haircare products for executives and corporate gifting.",
          moq: 15,
          price: "₹1,999 onwards",
          features: [
            "Premium quality products",
            "Elegant packaging",
            "Custom branding options",
            "Suitable for all hair types",
          ],
        },
      ],
    },
    {
      name: "Promotion Items",
      subcategories: ["Branded Merchandise", "Event Giveaways", "Office Supplies"],
      description: "Premium promotional items for corporate branding",
      products: [
        {
          name: "Branded Merchandise Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium branded merchandise for corporate events and promotions.",
          moq: 100,
          price: "₹499 onwards",
          features: [
            "High-quality materials",
            "Custom branding included",
            "Multiple options available",
            "Bulk order discounts",
          ],
        },
        {
          name: "Executive Office Supplies",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium office supplies for corporate branding and promotions.",
          moq: 50,
          price: "₹799 onwards",
          features: [
            "Premium quality materials",
            "Custom branding included",
            "Elegant packaging options",
            "Practical for daily use",
          ],
        },
      ],
    },
    {
      name: "Stationary",
      subcategories: ["Executive Pens", "Notebooks", "Desk Accessories"],
      description: "Premium stationery for corporate gifting",
      products: [
        {
          name: "Executive Pen Collection",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium pens for executives and corporate gifting.",
          moq: 20,
          price: "₹999 onwards",
          features: [
            "Premium writing experience",
            "Elegant packaging",
            "Custom engraving available",
            "Multiple styles available",
          ],
        },
        {
          name: "Luxury Notebook Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium notebooks for executives and corporate gifting.",
          moq: 30,
          price: "₹799 onwards",
          features: [
            "Premium paper quality",
            "Elegant leather binding",
            "Custom branding options",
            "Perfect for meetings",
          ],
        },
      ],
    },
    {
      name: "Gift Packed Combos",
      subcategories: ["Executive Combos", "Festive Hampers", "Custom Gift Sets"],
      description: "Premium gift combinations for corporate occasions",
      products: [
        {
          name: "Executive Gift Hamper",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium assorted gifts for executives and corporate occasions.",
          moq: 5,
          price: "₹4,999 onwards",
          features: [
            "Curated premium products",
            "Elegant packaging",
            "Custom branding available",
            "Perfect for special occasions",
          ],
        },
        {
          name: "Festive Celebration Box",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium festive gifts for corporate celebrations and occasions.",
          moq: 10,
          price: "₹3,499 onwards",
          features: ["Festive themed products", "Elegant gift box", "Custom branding options", "Perfect for holidays"],
        },
      ],
    },
    {
      name: "Travel & Accessories",
      subcategories: ["Luggage", "Travel Essentials", "Travel Comfort"],
      description: "Premium travel products for corporate gifting",
      products: [
        {
          name: "Executive Travel Set",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium travel essentials for executives and corporate gifting.",
          moq: 5,
          price: "₹3,999 onwards",
          features: [
            "Premium quality materials",
            "Elegant packaging",
            "Custom branding available",
            "Perfect for business travel",
          ],
        },
        {
          name: "Luxury Travel Accessories",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250205-WA0001%5B1%5D.jpg-p7FZdhNTonHBNtPm30VQ6lQsWW6nzm.jpeg",
          description: "Premium travel accessories for executives and corporate gifting.",
          moq: 10,
          price: "₹2,499 onwards",
          features: [
            "Travel comfort essentials",
            "Elegant carrying case",
            "Custom branding options",
            "Perfect for frequent travelers",
          ],
        },
      ],
    },
  ]

  const sidebarCategories = [
    {
      name: "All Products",
      subcategories: [],
    },
    ...categories.map((cat) => ({
      name: cat.name,
      subcategories: cat.subcategories,
    })),
  ]

  const filteredCategories =
    selectedCategory === "All Products"
      ? categories
      : categories.filter((cat) => cat.name === selectedCategory || cat.subcategories.includes(selectedCategory))

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <ProductSidebar
              categories={sidebarCategories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              isOpen={isSidebarOpen}
              onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 pt-16 lg:pt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
              <p className="text-xl text-gray-600">Discover our extensive range of premium corporate merchandise</p>
            </motion.div>

            <div className="space-y-16">
              {filteredCategories.map((category, index) => (
                <CategorySection key={index} category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products

