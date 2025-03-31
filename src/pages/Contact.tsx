"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [{ text: "+91 7506465298", link: "tel:+917506465298" }],
    },
    {
      icon: Mail,
      title: "Email",
      details: [{ text: "sgassociates.mumbai@gmail.com", link: "mailto:sgassociates.mumbai@gmail.com" }],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        { text: "G-24 Siddhik Mohammad, Gaondevi Road", link: null },
        { text: "Near Sai Baba Mandir, Poisar Kandivali (E)", link: null },
        { text: "Mumbai - 400101", link: null },
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        { text: "Monday - Friday: 9AM - 6PM", link: null },
        { text: "Saturday: 10AM - 2PM", link: null },
      ],
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-gray-600">Get in touch with us for all your corporate gifting needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <info.icon className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                </div>
                {info.details.map((detail) => (
                  <p key={detail.text} className="text-gray-600 ml-9">
                    {detail.link ? (
                      <a href={detail.link} className="hover:text-blue-600 transition-colors">
                        {detail.text}
                      </a>
                    ) : (
                      detail.text
                    )}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

