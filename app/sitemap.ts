import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE = "https://lauperlabs.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
    { path: "/peeklut", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/peeklut/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/peeklut/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/shotcal", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/shotcal/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/shotcal/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/opacity", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/opacity/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/opacity/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/stemlab", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/stemlab/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/stemlab/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ]
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
