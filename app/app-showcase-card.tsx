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
    // Updated size to be square: removed max-w-4xl, added w-96 h-96
    <Card className="relative w-96 h-96 overflow-hidden bg-black-1400 border border-white/20 text-white rounded-xl shadow-lg backdrop-blur-sm animate-tilt-shaking flex flex-col">
      {/* Adjusted Top Image height */}
      <div className="relative w-full h-64 flex-shrink-0"> {/* Increased height from h-32 to h-64 and prevent shrinking */}
        {/* Container for image */}
        <Image
          src="/icon.svg" // Replace with your actual image path
          alt="Manifesto Top Image" // Add descriptive alt text
          layout="fill" // Use layout fill to cover the container
          objectFit="cover"
        />
      </div>

      {/* Added flex-grow to content to fill remaining space */}
      <CardContent className="text-base font-light leading-relaxed text-white/80 space-y-2 relative z-[5] flex-grow flex flex-col justify-end">
        {/* Ensure content is above image if overlapping */}
        {/* Signature and Names - Adjusted spacing and alignment */}
        <div className="text-center mt-auto"> {/* Pushes content to the bottom */}
          <span className="text-xl font-bold text-white">ShutterCraft</span>
          <br/>
            <span className="text-sm font-semibold text-white"> {/* Adjusted text size */}
              Plan, create, and record professional-quality video on your iPhone with ShutterCraft.
            </span>
        </div>
      </CardContent>
    </Card>
  );
}
