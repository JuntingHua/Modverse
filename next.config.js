/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  // Enable static exports
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add basePath for subdomain
  basePath: '',
  // Add assetPrefix for subdomain
  assetPrefix: '',
}

module.exports = nextConfig 