"use client"

import React from "react"
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider"

export default function PeeklutCarousel() {
  const carouselId = React.useId()
  const id = `peeklut-carousel-${carouselId}`
  
  const scrollBy = (direction: 'prev' | 'next') => {
    const el = document.getElementById(id)
    if (!el) return
    
    const containerWidth = el.offsetWidth
    const scrollDistance = containerWidth * 0.8 // Scroll by 80% of container width
    
    if (direction === 'next') {
      // Check if we're at or near the end
      const maxScroll = el.scrollWidth - el.offsetWidth
      const currentScroll = el.scrollLeft
      const newScroll = Math.min(currentScroll + scrollDistance, maxScroll)
      el.scrollTo({ left: newScroll, behavior: 'smooth' })
    } else {
      // Scroll previous
      const newScroll = Math.max(el.scrollLeft - scrollDistance, 0)
      el.scrollTo({ left: newScroll, behavior: 'smooth' })
    }
  }
  return (
    <div className="relative">
      <button aria-label="Previous" className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/80 p-3 backdrop-blur hover:bg-black/90 transition-colors shadow-lg" onClick={() => scrollBy('prev')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="sr-only">Previous</span>
      </button>
      <button aria-label="Next" className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10 bg-black/80 p-3 backdrop-blur hover:bg-black/90 transition-colors shadow-lg" onClick={() => scrollBy('next')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="sr-only">Next</span>
      </button>
      <div id={id} className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-p-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: 'none' }}>
        <style>{`#${id}::-webkit-scrollbar{display:none}`}</style>
        {[
          { initial: 55 },
          { initial: 35 },
          { initial: 70 },
          { initial: 45 },
        ].map((s, i) => (
          <div key={i} className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-[44%] lg:w-[30%] xl:w-[28%] 2xl:w-[24%]">
            <BeforeAfterSlider
              beforeSrc="/peeklut_before.jpeg"
              afterSrc="/peek_lut_after.jpeg"
              alt={`PeekLUT comparison ${i + 1}`}
              aspect="4/3"
              initial={s.initial}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
