"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, animate } from "framer-motion"

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
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: duration,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("en-US").format(
              Math.floor(latest)
            )
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value, motionValue, delay, duration])

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  )
}
