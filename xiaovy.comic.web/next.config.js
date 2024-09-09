/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // next exportを使えるように画像最適化APIを無効化
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/comic-web' : '',

}

module.exports = nextConfig
