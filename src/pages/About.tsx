"use client"
import { motion } from "framer-motion"
import { Award, Users, Target, Clock } from "lucide-react"
import CounterAnimation from "../components/CounterAnimation"
import BackgroundElements from "../components/BackgroundElements"

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Products",
      description: "We source only the finest materials and products for our corporate gifts.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced team ensures perfect execution of every order.",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored gifting solutions to match your brand and requirements.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "We pride ourselves on meeting deadlines with precision.",
    },
  ]

  return (
    <div className="relative">
      {/* Background Elements with z-index to prevent overlapping */}
      <BackgroundElements className="z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            About S.G Associates
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading provider of corporate gifts and promotional items, dedicated to helping businesses make
            lasting impressions through thoughtful and high-quality corporate merchandise.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <CounterAnimation end={15} duration={2000} suffix="+" />
              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <CounterAnimation end={500} duration={2000} suffix="+" />
              <p className="mt-2 text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center">
              <CounterAnimation end={2000} duration={2000} suffix="+" />
              <p className="mt-2 text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <CounterAnimation end={1000} duration={2000} suffix="+" />
              <p className="mt-2 text-gray-600">Products</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Company Story */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg">
              <p className="text-gray-600 mb-4">
                Founded in 2008, S.G Associates has grown from a small gifting service to a comprehensive corporate
                merchandise solution provider. Our journey has been marked by a commitment to excellence and an
                unwavering focus on customer satisfaction.
              </p>
              <p className="text-gray-600">
                Today, we serve hundreds of businesses across the country, helping them strengthen their relationships
                with clients and employees through thoughtfully curated gifts and promotional items.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative and high-quality corporate gifting solutions that help businesses build stronger
              relationships and leave lasting impressions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted and innovative corporate gifting partner, known for excellence in product
              quality and customer service.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About

