import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack doesn't walk up to C:\projects
  // looking for a lockfile.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
