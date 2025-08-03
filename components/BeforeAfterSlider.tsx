"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  beforeSrc: string
  afterSrc: string
  alt?: string
  initial?: number // 0..100
  rounded?: boolean
  aspect?: string // e.g. "16/9" or "4/3"
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  alt = "Before and After",
  initial = 50,
  rounded = true,
  aspect = "16/9",
  className,
  ...props
}: BeforeAfterSliderProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [percent, setPercent] = React.useState(Math.max(0, Math.min(100, initial)))
  const draggingRef = React.useRef(false)

  const onPosFromEvent = (e: React.MouseEvent | React.TouchEvent) => {
    const el = containerRef.current
    if (!el) return percent
    const rect = el.getBoundingClientRect()
    let clientX: number
    // @ts-ignore - unify touch/mouse
    if (e.touches && e.touches[0]) clientX = e.touches[0].clientX
    // @ts-ignore
    else if (e.changedTouches && e.changedTouches[0]) clientX = e.changedTouches[0].clientX
    else clientX = (e as React.MouseEvent).clientX
    const x = clientX - rect.left
    const p = (x / rect.width) * 100
    return Math.max(0, Math.min(100, p))
  }

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault()
    e.stopPropagation()
    draggingRef.current = true
    setPercent(onPosFromEvent(e))
  }
  const moveDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if (!draggingRef.current) return
    e.preventDefault()
    e.stopPropagation()
    setPercent(onPosFromEvent(e))
  }
  const stopDrag = (e?: React.TouchEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    draggingRef.current = false
  }

  React.useEffect(() => {
    const onUp = () => (draggingRef.current = false)
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchend", onUp)
    return () => {
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchend", onUp)
    }
  }, [])

  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2
    if (e.key === "ArrowLeft") setPercent(p => Math.max(0, p - step))
    if (e.key === "ArrowRight") setPercent(p => Math.min(100, p + step))
    if (e.key === "Home") setPercent(0)
    if (e.key === "End") setPercent(100)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full select-none touch-none cursor-grab active:cursor-grabbing",
        "user-select-none -webkit-user-select-none -moz-user-select-none -ms-user-select-none",
        rounded && "rounded-xl overflow-hidden",
        className
      )}
      style={{ aspectRatio: aspect, contain: "paint", userSelect: "none", WebkitUserSelect: "none" }}
      onMouseDown={startDrag}
      onMouseMove={moveDrag}
      onTouchStart={startDrag}
      onTouchMove={moveDrag}
      onTouchEnd={stopDrag}
      onDragStart={(e) => e.preventDefault()}
      {...props}
    >
      {/* After (base) */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <Image src={afterSrc} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover select-none" priority={false} />
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        aria-hidden
      >
        <Image src={beforeSrc} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover select-none" priority={false} />
      </div>

      {/* Handle */}
      <div
        role="slider"
        aria-label="Before/After slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(percent)}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0"
        style={{ left: `${percent}%`, transform: "translateX(-50%)", willChange: "left" }}
      >
        <div className="h-full w-0.5 bg-white/70 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-white text-black grid place-items-center shadow-lg border border-black/10">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5l7 7-7 7M11 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="pointer-events-none absolute left-3 top-3 rounded-md bg-black/50 px-2 py-1 text-xs font-medium uppercase tracking-wide">Before</div>
      <div className="pointer-events-none absolute right-3 top-3 rounded-md bg-black/50 px-2 py-1 text-xs font-medium uppercase tracking-wide">After</div>
    </div>
  )
}
