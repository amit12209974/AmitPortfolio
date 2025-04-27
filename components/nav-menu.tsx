"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import useMobile from "@/hooks/use-mobile"

interface NavMenuProps {
  sections: {
    id: string
    label: string
    icon: React.ReactNode
  }[]
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function NavMenu({ sections, activeSection, setActiveSection }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
    if (isMobile) {
      setIsOpen(false)
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections, setActiveSection])

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMenu}
          className="bg-gray-900/80 backdrop-blur-sm border-gray-700 text-white hover:bg-gray-800 hover:text-cyan-400"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Desktop navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 hidden md:block"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex justify-center space-x-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavClick(section.id)}
                    className={cn(
                      "text-gray-400 hover:text-cyan-400 transition-colors",
                      activeSection === section.id && "text-cyan-400 bg-gray-800/50",
                    )}
                  >
                    <span className="flex items-center">
                      {section.icon}
                      <span className="ml-2">{section.label}</span>
                    </span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-64 bg-gray-900 border-l border-gray-800 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-5">
                <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
                  Navigation
                </h2>

                <ul className="space-y-2">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-gray-400 hover:text-cyan-400 transition-colors",
                          activeSection === section.id && "text-cyan-400 bg-gray-800/50",
                        )}
                        onClick={() => handleNavClick(section.id)}
                      >
                        <span className="flex items-center">
                          {section.icon}
                          <span className="ml-2">{section.label}</span>
                        </span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
