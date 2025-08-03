import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Expand } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Helper component for highlighted text - Defined outside the main component
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-700/60 px-2 py-1 rounded-md text-white/90 mx-1 inline-block leading-tight">
    {children}
  </span>
);

// App data interface
interface AppData {
  name: string;
  description: string;
  icon: string;
  link: string;
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

// App data
const apps: AppData[] = [
  {
    name: "ShotCal",
    description: "Transform screenshots into calendar events instantly",
    icon: "/shot_cal_app_icon.png",
    link: "/shotcal",
    colorScheme: {
      primary: "blue",
      secondary: "blue-500/20",
      accent: "blue-300"
    }
  },
  {
    name: "PeekLUT",
    description: "Video enhancement with LUT application and precision color grading",
    icon: "/peeklut_app_icon.png",
    link: "/peeklut",
    colorScheme: {
      primary: "purple",
      secondary: "purple-500/20",
      accent: "purple-300"
    }
  }
];

// Individual app card component
function AppCard({ app }: { app: AppData }) {
  return (
    <Link href={app.link} className="hover:text-red">
      <Card className={`relative w-80 h-96 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-white/10 text-white rounded-2xl shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-${app.colorScheme.primary}-500/20 flex flex-col group`}>
        {/* Icon Container */}
        <div className="flex items-center justify-center p-8 flex-grow">
          <div className="relative w-24 h-24 group-hover:scale-110 transition-transform duration-300">
            <Image
              src={app.icon}
              alt={`${app.name} App Icon`}
              layout="fill"
              objectFit="contain"
              className="drop-shadow-lg rounded-2xl"
            />
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-6 text-center space-y-3 bg-black/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {app.name}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {app.description}
          </p>
          <div className="pt-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${app.colorScheme.secondary} text-${app.colorScheme.accent} border border-${app.colorScheme.primary}-500/30`}>
              iOS App
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

// Main component that shows all apps
export default function ManifestoCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
      {apps.map((app) => (
        <AppCard key={app.name} app={app} />
      ))}
    </div>
  );
}
