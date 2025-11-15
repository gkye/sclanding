'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

interface ImageFilter {
  brightness: number // 0-200 (100 is normal)
  temperature: number // -50 to 50 (0 is normal)
  saturation: number // 0-200 (100 is normal)
  contrast: number // 0-200 (100 is normal)
}

const defaultFilter: ImageFilter = {
  brightness: 100,
  temperature: 0,
  saturation: 100,
  contrast: 100,
}

// Sample images - these would be replaced with actual Opacity app screenshots
const sampleImages = [
  '/grain.jpg',
  '/peeklut_app_icon.png',
  '/shot_cal_app_icon.png',
  '/grain.jpg',
  '/peeklut_app_icon.png',
  '/shot_cal_app_icon.png',
  '/grain.jpg',
  '/peeklut_app_icon.png',
]

export default function WaterfallGallery() {
  const [imageFilters, setImageFilters] = useState<ImageFilter[]>(
    sampleImages.map(() => ({ ...defaultFilter }))
  )
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 0.5) % 100)
    }, 30) // Smooth scrolling

    return () => clearInterval(interval)
  }, [])

  // Apply random filters to a random image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sampleImages.length)

      // Generate random filter values
      const randomFilter: ImageFilter = {
        brightness: 70 + Math.random() * 60, // 70-130
        temperature: -30 + Math.random() * 60, // -30 to 30
        saturation: 70 + Math.random() * 60, // 70-130
        contrast: 80 + Math.random() * 40, // 80-120
      }

      setImageFilters((prev) => {
        const newFilters = [...prev]
        newFilters[randomIndex] = randomFilter
        return newFilters
      })

      // Reset filter after 2.5 seconds for smooth transition
      setTimeout(() => {
        setImageFilters((prev) => {
          const newFilters = [...prev]
          newFilters[randomIndex] = { ...defaultFilter }
          return newFilters
        })
      }, 2500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Apply scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      const maxScroll = scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight
      scrollContainerRef.current.scrollTop = (scrollPosition / 100) * maxScroll
    }
  }, [scrollPosition])

  const getFilterStyle = (filter: ImageFilter) => {
    // Temperature is achieved using sepia and hue-rotate
    const tempEffect = filter.temperature > 0
      ? `sepia(${filter.temperature / 50}) hue-rotate(${filter.temperature}deg)`
      : `sepia(${Math.abs(filter.temperature) / 50}) hue-rotate(${filter.temperature * 2}deg)`

    return {
      filter: `brightness(${filter.brightness}%) saturate(${filter.saturation}%) contrast(${filter.contrast}%) ${tempEffect}`,
      transition: 'filter 0.8s ease-in-out',
    }
  }

  return (
    <div
      ref={scrollContainerRef}
      className="h-full overflow-hidden relative"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <div className="columns-2 gap-4 px-4">
        {sampleImages.map((src, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid rounded-xl overflow-hidden border border-white/10 bg-white/[0.04] ring-1 ring-white/10 shadow-lg"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover"
                style={getFilterStyle(imageFilters[idx])}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
