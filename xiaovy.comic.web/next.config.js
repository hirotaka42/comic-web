/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // next exportを使えるように画像最適化APIを無効化
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
