"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"

interface CounterProps {
  end: number
  duration: number
  suffix?: string
}

const CounterAnimation = ({ end, duration, suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)

        setCount(Math.floor(end * percentage))

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [end, duration, isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl font-bold text-blue-600"
    >
      {count}
      {suffix}
    </motion.div>
  )
}

export default CounterAnimation

