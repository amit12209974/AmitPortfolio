"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface ProgrammingProfileProps {
  platform: string
  username: string
  rating: string
  problems?: string
  contests?: string
  link: string
  icon: string
}

export default function ProgrammingProfile({
  platform,
  username,
  rating,
  problems,
  contests,
  link,
  icon,
}: ProgrammingProfileProps) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(168, 85, 247, 0.3)",
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-12 h-12 rounded-lg overflow-hidden">
          <Image src={icon || "/placeholder.svg"} alt={platform} width={50} height={50} className="object-cover" />
        </div>

        <div>
          <h3 className="font-bold text-white">{platform}</h3>
          <p className="text-sm text-purple-400">@{username}</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Rating:</span>
          <span className="font-semibold text-white">{rating}</span>
        </div>

        {problems && (
          <div className="flex justify-between">
            <span className="text-gray-400">Problems Solved:</span>
            <span className="font-semibold text-white">{problems}</span>
          </div>
        )}

        {contests && (
          <div className="flex justify-between">
            <span className="text-gray-400">Contests:</span>
            <span className="font-semibold text-white">{contests}</span>
          </div>
        )}
      </div>

      <Link
        href={link}
        className="inline-flex items-center text-sm text-gray-300 hover:text-purple-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Profile
        <ExternalLink className="w-4 h-4 ml-1" />
      </Link>
    </motion.div>
  )
}
