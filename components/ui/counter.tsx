"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface CounterProps {
  value: number
  duration?: number
  delay?: number
  className?: string
  suffix?: string
}

export function Counter({
  value,
  duration = 2,
  delay = 0,
  className = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value)
      }, delay * 1000)
    }
  }, [isInView, value, motionValue, delay])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        )
      }
    })
  }, [springValue])

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}
