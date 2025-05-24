/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs_test' : '',
}

module.exports = nextConfig
