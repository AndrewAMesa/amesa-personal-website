import type { MetadataRoute } from "next";
import { navigation, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item) => ({
    url: `${site.domain}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/" ? ("monthly" as const) : ("yearly" as const),
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
