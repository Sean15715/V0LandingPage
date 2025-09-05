"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Navigation() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isAtTop 
        ? 'bg-white translate-y-0 opacity-100' 
        : 'bg-white -translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Image 
                src="/TradeMark/LightBlue.png" 
                alt="Bravo Zoom Logo" 
                width={60} 
                height={60} 
                className="object-contain"
              />
              <h1 className="text-3xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
                  BRAVO
                </span>
                <span className="text-blue-600 ml-1">ZOOM</span>
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('our-talent')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Our Talent
            </button>
            <button
              onClick={() => scrollToSection('our-process')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection('our-services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Mission
            </button>
          </div>

          {/* Get Started Button */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection('consultation')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/25"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
