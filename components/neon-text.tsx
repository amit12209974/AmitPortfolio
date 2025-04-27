"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeonTextProps {
  text: string
  className?: string
  color?: "cyan" | "purple" | "pink" | "gradient"
  animate?: boolean
}

export default function NeonText({ text, className, color = "cyan", animate = true }: NeonTextProps) {
  const colorMap = {
    cyan: {
      text: "text-cyan-400",
      glow: "text-shadow-[0_0_10px_rgba(34,211,238,0.7)]",
    },
    purple: {
      text: "text-purple-400",
      glow: "text-shadow-[0_0_10px_rgba(168,85,247,0.7)]",
    },
    pink: {
      text: "text-pink-400",
      glow: "text-shadow-[0_0_10px_rgba(236,72,153,0.7)]",
    },
    gradient: {
      text: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400",
      glow: "text-shadow-[0_0_10px_rgba(34,211,238,0.5),0_0_15px_rgba(168,85,247,0.5)]",
    },
  }

  const textClasses = cn(colorMap[color].text, colorMap[color].glow, className)

  return animate ? (
    <motion.h2
      className={textClasses}
      animate={{
        textShadow: [
          "0 0 7px rgba(34, 211, 238, 0.6), 0 0 10px rgba(34, 211, 238, 0.4), 0 0 21px rgba(34, 211, 238, 0.2)",
          "0 0 10px rgba(34, 211, 238, 0.8), 0 0 15px rgba(34, 211, 238, 0.6), 0 0 25px rgba(34, 211, 238, 0.4)",
          "0 0 7px rgba(34, 211, 238, 0.6), 0 0 10px rgba(34, 211, 238, 0.4), 0 0 21px rgba(34, 211, 238, 0.2)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.h2>
  ) : (
    <h2 className={textClasses}>{text}</h2>
  )
}
