import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.giphy.com',

        experimental: {
    nodeMiddleware: true, // TEMPORARY: Only needed until Edge runtime support is added
  }
};

export default nextConfig;
