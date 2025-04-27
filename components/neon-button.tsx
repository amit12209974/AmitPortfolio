"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NeonButtonProps {
  children: ReactNode
  href?: string
  color?: "cyan" | "purple" | "pink"
  variant?: "solid" | "outline"
  className?: string
  onClick?: () => void
  target?: string
  download?: boolean
}

export default function NeonButton({
  children,
  href,
  color = "cyan",
  variant = "solid",
  className,
  onClick,
  target,
  download,
}: NeonButtonProps) {
  const colorMap = {
    cyan: {
      bg: "bg-cyan-500",
      text: "text-cyan-50",
      border: "border-cyan-500",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.5)]",
      hover: "hover:bg-cyan-600",
      outline: "text-cyan-400 hover:text-cyan-50 hover:bg-cyan-500/10",
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-50",
      border: "border-purple-500",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]",
      hover: "hover:bg-purple-600",
      outline: "text-purple-400 hover:text-purple-50 hover:bg-purple-500/10",
    },
    pink: {
      bg: "bg-pink-500",
      text: "text-pink-50",
      border: "border-pink-500",
      glow: "shadow-[0_0_15px_rgba(236,72,153,0.5)]",
      hover: "hover:bg-pink-600",
      outline: "text-pink-400 hover:text-pink-50 hover:bg-pink-500/10",
    },
  }

  const buttonClasses = cn(
    "relative px-6 py-3 rounded-md font-medium transition-all duration-300 overflow-hidden",
    variant === "solid"
      ? `${colorMap[color].bg} ${colorMap[color].text} ${colorMap[color].hover}`
      : `bg-transparent border ${colorMap[color].border} ${colorMap[color].outline}`,
    className,
  )

  const buttonContent = (
    <motion.span
      className="relative z-10 flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  )

  const glowEffect = (
    <motion.span
      className={`absolute inset-0 ${colorMap[color].glow} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
    />
  )

  if (href) {
    return (
      <Link href={href} className={`group ${buttonClasses}`} target={target} download={download}>
        {glowEffect}
        {buttonContent}
      </Link>
    )
  }

  return (
    <button className={`group ${buttonClasses}`} onClick={onClick}>
      {glowEffect}
      {buttonContent}
    </button>
  )
}
