import type { MetadataRoute } from "next";
import { site } from "@/app/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

  return site.routes.map((route) => ({
    url: `${base}${route.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.href === "/" ? 1 : 0.8,
  }));
}
