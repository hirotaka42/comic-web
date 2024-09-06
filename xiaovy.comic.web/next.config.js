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
  // exportPathMapを設定して静的ページのパスを明示的に指定する
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // 他のページのパスを追加する
    };
  },
  // CSS最適化の設定
  webpack: (config, { dev, isServer, webpack }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      };
    }
    return config;
  },
}

module.exports = nextConfig
