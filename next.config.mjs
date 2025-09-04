/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  // 生成相对路径，适用于本地文件系统
  assetPrefix: '',
  // 移除 basePath 以生成相对路径
  // basePath: process.env.NODE_ENV === 'production' ? '/V0LandingPage' : '',
}

export default nextConfig
