'use client'

import { useState, useEffect } from 'react'
// import CustomCursor from './CustomCursor'
import 'css/hero.css'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* <CustomCursor /> */}
      <section id="hero" className={`hero ${isScrolled ? 'scrolled' : ''}`}>
        <div className="hero-content">
          <div className="hero-left">
            <h1>Rudolfh Mazon</h1>
            <p>Based in Calapan City, PH</p>
            <p className="availability">Available for a full-time position</p>
          </div>
          <div className="hero-right">
            <h2>Digital Designer & Web Developer</h2>
          </div>
        </div>
      </section>
    </>
  )
}