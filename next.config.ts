import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "placehold.co" },
      { hostname: "images8.alphacoders.com" },
    ],
  },
  /* config options here */
};

export default nextConfig;
