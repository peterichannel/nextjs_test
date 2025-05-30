/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs_test' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nextjs_test/' : '',
}

module.exports = nextConfig
