"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X } from "lucide-react"

export function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
                >
                    <a
                        href="#consultation"
                        className="group flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-2xl transition-all hover:bg-accent/90 active:scale-95"
                    >
                        <span className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-xs">
                            Free Case Evaluation
                        </span>
                        <MessageSquare className="h-5 w-5" />
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
