/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 90],
  },
  experimental: {
    turbopack: {
      root: '.',
    },
  },
}

export default nextConfig
