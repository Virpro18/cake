import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com" },
      { hostname: "cdn.discordapp.com" },
      { hostname: "images8.alphacoders.com" },
    ],
  },
  /* config options here */
};

export default nextConfig;
