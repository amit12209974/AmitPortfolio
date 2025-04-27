"use client"

import { motion } from "framer-motion"

interface SkillCardProps {
  name: string
  level: number
}

export default function SkillCard({ name, level }: SkillCardProps) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-cyan-500 transition-colors"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(34, 211, 238, 0.3)",
      }}
    >
      <h3 className="font-bold text-lg mb-3 text-white">{name}</h3>

      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div
          className="h-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        <span>Beginner</span>
        <span>Advanced</span>
        <span>Expert</span>
      </div>
    </motion.div>
  )
}
