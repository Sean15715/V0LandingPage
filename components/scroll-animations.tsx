"use client"

import { useEffect } from "react"

export function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")

          // Handle staggered animations for cards and process steps
          const children = entry.target.querySelectorAll(".card-reveal, .process-step")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate")
            }, index * 100) // 100ms stagger delay
          })
        }
      })
    }, observerOptions)

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(".scroll-reveal, .card-reveal, .process-step")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
