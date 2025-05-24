/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nextjs_test',
  assetPrefix: '/nextjs_test/',
  trailingSlash: true,
}

module.exports = nextConfig
