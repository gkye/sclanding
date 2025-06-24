import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expand } from "lucide-react";
import React from "react";
import Image from "next/image"; // Import Image

// Helper component for highlighted text - Defined outside the main component
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-700/60 px-2 py-1 rounded-md text-white/90 mx-1 inline-block leading-tight">
    {children}
  </span>
);

// Renamed component to reflect its new purpose, or keep AppShowcaseCard if preferred
export default function ManifestoCard() {
  return (
    <Card className="relative w-80 h-96 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-white/10 text-white rounded-2xl shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20 flex flex-col group">
      {/* Icon Container */}
      <div className="flex items-center justify-center p-8 flex-grow">
        <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
          <Image
            src="/shot_cal_app_icon.png"
            alt="ShotCal App Icon"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-lg"
          />
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6 text-center space-y-3 bg-black/20 backdrop-blur-sm">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          ShotCal
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Transform screenshots into calendar events instantly
        </p>
        <div className="pt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
            iOS App
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
