"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
  github: string
}

export default function ProjectCard({ title, description, technologies, image, link, github }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-colors h-full flex flex-col"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(168, 85, 247, 0.3)",
      }}
    >
      <div className="relative overflow-hidden h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between">
            <Link
              href={github}
              className="p-2 bg-gray-900/80 rounded-full text-gray-300 hover:text-purple-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href={link}
              className="p-2 bg-gray-900/80 rounded-full text-gray-300 hover:text-cyan-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-full bg-gray-800 text-cyan-400 border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
