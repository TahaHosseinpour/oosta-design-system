import type { NextConfig } from "next";

// On GitHub Pages the site is served from /<repo>/, so the CI build sets
// PAGES_BASE_PATH. Locally it stays unset, so dev/build run at the root.
const basePath = process.env.PAGES_BASE_PATH || undefined;

const nextConfig: NextConfig = {
  output: "export", // static HTML export -> ./out
  trailingSlash: true, // emit /route/index.html so nested routes work on Pages
  basePath,
  images: {
    unoptimized: true, // required for static export (no image optimization server)
  },
};

export default nextConfig;
