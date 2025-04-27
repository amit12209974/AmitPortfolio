"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award } from "lucide-react"

interface HackathonCardProps {
  name: string
  date: string
  project: string
  achievement: string
  description: string
  image: string
}

export default function HackathonCard({ name, date, project, achievement, description, image }: HackathonCardProps) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-cyan-500 transition-colors"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(34, 211, 238, 0.3)",
      }}
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 relative h-full min-h-[200px]">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:bg-gradient-to-t flex items-center justify-center md:items-end md:justify-start p-6">
            <div>
              <h3 className="font-bold text-xl text-white">{name}</h3>
              <p className="text-cyan-400">{date}</p>
            </div>
          </div>
        </div>

        <div className="p-6 md:col-span-2">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-cyan-400">{achievement}</span>
          </div>

          <h4 className="text-lg font-bold mb-3 text-white">{project}</h4>
          <p className="text-gray-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {["React", "Node.js", "MongoDB", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-gray-800 text-cyan-400 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
