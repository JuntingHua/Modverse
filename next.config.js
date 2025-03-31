/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove the static export configuration since we need API routes
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // }
}

module.exports = nextConfig 