/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  sassOptions: {
    includesPaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
