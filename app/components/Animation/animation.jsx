"use client"

import { useEffect, useState, useRef } from "react"
import "./AnimatedBackground.css"

const AnimatedBackground = ({ type = "particles" }) => {
  const backgroundRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (backgroundRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  const renderParticles = () => {
    if (type !== "particles") return null

    const particles = []
    const particleCount = Math.floor((dimensions.width * dimensions.height) / 10000)

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 1
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      const duration = Math.random() * 60 + 30
      const delay = Math.random() * 40

      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}px`,
            top: `${y}px`,
            opacity: Math.random() * 0.5,
            animation: `floatingBubbles ${duration}s linear ${delay}s infinite`,
          }}
        />,
      )
    }

    return particles
  }

  const renderWaves = () => {
    if (type !== "waves") return null

    return (
      <div className="waves-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    )
  }

  return (
    <div ref={backgroundRef} className={`animated-bg ${type}-bg`}>
      {renderParticles()}
      {renderWaves()}
    </div>
  )
}

export default AnimatedBackground

