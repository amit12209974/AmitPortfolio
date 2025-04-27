"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  image: string
  link: string
}

export default function CertificationCard({ title, issuer, date, image, link }: CertificationCardProps) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-cyan-500 transition-colors"
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(34, 211, 238, 0.3)",
      }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/50">
          <Image src={image || "/placeholder.svg"} alt={issuer} width={100} height={100} className="object-cover" />
        </div>

        <div>
          <h3 className="font-bold text-white">{issuer}</h3>
          <p className="text-sm text-cyan-400">{date}</p>
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-3 text-white">{title}</h4>

      <Link
        href={link}
        className="inline-flex items-center text-sm text-gray-300 hover:text-cyan-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Certificate
        <ExternalLink className="w-4 h-4 ml-1" />
      </Link>
    </motion.div>
  )
}
