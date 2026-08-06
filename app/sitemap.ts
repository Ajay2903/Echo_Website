import type { MetadataRoute } from "next";

// TODO: replace with the real production domain before launch.
const BASE = "https://echo-journal.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: BASE, lastModified, priority: 1 },
    { url: `${BASE}/privacy`, lastModified, priority: 0.4 },
    { url: `${BASE}/terms`, lastModified, priority: 0.4 },
  ];
}
