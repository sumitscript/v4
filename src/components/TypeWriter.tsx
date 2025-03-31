"use client"
import { useState, useEffect } from "react"

interface TypeWriterProps {
  text: string
  speed?: number
  className?: string
}

const TypeWriter = ({ text, speed = 100, className = "" }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <div className={className}>
      <span>{displayText}</span>
      {!isComplete && <span className="animate-pulse">|</span>}
    </div>
  )
}

export default TypeWriter

