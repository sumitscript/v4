"use client"
import { MessageCircle } from "lucide-react"

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917506465298?text=Hello%20S.G%20Associates,%20I%20would%20like%20to%20inquire%20about%20your%20products.",
      "_blank",
    )
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  )
}

export default WhatsAppButton

