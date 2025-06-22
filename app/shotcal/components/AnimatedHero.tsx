"use client"

import { Calendar, ArrowRight } from "lucide-react"

export default function AnimatedHero() {
  return (
    <div className="relative text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fadeInOut">
        Screenshot <ArrowRight className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 mx-2 mb-1" /> <span className="text-red-500">Calendar</span>
        <Calendar
          className="inline-block h-8 w-8 fill-red-500 stroke-white stroke-2 ml-2 mb-1 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </h1>
      <h1 className="absolute left-0 top-0 w-full text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fadeInOutDelayed text-center">
        Text <ArrowRight className="inline-block h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 mx-2 mb-1" /> <span className="text-red-500">Calendar</span>
        <Calendar
          className="inline-block h-8 w-8 fill-red-500 stroke-white stroke-2 ml-2 mb-1 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </h1>
    </div>
  )
}