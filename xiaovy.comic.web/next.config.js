/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? '/comic-web' : ''

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // next exportを使えるように画像最適化APIを無効化
  images: {
    unoptimized: true,
  },
  assetPrefix: prefixPath,
  basePath: prefixPath,
}

module.exports = nextConfig
